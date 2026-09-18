'use client';

import { useState } from 'react';
import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import StarWarpIntro from '@/components/StarWarpIntro'; // เอฟเฟกต์ดาวหมุนวนตามคลิป
import ProjectsSection from '@/components/ProjectsSection'; 
import Contact from '@/components/Contact'; // 👈 1. เพิ่มบรรทัดนี้นำเข้าหน้า Contact

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="relative bg-[#050b14] min-h-screen text-gray-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* เอฟเฟกต์ดาวหมุนวนพุ่งทะลุจอตอนเข้าเว็บครั้งแรก */}
      {showIntro && <StarWarpIntro onComplete={() => setShowIntro(false)} />}

      <StarBackground />
      <Navbar />

      <div className="relative z-10">
        <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-wider drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Welcome to Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light italic mb-1">
            Mr. Phacharapol Kitsana
          </p>
          <p className="text-md md:text-lg text-cyan-400 font-mono tracking-widest uppercase">
            Computer Engineering
          </p>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-24 min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        {/* 👈 2. เพิ่มส่วนของ Contact ต่อท้าย Projects */}
        <section id="contact">
          <Contact />
        </section>

      </div>
    </main>
  );
}