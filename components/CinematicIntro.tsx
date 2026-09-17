'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // ให้แอนิเมชันเล่นต่อเนื่อง 3 วินาที แล้วเปิดเข้าหน้าเว็บไซต์หลักอย่างสมูท
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden select-none pointer-events-none"
        >
          {/* พื้นหลังดาร์กอวกาศพร้อมแสง Depth & Ambient Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-[#030712] to-black"></div>
          
          {/* แสงไลท์สวีปเรืองแสงวิ่งผ่านฉากหลัง */}
          <motion.div 
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 0.4, 0] }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent skew-x-12"
          ></motion.div>

          {/* กล่องข้อความ 3D Extruded Typography จำลองมิติความหนาและเงาสะท้อน */}
          <div className="relative z-10 text-center px-4 space-y-4">
            
            {/* ตัวหนังสือหลักแบบ Real 3D Extruded Shadow */}
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-white uppercase"
              style={{
                fontFamily: 'system-ui, sans-serif',
                textShadow: `
                  0 1px 0 #cbd5e1, 
                  0 2px 0 #94a3b8, 
                  0 3px 0 #64748b, 
                  0 4px 0 #475569, 
                  0 5px 0 #334155,
                  0 10px 20px rgba(0, 0, 0, 0.8),
                  0 0 30px rgba(34, 211, 238, 0.4)
                `
              }}
            >
              Phacharapol Kitsana
            </motion.h1>

            {/* Subtitle 3D มิติต่ำลงมา */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="text-cyan-400 font-mono text-sm md:text-lg tracking-[0.25em] uppercase"
              style={{
                textShadow: '0 2px 10px rgba(34, 211, 238, 0.5)'
              }}
            >
              Computer Engineering Student
            </motion.p>

            {/* สถานะโค้ดจำลองระบบ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-2"
            >
              <span className="text-xs text-gray-500 font-mono tracking-widest border border-gray-800 px-3 py-1 rounded-full bg-gray-900/50">
                SYSTEM READY // CO-OP CANDIDATE
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}