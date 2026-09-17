'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Component สร้างกลุ่มดาว 3 มิติหมุนวน (Particle Galaxy)
function StarField() {
  const pointsRef = useRef<THREE.Points>(null!);
  
  // สร้างจุดเม็ดดาว 1,500 จุดในพื้นที่ 3D
  const particleCount = 1500;
  const [positions] = useState(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 15;     // X
      pos[i + 1] = (Math.random() - 0.5) * 15; // Y
      pos[i + 2] = (Math.random() - 0.5) * 15; // Z
    }
    return pos;
  });

  // ทำให้กลุ่มดาวหมุนช้าๆ ตลอดเวลา
  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
      pointsRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function WelcomeIntro({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // แสดงหน้าอินโทร 2.5 วินาที แล้วเฟดออกเข้าหน้าหลัก
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050b14] overflow-hidden select-none pointer-events-none"
        >
          {/* ฉากหลัง 3D Canvas แสดงกลุ่มดาวหมุนวนสมจริง */}
          <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <StarField />
            </Canvas>
          </div>

          {/* ข้อความต้อนรับตรงกลาง */}
          <div className="text-center z-10 px-4 space-y-3">
            <motion.h1
              initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              Welcome to Portfolio
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 font-light italic tracking-wide"
            >
              Mr. Phacharapol Kitsana
            </motion.p>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xs md:text-sm text-gray-500 font-mono tracking-widest uppercase"
            >
              Computer Engineering
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}