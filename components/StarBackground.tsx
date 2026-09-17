'use client';

import { motion } from 'framer-motion';

export default function StarBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#030712] overflow-hidden pointer-events-none">
      {/* แสงนีออนเรืองแสงพื้นหลังแนวอวกาศ */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

      {/* ดวงดาวระยิบระยับขยับได้ทั่วจอ */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 0.8 + 0.2,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
            y: [`${Math.random() * 100}vh`, `${(Math.random() * 100) - 5}vh`],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.8)]"
        />
      ))}
    </div>
  );
}