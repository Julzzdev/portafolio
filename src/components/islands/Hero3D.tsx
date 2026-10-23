import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Text } from '@react-three/drei';
import { Suspense, useRef, useState, type ComponentProps, type ReactNode } from 'react';
import { MathUtils, type Group } from 'three';
import { configureTextBuilder } from 'troika-three-text';

// Sin web worker: el worker de troika carga código desde blob:, lo que obligaría a
// relajar la CSP (script-src blob:). Con 4 etiquetas cortas el hilo principal basta.
configureTextBuilder({ useWorker: false });

const FUENTE = '/fonts/inter-800.woff';
const GROSOR = 0.22;
const FRENTE = GROSOR / 2 + 0.002;

/* ───────────── Logos ───────────── */

// Cada texto suspende por separado: las figuras se pintan aunque la fuente aún no cargue
function Etiqueta(props: ComponentProps<typeof Text>) {
  return (
    <Suspense fallback={null}>
      <Text font={FUENTE} {...props} />
    </Suspense>
  );
}

function Cuadro({ fondo, texto, colorTexto }: { fondo: string; texto: string; colorTexto: string }) {
  return (
    <group>
      <RoundedBox args={[1, 1, GROSOR]} radius={0.07} smoothness={4}>
        <meshStandardMaterial color={fondo} roughness={0.35} metalness={0.1} />
      </RoundedBox>
      <Etiqueta fontSize={0.44} color={colorTexto} anchorX="right" anchorY="bottom" position={[0.42, -0.44, FRENTE]}>
        {texto}
      </Etiqueta>
    </group>
  );
}

const LogoJS = () => <Cuadro fondo="#f7df1e" texto="JS" colorTexto="#111111" />;
const LogoTS = () => <Cuadro fondo="#3178c6" texto="TS" colorTexto="#ffffff" />;

function LogoNode() {
  return (
    <group>
      {/* Prisma hexagonal con la punta hacia arriba, como el logo de Node.js */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.72, 0.72, GROSOR, 6]} />
        <meshStandardMaterial color="#5fa04e" roughness={0.35} metalness={0.15} flatShading />
      </mesh>
      <Etiqueta fontSize={0.3} color="#ffffff" position={[0, 0, FRENTE]}>
        node
      </Etiqueta>
    </group>
  );
}

function LogoReact() {
  return (
    <group>
      {[0, Math.PI / 3, -Math.PI / 3].map((giro) => (
        <group key={giro} rotation={[0, 0, giro]}>
          <mesh scale={[1, 0.38, 1]}>
            <torusGeometry args={[0.62, 0.035, 16, 96]} />
            <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.35} />
          </mesh>
        </group>
      ))}
      <mesh>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#61dafb" emissive="#61dafb" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function LogoAWS() {
  const arco = Math.PI * 0.65;
  return (
    <group>
      <RoundedBox args={[1, 1, GROSOR]} radius={0.07} smoothness={4}>
        <meshStandardMaterial color="#232f3e" roughness={0.4} />
      </RoundedBox>
      <Etiqueta fontSize={0.34} color="#ffffff" position={[0, 0.1, FRENTE]}>
        aws
      </Etiqueta>
      {/* Sonrisa naranja: arco centrado en la parte inferior */}
      <mesh position={[0, 0.12, FRENTE]} rotation={[0, 0, -Math.PI / 2 - arco / 2]}>
        <torusGeometry args={[0.32, 0.035, 12, 48, arco]} />
        <meshStandardMaterial color="#ff9900" emissive="#ff9900" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function LogoBaseDatos() {
  return (
    <group rotation={[0.4, 0, 0]}>
      {[0.3, 0, -0.3].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.22, 48]} />
          <meshStandardMaterial color="#a28bff" roughness={0.3} metalness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

// Chispa estilizada de Claude: rayos de longitud irregular en terracota
const RAYOS = [0.62, 0.48, 0.57, 0.44, 0.64, 0.5, 0.55, 0.42, 0.6, 0.47, 0.58, 0.45];

function LogoClaude() {
  const grosor = 0.07;
  return (
    <group>
      {RAYOS.map((largo, i) => (
        <group key={i} rotation={[0, 0, (i / RAYOS.length) * Math.PI * 2 + (i % 2) * 0.06]}>
          <mesh position={[0, largo / 2, 0]}>
            <capsuleGeometry args={[grosor, largo - grosor * 2, 6, 16]} />
            <meshStandardMaterial color="#d97757" roughness={0.35} emissive="#d97757" emissiveIntensity={0.15} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ───────────── Órbita ───────────── */

const ORBITA = [LogoJS, LogoTS, LogoReact, LogoAWS, LogoClaude, LogoBaseDatos];
const RADIO = 2.05;

function Orbitante({ indice, children }: { indice: number; children: ReactNode }) {
  const ref = useRef<Group>(null);
  const [encima, setEncima] = useState(false);
  const desfase = (indice / ORBITA.length) * Math.PI * 2;

  useFrame(({ clock }, delta) => {
    if (!ref.current) return;
    const a = desfase + clock.elapsedTime * 0.25;
    // Elipse inclinada: los logos de abajo quedan al frente y se ven más grandes
    ref.current.position.set(Math.cos(a) * RADIO, -Math.sin(a) * RADIO * 0.62, Math.sin(a) * RADIO * 0.5);
    const escala = MathUtils.damp(ref.current.scale.x, encima ? 1.1 : 0.85, 8, delta);
    ref.current.scale.setScalar(escala);
  });

  return (
    <group ref={ref} onPointerOver={() => setEncima(true)} onPointerOut={() => setEncima(false)}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
        {children}
      </Float>
    </group>
  );
}

function Escena() {
  const grupo = useRef<Group>(null);

  // Sigue suavemente al puntero
  useFrame(({ pointer }, delta) => {
    if (!grupo.current) return;
    grupo.current.rotation.y = MathUtils.damp(grupo.current.rotation.y, pointer.x * 0.35, 3, delta);
    grupo.current.rotation.x = MathUtils.damp(grupo.current.rotation.x, -pointer.y * 0.25, 3, delta);
  });

  return (
    <group ref={grupo}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <group scale={1.25}>
          <LogoNode />
        </group>
      </Float>
      {ORBITA.map((Logo, i) => (
        <Orbitante key={i} indice={i}>
          <Logo />
        </Orbitante>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} />
      <pointLight position={[-4, -2, 3]} intensity={25} color="#2dd4bf" />
      <pointLight position={[4, 2, -2]} intensity={20} color="#a28bff" />
      <Suspense fallback={null}>
        <Escena />
      </Suspense>
    </Canvas>
  );
}
