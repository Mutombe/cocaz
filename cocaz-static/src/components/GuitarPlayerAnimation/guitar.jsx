// guitar.jsx
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Environment, useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { Vector3, MeshStandardMaterial, CanvasTexture } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GuitarPlayer = () => {
  const group = useRef();
  const { viewport, camera } = useThree();
  const { scene, animations } = useGLTF('./guitar.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions['PlayGuitar']) {
      actions['PlayGuitar'].play();
    }
  }, [actions]);

  useEffect(() => {
    camera.position.set(0, 1.5, 4);
    camera.lookAt(0, 1, 0);
  }, [camera]);

  const guitarMaterial = useMemo(() => {
    return new MeshStandardMaterial({
      color: '#8B4513',
      roughness: 0.5,
      metalness: 0.8,
    });
  }, []);

  const stringTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#C0C0C0';
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(0, i * 5, 128, 1);
    }
    return new CanvasTexture(canvas);
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
      <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={1} color="#00FFFF" />

      <group ref={group} scale={viewport.width > 10 ? 0.01 : 0.01 * viewport.width / 10}>
        <primitive object={scene} />
        <Rock position={[0, -1, 0]} />
        <Ocean position={[0, -1.5, 0]} />
        <Fireflies count={50} />
      </group>
    </>
  );
};

const Rock = ({ position }) => {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[2, 1]} />
      <meshStandardMaterial color="#808080" roughness={0.8} />
    </mesh>
  );
};

const Ocean = ({ position }) => {
  const mesh = useRef();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={mesh} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 32, 32]} />
      <meshStandardMaterial color="#0077be" metalness={0.2} roughness={0.8} />
    </mesh>
  );
};

const Fireflies = ({ count }) => {
  const mesh = useRef();
  const dummy = useMemo(() => new Vector3(), []);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      particle.mx += (state.mouse.x * viewport.width - particle.mx) * 0.01;
      particle.my += (state.mouse.y * viewport.height - particle.my) * 0.01;
      dummy.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.multiplyScalar(0.1);
      dummy.y += 2;
      dummy.z -= 2;
      mesh.current.setMatrixAt(i, dummy.updateMatrix());
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.05, 32, 32]} />
      <meshBasicMaterial color="#ffff00" />
    </instancedMesh>
  );
};

// Main App component
const App = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <GuitarPlayer />
      <OrbitControls />
    </Canvas>
  );
};

export default App;