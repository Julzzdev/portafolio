import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron, Torus } from '@react-three/drei';
import { useRef } from 'react';
import type { Group } from 'three';

function Escena() {
  const grupo = useRef<Group>(null);

  // Sigue suavemente al puntero
  useFrame(({ pointer }, delta) => {
    if (!grupo.current) return;
    grupo.current.rotation.y += (pointer.x * 0.6 - grupo.current.rotation.y) * delta * 2;
    grupo.current.rotation.x += (-pointer.y * 0.4 - grupo.current.rotation.x) * delta * 2;
  });

  return (
    <group ref={grupo}>
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
        <Icosahedron args={[1.35, 12]}>
          <MeshDistortMaterial color="#7c5cff" roughness={0.15} metalness={0.4} distort={0.38} speed={1.8} />
        </Icosahedron>
      </Float>
      <Float speed={2.4} rotationIntensity={2} floatIntensity={2}>
        <Torus args={[2.3, 0.05, 32, 160]} rotation={[1.2, 0.2, 0]}>
          <meshStandardMaterial color="#2dd4bf" emissive="#0d9488" emissiveIntensity={0.6} />
        </Torus>
      </Float>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={2.2} />
      <pointLight position={[-4, -2, 2]} intensity={30} color="#2dd4bf" />
      <Escena />
    </Canvas>
  );
}
