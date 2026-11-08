# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Principal:** quien llega a conocer lo que construye Julzz Labs, en especial odontólogos o dueños de clínicas dentales en México y gente cercana a ellos. Su siguiente paso es ir a la landing de Kirei.
- **Secundarios:** otros desarrolladores indie, posibles clientes y reclutadores. Encuentran proyectos, blog, contacto y CV sin que eso compita con Kirei.

## Product Purpose

Sitio personal de Julzz Labs, la marca indie de Julio Olvera: muestra lo que construye y lanza por su cuenta. Éxito: que el visitante entienda quién hace esto y haga clic hacia Kirei.

## Positioning

Una sola persona que construye productos reales de principio a fin, incluidas las partes aburridas: norma, cobros, facturación, correos. Viene de años de backend en producción para empresas grandes, y ahora lanza lo suyo desde México.

## Operating Context

Sitio bilingüe ES/EN (español por defecto). Se visita desde enlaces directos, redes y buscadores, en teléfono y computadora.

## Capabilities and Constraints

- Astro 7 estático con islas de React, Tailwind v4, MDX; desplegado en Vercel. Conservar i18n, SEO, RSS, imágenes OG, CSP con hashes y formulario de contacto.
- Objetivo de CI: Lighthouse alto en las cuatro categorías.
- **Kirei aún no se puede contratar.** La página de contratar muestra «Próximamente» hasta que haya régimen fiscal, sello digital y dominios. Nada aquí puede prometer que ya se puede comprar o probar.
- La landing de Kirei está en https://odontoweb-landing.vercel.app (dominio previsto kireidental.mx, aún sin comprar). La app está en https://kirei-dental.onrender.com.

## Brand Commitments

- Marca: **Julzz Labs**, firmado en primera persona por Julio («soy Julio, construyo y lanzo mis propios productos»). El nombre real sigue visible.
- Kirei es la acción principal del inicio.
- CV y experiencia laboral se conservan en segundo plano: `/cv` y su PDF siguen, y en el inicio solo una línea discreta de trayectoria.
- Los 8 proyectos se conservan agrupados por tipo: productos, trabajo para clientes y experimentos.
- Kirei tiene identidad propia que se respeta: nombre, silueta del diente y paleta tinta `#0a2326`, teal `#1d6b73`, esmalte `#f6f1e8`, menta `#a8f0d4`, coral `#ff6f4f`, mantequilla `#ffd87a`. Julzz Labs no debe confundirse con ella.

## Evidence on Hand

- Kirei, módulos reales: historia clínica NOM-004 con odontograma, agenda por odontólogo, recetas con cédulas y calculadora de dosis, alertas de alergia, presupuestos y pagos, reservas en línea, recordatorios por correo y WhatsApp, facturas CFDI, inventario, bitácoras sanitarias, aviso de privacidad con firma, Odontopediatría, exportación total de datos.
- Precios decididos con IVA incluido: Básico $649, Profesional $1,099, Clínica $2,149 al mes.
- Trayectoria en `src/data/experiencia.ts`; certificación Claude Certified Architect (Anthropic).
- Julzz Pay: pasarela de cobros propia sobre Stripe que usa Kirei.
- **No hay** testimonios, clientes ni cifras de uso publicables de Kirei. No inventarlos.

## Product Principles

1. Kirei primero: todo lo demás acompaña.
2. Mostrar cosas reales en lugar de adjetivos.
3. Honestidad sobre el estado de cada proyecto: lanzado, en camino, experimento.
4. Se nota que lo hizo una persona.
