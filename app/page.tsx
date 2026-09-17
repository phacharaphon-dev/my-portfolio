'use client';

import StarBackground from '@/components/StarBackground';
import Navbar from '@/components/Navbar';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="relative bg-[#050b14] min-h-screen text-gray-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ใช้ฉากหลังดาวดั้งเดิมที่เสถียรและสวยงาม */}
      <StarBackground />
      
      {/* แถบนำทางด้านบน */}
      <Navbar />

      {/* เนื้อหาหน้าเว็บหลักทั้งหมด */}
      <div className="relative z-10">
        
        {/* Section 1: หน้า Welcome แรกสุด */}
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

        {/* Section 2: หน้า About */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-24 min-h-screen flex items-center justify-center">
          <About />
        </section>
        
      </div>
    </main>
  );
}