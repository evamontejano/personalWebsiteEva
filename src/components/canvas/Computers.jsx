import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./monitor/scene.gltf");

  return (
    <mesh position={[0, isMobile ? 27 : 31, 0]} scale={isMobile ? [8, 8, 8] : [9, 9, 9]}>
      <hemisphereLight intensity={5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3} position={[0, isMobile ? 30 : 34, 0]} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.2 : 2}
        position={isMobile ? [0, -2.5, -2] : [0, -3, -1.5]}
        rotation={[-0.01, 0, 0]} 
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 12, 30], fov: 25, near: 0.1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, 12, 0]}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
