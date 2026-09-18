'use client';

import Link from 'next/link';

export default function Navbar() {
  // ฟังก์ชันช่วยเลื่อนหน้าจอแบบสมูท (Smooth Scroll) ไปยัง ID ที่กำหนด
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 flex justify-between items-center">
      {/* โลโก้ด้านซ้าย (คลิกแล้วเลื่อนกลับขึ้นไปบนสุด) */}
      <a 
        href="#home" 
        onClick={(e) => handleScroll(e, 'home')}
        className="text-white font-bold text-xl tracking-widest flex items-center gap-2 cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
        Formost.
      </a>

      {/* เมนูด้านขวา (แบบกล่องโค้งมน) */}
      <div className="hidden md:flex bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-full px-6 py-2 gap-8 text-sm text-gray-300">
        <a 
          href="#about" 
          onClick={(e) => handleScroll(e, 'about')}
          className="hover:text-cyan-400 transition-colors cursor-pointer"
        >
          About
        </a>
        <a 
          href="#projects" 
          onClick={(e) => handleScroll(e, 'projects')}
          className="hover:text-cyan-400 transition-colors cursor-pointer"
        >
          Projects
        </a>
        {/* เปลี่ยนจาก Certificate เป็น Experience และเปลี่ยน id เป็น experience */}
        <a 
          href="#experience" 
          onClick={(e) => handleScroll(e, 'experience')}
          className="hover:text-cyan-400 transition-colors cursor-pointer"
        >
          Experience
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleScroll(e, 'contact')}
          className="hover:text-cyan-400 transition-colors cursor-pointer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}