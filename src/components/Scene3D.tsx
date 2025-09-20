import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function FloatingGeometry() {
  const meshRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Floating spheres */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[0.8, 64, 64]} position={[-4, 2, -2]}>
          <meshStandardMaterial 
            color="#8b5cf6" 
            metalness={0.7} 
            roughness={0.2} 
            emissive="#4c1d95"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        <Box args={[1.2, 1.2, 1.2]} position={[4, -1, -1]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            metalness={0.8} 
            roughness={0.1}
            emissive="#1e40af"
            emissiveIntensity={0.1}
          />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={3}>
        <Torus args={[1, 0.4, 16, 32]} position={[0, 3, -3]}>
          <meshStandardMaterial 
            color="#06b6d4" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#0891b2"
            emissiveIntensity={0.2}
          />
        </Torus>
      </Float>

      {/* Additional smaller shapes */}
      <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.4, 32, 32]} position={[2, -2, 1]}>
          <meshStandardMaterial 
            color="#ec4899" 
            metalness={0.6} 
            roughness={0.3}
            emissive="#be185d"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={1.2} rotationIntensity={2.5} floatIntensity={1}>
        <Box args={[0.8, 0.8, 0.8]} position={[-2, -3, 2]}>
          <meshStandardMaterial 
            color="#10b981" 
            metalness={0.7} 
            roughness={0.2}
            emissive="#047857"
            emissiveIntensity={0.1}
          />
        </Box>
      </Float>
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <FloatingGeometry />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}