import { lazy, Suspense, useEffect, useState } from 'react';

const Hero3D = lazy(() => import('./Hero3D'));

// Three.js sólo se descarga en pantallas grandes y si no se pidió movimiento reducido
const CONSULTA = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)';

export default function Hero3DLoader() {
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const mq = matchMedia(CONSULTA);
    const actualizar = () => setActivo(mq.matches);
    actualizar();
    mq.addEventListener('change', actualizar);
    return () => mq.removeEventListener('change', actualizar);
  }, []);

  if (!activo) return null;
  return (
    <Suspense fallback={null}>
      <div className="size-full animate-[aparecer_1.2s_ease-out]">
        <Hero3D />
      </div>
    </Suspense>
  );
}
