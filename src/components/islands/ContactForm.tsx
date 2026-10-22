import { useEffect, useRef, useState, type SubmitEvent } from 'react';

interface Textos {
  nombre: string;
  email: string;
  mensaje: string;
  enviar: string;
  enviando: string;
  ok: string;
  error: string;
  invalido: string;
}

interface Props {
  textos: Textos;
  idioma: string;
  turnstileSiteKey?: string;
}

type Estado = 'inactivo' | 'enviando' | 'ok' | 'error' | 'invalido';

declare global {
  interface Window {
    turnstile?: { render: (el: HTMLElement, opts: Record<string, unknown>) => string; reset: (id?: string) => void };
  }
}

const campo =
  'w-full rounded-xl border border-borde bg-fondo px-4 py-3 text-tinta placeholder:text-tinta-suave/60 transition focus:border-acento focus:outline-none focus:ring-2 focus:ring-acento/30 aria-[invalid=true]:border-red-500';

export default function ContactForm({ textos, idioma, turnstileSiteKey }: Props) {
  const [estado, setEstado] = useState<Estado>('inactivo');
  const [errores, setErrores] = useState<Record<string, boolean>>({});
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>(undefined);

  useEffect(() => {
    if (!turnstileSiteKey || !widget.current) return;
    const montar = () => {
      if (window.turnstile && widget.current && !widgetId.current) {
        widgetId.current = window.turnstile.render(widget.current, { sitekey: turnstileSiteKey, language: idioma });
      }
    };
    if (window.turnstile) return montar();
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.onload = montar;
    document.head.appendChild(script);
  }, [turnstileSiteKey, idioma]);

  async function enviar(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(e.currentTarget));
    setEstado('enviando');
    setErrores({});
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      });
      if (res.ok) {
        setEstado('ok');
        (e.target as HTMLFormElement).reset();
      } else if (res.status === 400) {
        const cuerpo = await res.json().catch(() => ({}));
        setErrores(Object.fromEntries((cuerpo.campos ?? []).map((c: string) => [c, true])));
        setEstado('invalido');
      } else {
        setEstado('error');
      }
    } catch {
      setEstado('error');
    } finally {
      window.turnstile?.reset(widgetId.current);
    }
  }

  const mensajes: Partial<Record<Estado, { texto: string; clase: string }>> = {
    ok: { texto: textos.ok, clase: 'text-emerald-600 dark:text-emerald-400' },
    error: { texto: textos.error, clase: 'text-red-600 dark:text-red-400' },
    invalido: { texto: textos.invalido, clase: 'text-red-600 dark:text-red-400' },
  };
  const aviso = mensajes[estado];

  return (
    <form onSubmit={enviar} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          {textos.nombre}
          <input name="nombre" required maxLength={100} autoComplete="name" className={campo} aria-invalid={errores.nombre} />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          {textos.email}
          <input name="email" type="email" required autoComplete="email" className={campo} aria-invalid={errores.email} />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium">
        {textos.mensaje}
        <textarea name="mensaje" required minLength={10} maxLength={5000} rows={6} className={campo} aria-invalid={errores.mensaje} />
      </label>
      {/* Honeypot: los bots lo rellenan, las personas no lo ven */}
      <input type="text" name="sitio" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="idioma" value={idioma} />
      {turnstileSiteKey && <div ref={widget} />}
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={estado === 'enviando'}
          className="rounded-full bg-tinta px-6 py-3 font-semibold text-fondo transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
        >
          {estado === 'enviando' ? textos.enviando : textos.enviar}
        </button>
        <p role="status" className={`text-sm ${aviso?.clase ?? ''}`}>
          {aviso?.texto}
        </p>
      </div>
    </form>
  );
}
