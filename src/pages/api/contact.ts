import type { APIRoute } from 'astro';
import { z } from 'astro/zod';
import { Resend } from 'resend';
import {
  CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL,
  RESEND_API_KEY,
  TURNSTILE_SECRET_KEY,
} from 'astro:env/server';

export const prerender = false;

const esquema = z.object({
  nombre: z.string().trim().min(1).max(100),
  email: z.email().max(200),
  mensaje: z.string().trim().min(10).max(5000),
  idioma: z.enum(['es', 'en']).default('es'),
  sitio: z.string().max(0).optional(), // honeypot
  'cf-turnstile-response': z.string().optional(),
});

const json = (cuerpo: unknown, status = 200) =>
  new Response(JSON.stringify(cuerpo), { status, headers: { 'Content-Type': 'application/json' } });

async function verificarTurnstile(token: string | undefined, ip: string | null) {
  if (!TURNSTILE_SECRET_KEY) return true; // anti-spam deshabilitado
  if (!token) return false;
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token, ...(ip && { remoteip: ip }) }),
  });
  const { success } = (await res.json()) as { success: boolean };
  return success;
}

const escapar = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const datos = await request.json().catch(() => null);
  const resultado = esquema.safeParse(datos);

  if (!resultado.success) {
    // Un honeypot relleno se responde como éxito para no dar pistas al bot
    if (resultado.error.issues.some((i) => i.path[0] === 'sitio')) return json({ ok: true });
    const campos = [...new Set(resultado.error.issues.map((i) => String(i.path[0])))];
    return json({ ok: false, campos }, 400);
  }

  const { nombre, email, mensaje, idioma } = resultado.data;

  if (!(await verificarTurnstile(resultado.data['cf-turnstile-response'], clientAddress ?? null))) {
    return json({ ok: false, campos: ['turnstile'] }, 400);
  }

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.warn('[contact] Falta RESEND_API_KEY o CONTACT_TO_EMAIL; mensaje no enviado:', { nombre, email });
    return json({ ok: false }, 503);
  }

  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject: `Portafolio: mensaje de ${nombre} (${idioma})`,
    text: `${nombre} <${email}>\n\n${mensaje}`,
    html: `<p><strong>${escapar(nombre)}</strong> &lt;${escapar(email)}&gt;</p><p style="white-space:pre-wrap">${escapar(mensaje)}</p>`,
  });

  if (error) {
    console.error('[contact] Resend:', error);
    return json({ ok: false }, 502);
  }
  return json({ ok: true });
};
