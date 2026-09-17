'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

export default function StarWarpIntro({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 2. สร้างกลุ่มดวงดาวพุ่งวน (Star Warp Tunnel)
    const starCount = 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const velocities = new Float32Array(starCount);

    for (let i = 0; i < starCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;     // X
      positions[i + 1] = (Math.random() - 0.5) * 20; // Y
      positions[i + 2] = (Math.random() - 0.5) * 50; // Z
      velocities[i / 3] = Math.random() * 0.2 + 0.05; // ความเร็วดาวพุ่ง
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // ดีไซน์จุดดาวให้เรืองแสงกลมสวย
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.5, 'rgba(34,211,238,0.8)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.15,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    // 3. Animation Loop (ดาวหมุนวนและพุ่งเข้าหาจอแบบในคลิป)
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;

      for (let i = 0; i < starCount; i++) {
        arr[i * 3 + 2] += velocities[i]; // ขยับดาวเข้าหาจอ Z

        // ถอดดาวที่ทะลุจอแล้วกลับไปไว้ข้างหลังสุด
        if (arr[i * 3 + 2] > 5) {
          arr[i * 3 + 2] = -45;
        }
      }
      posAttr.needsUpdate = true;

      // หมุนวนกลุ่มดาวรอบแกน Z
      starField.rotation.z += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ตั้งเวลาให้เล่นอินโทร 3.5 วินาที แล้วตัดเข้าเว็บหลัก
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden select-none pointer-events-none"
        >
          {/* Canvas สำหรับเรนเดอร์ดาว 3D หมุนวนพุ่งทะลุจอ */}
          <div ref={mountRef} className="absolute inset-0 z-0"></div>

          {/* แสงนีออนเรืองแสงตรงกลางเสริมมิติ */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-black pointer-events-none"></div>

          {/* ข้อความเปิดตัวตรงกลาง */}
          <div className="relative z-10 text-center px-4 space-y-3">
            <motion.h1
              initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-7xl font-serif text-white tracking-widest drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]"
            >
              Welcome to Portfolio
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-2xl text-cyan-300 font-light italic tracking-wide"
            >
              Mr. Phacharapol Kitsana
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xs md:text-sm text-gray-400 font-mono tracking-[0.3em] uppercase pt-2"
            >
              Computer Engineering
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}