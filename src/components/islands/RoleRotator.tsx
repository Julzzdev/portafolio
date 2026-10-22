import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Props {
  roles: string[];
  intervalo?: number;
}

export default function RoleRotator({ roles, intervalo = 2600 }: Props) {
  const [indice, setIndice] = useState(0);
  const reducido = useReducedMotion();

  useEffect(() => {
    if (reducido) return;
    const id = setInterval(() => setIndice((i) => (i + 1) % roles.length), intervalo);
    return () => clearInterval(id);
  }, [roles.length, intervalo, reducido]);

  return (
    <LazyMotion features={domAnimation}>
      <span className="relative inline-grid overflow-hidden align-bottom" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <m.span
            key={roles[indice]}
            className="texto-gradiente col-start-1 row-start-1"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {roles[indice]}
          </m.span>
        </AnimatePresence>
      </span>
    </LazyMotion>
  );
}
