'use client';

// นำเข้าไอคอนจาก react-icons ที่ถูกต้อง
import { 
  SiPython, SiJavascript, SiCplusplus, SiMysql, 
  SiReact, SiNextdotjs, SiDocker, 
  SiFigma, SiSupabase, SiTailwindcss,
  SiExpo, SiGithub, SiHtml5, SiCss,
  SiCisco, SiNodered, SiRaspberrypi
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col w-full relative pt-10 pb-28 text-white overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* ================= 1. โซนบน: รูปโปรไฟล์ + ข้อมูลส่วนตัว & Skills ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-16">
        
        {/* ฝั่งซ้าย: รูปโปรไฟล์ */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-48 sm:w-64 lg:w-full max-w-xs aspect-[3/4] rounded-3xl overflow-hidden border border-blue-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative group">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                 e.currentTarget.src = "https://via.placeholder.com/400x500?text=Profile";
              }}
            />
          </div>
        </div>

        {/* ฝั่งขวา: ชื่อ, GPAX มหาลัย และ Tech Stack */}
        <div className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2">
            Phacharapol Kitsana
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-medium mb-6">
            Computer Engineering Student
          </h2>

          {/* กล่องเกรดมหาวิทยาลัย (GPAX 3.30) */}
          <div className="bg-[#0c1322]/80 backdrop-blur-md border border-blue-500/20 rounded-2xl p-5 sm:p-6 mb-8 shadow-lg max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <span className="text-cyan-400 font-bold text-xs tracking-wider uppercase block mb-1">Sripatum University</span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">Bachelor of Engineering in Computer Engineering</h3>
              <p className="text-xs text-gray-400 mt-1">2023 - PRESENT</p>
            </div>
            <div className="w-full sm:w-auto text-center sm:text-right shrink-0 pt-3 sm:pt-0 sm:pl-4 sm:border-l border-gray-800">
              <span className="text-xs text-gray-400 block mb-1">GPAX</span>
              <span className="text-2xl sm:text-3xl font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-4 py-2 rounded-xl inline-block">
                3.30
              </span>
            </div>
          </div>

          {/* Technical Skills & Tools */}
          <div>
            <p className="text-gray-300 font-medium text-sm mb-4">Technical Skills & Tools :</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {[
                { icon: <SiPython className="text-[#3776AB]" />, title: "Python" },
                { icon: <SiJavascript className="text-[#F7DF1E]" />, title: "JavaScript" },
                { icon: <SiCplusplus className="text-[#00599C]" />, title: "C++" },
                { icon: <SiMysql className="text-[#4479A1]" />, title: "MySQL" },
                { icon: <SiSupabase className="text-[#3ECF8E]" />, title: "Supabase" },
                { icon: <SiReact className="text-[#61DAFB]" />, title: "React" },
                { icon: <SiExpo className="text-white" />, title: "Expo" },
                { icon: <SiNextdotjs className="text-white" />, title: "Next.js" },
                { icon: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS" },
                { icon: <SiHtml5 className="text-[#E34F26]" />, title: "HTML5" },
                { icon: <SiCss className="text-[#1572B6]" />, title: "CSS3" },
                { icon: <FaAws className="text-[#FF9900]" />, title: "AWS" },
                { icon: <SiDocker className="text-[#2496ED]" />, title: "Docker" },
                { icon: <SiGithub className="text-white" />, title: "GitHub" },
                { icon: <SiFigma className="text-[#F24E1E]" />, title: "Figma" },
                { icon: <SiRaspberrypi className="text-[#C51A4A]" />, title: "Raspberry Pi" },
                { icon: <SiCisco className="text-[#1BA0D7]" />, title: "Cisco Packet Tracer" },
                { icon: <SiNodered className="text-[#8F0000]" />, title: "Node-RED" },
              ].map((skill, idx) => (
                <div 
                  key={idx}
                  className="w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center bg-[#0c1322]/90 border border-blue-500/20 rounded-2xl shadow-md hover:border-cyan-400/50 hover:scale-110 transition-all duration-300 cursor-pointer text-xl sm:text-2xl group"
                  title={skill.title}
                >
                  <span className="group-hover:scale-110 transition-transform">{skill.icon}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ================= 2. โซนกลาง: About Me Box ================= */}
      <div className="bg-[#0c1322]/80 backdrop-blur-md border border-blue-500/20 rounded-3xl p-6 sm:p-10 mb-20 shadow-xl">
        <h3 className="text-cyan-400 font-bold tracking-widest text-sm mb-4">ABOUT ME</h3>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          4th-year Computer Engineering student seeking a 4-month Cooperative Education placement. Specialized in end-to-end system development, encompassing full-stack web/mobile applications, Cloud deployment (AWS), and Industrial IoT architectures. Proven ability to integrate hardware microcontrollers (ESP32, Raspberry Pi) with complex backend databases and machine learning models. Eager to leverage system engineering, automation, and full-cycle development skills in a challenging technical environment.
        </p>
      </div>

      {/* ================= 3. โซนล่าง: Experience (ใส่ id="experience" ตรงนี้เพื่อให้กดลิงก์แล้วเลื่อนมาพอดี) ================= */}
      <div id="experience" className="w-full pt-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-3">
          Experience
        </h2>
        <p className="text-gray-400 text-center mb-10 text-xs sm:text-base">My professional journey and background.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Bonchon */}
          <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-black border border-red-500/40 overflow-hidden flex items-center justify-center p-0.5 shadow-md">
                  <img 
                    src="https://i.postimg.cc/2ymp8pG9/202507080805110158.webp" 
                    alt="Bonchon" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <span className="text-[10px] font-bold tracking-wider px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-gray-300">PRESENT</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Part-time Staff</h4>
              <p className="text-cyan-400 font-semibold text-sm mb-2">Bonchon</p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Manage back-of-house operations, specializing in food preparation and order fulfillment. Ensure fast and accurate cooking and packaging according to customer tickets in a fast-paced environment.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/80">
              <span className="bg-gray-900/80 border border-gray-700/60 text-gray-300 text-xs px-3 py-1 rounded-full">Kitchen Operations</span>
              <span className="bg-gray-900/80 border border-gray-700/60 text-gray-300 text-xs px-3 py-1 rounded-full">Teamwork</span>
            </div>
          </div>

          {/* Card 2: 7-Eleven */}
          <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-orange-500/40 overflow-hidden flex items-center justify-center p-0.5 shadow-md">
                  <img 
                    src="https://i.postimg.cc/0NJhY5Hd/images.png" 
                    alt="7-Eleven" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <span className="text-[10px] font-bold tracking-wider px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-gray-300">WORK</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Store Assistant</h4>
              <p className="text-cyan-400 font-semibold text-sm mb-2">7-Eleven</p>
              <p className="text-gray-400 text-xs mb-4">JUN 2023 - OCT 2023</p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Managed daily store operations, including POS transactions and inventory restocking, ensuring a seamless customer experience and efficient problem-solving.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/80">
              <span className="bg-gray-900/80 border border-gray-700/60 text-gray-300 text-xs px-3 py-1 rounded-full">Operations</span>
              <span className="bg-gray-900/80 border border-gray-700/60 text-gray-300 text-xs px-3 py-1 rounded-full">Customer Service</span>
            </div>
          </div>

          {/* Card 3: Story 90s */}
          <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-black border border-pink-500/40 overflow-hidden flex items-center justify-center p-0.5 shadow-md">
                  <img 
                    src="https://i.postimg.cc/sDmzx2tB/Screenshot-20260918-201457.jpg" 
                    alt="Story 90s" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <span className="text-[10px] font-bold tracking-wider px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-gray-300">SEASONAL</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Seasonal Service Staff</h4>
              <p className="text-cyan-400 font-semibold text-sm mb-2">Story 90s</p>
              <p className="text-gray-400 text-xs mb-4">SUMMER BREAKS</p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Managed front-of-house operations and delivered excellent customer service in a high-volume, fast-paced venue, handling orders and resolving on-the-spot issues.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/80">
              <span className="bg-gray-900/80 border border-gray-700/60 text-gray-300 text-xs px-3 py-1 rounded-full">Customer Service</span>
              <span className="bg-gray-900/80 border border-gray-700/60 text-gray-300 text-xs px-3 py-1 rounded-full">Fast-Paced</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}