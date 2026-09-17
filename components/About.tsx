'use client';

// นำเข้าไอคอนจากไลบรารี react-icons ครบถ้วน
import { 
  SiPython, SiJavascript, SiCplusplus, SiMysql, 
  SiReact, SiNextdotjs, SiDocker, 
  SiFigma, SiSupabase, SiTailwindcss,
  SiExpo, SiGithub, SiHtml5, SiCss
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function About() {
  return (
    <div className="flex flex-col w-full relative pt-10 pb-20 text-white overflow-hidden">
      
      {/* 1. ส่วน About Me Bio ด้านบน */}
      <div className="w-full max-w-5xl mx-auto mb-16 px-6">
        <h3 className="text-cyan-400 font-bold tracking-widest text-sm mb-3">ABOUT ME</h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          4th-year Computer Engineering student seeking a Full-Stack Developer internship to apply and expand technical skills. Passionate about software development, IoT networks, and system architectures. Experienced in building cross-platform applications (React Native) and integrating backend systems (Python, SQL). A quick learner eager to tackle real-world technical challenges and contribute effectively to a fast-paced engineering team.
        </p>
      </div>

      {/* 2. ส่วนกลาง: รูปโปรไฟล์, ข้อมูลติดต่อ และ การศึกษา */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mb-20 px-6">
        
        {/* Card 1: รูปโปรไฟล์ & Contact Info */}
        <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] flex flex-col items-center text-center justify-between hover:border-cyan-400/50 transition-all duration-300">
          <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.3)] mb-4">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                 e.currentTarget.src = "https://via.placeholder.com/150?text=Profile";
              }}
            />
          </div>
          <div>
            <p className="text-cyan-400 font-semibold text-xs tracking-wider mb-1">CONTACT INFO</p>
            <h4 className="text-2xl font-bold text-white mb-2">Get in Touch</h4>
          </div>
        </div>

        {/* Card 2: รายละเอียดการติดต่อ & Status */}
        <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                <FiPhone />
              </div>
              <span>+66 83-539-9330</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                <FiMail />
              </div>
              <span className="truncate">aaaite0310@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-sm">
              <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                <FiMapPin />
              </div>
              <span className="text-xs">21/5 Soi Watcharaphon 1/1, Tha Raeng, Bang Khen, 10220</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
            <span className="text-gray-400 text-xs">Status</span>
            <span className="bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold text-xs px-3 py-1 rounded-xl">
              Co-op Candidate
            </span>
          </div>
        </div>

        {/* Card 3: Education */}
        <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
          <div>
            <p className="text-cyan-400 font-semibold text-xs tracking-wider mb-1">EDUCATION</p>
            <h4 className="text-xl font-bold text-white mb-1">Sripatum University</h4>
            <p className="text-gray-300 text-xs mb-3 leading-snug">Bachelor of Engineering in Computer Engineering</p>
            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Comprehensive coursework in software engineering, embedded systems, and database architecture.
            </p>
          </div>
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
            <span className="text-cyan-400 font-bold text-sm">GPAX: 3.30</span>
            <span className="text-gray-400 text-xs">Expected: 2027</span>
          </div>
        </div>

      </div>

      {/* 3. ส่วน Technical Skills & Tools */}
      <div className="w-full max-w-6xl mx-auto mb-24 px-6">
        <p className="text-gray-300 mb-6 font-medium text-lg">Technical Skills & Tools :</p>
        <div className="flex flex-wrap gap-4">
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#3776AB] hover:shadow-[0_0_20px_rgba(55,118,171,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiPython className="text-3xl text-[#3776AB] group-hover:scale-110 transition-transform duration-300" title="Python" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#F7DF1E] hover:shadow-[0_0_20px_rgba(247,223,30,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiJavascript className="text-3xl text-[#F7DF1E] group-hover:scale-110 transition-transform duration-300" title="JavaScript" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#00599C] hover:shadow-[0_0_20px_rgba(0,89,156,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiCplusplus className="text-3xl text-[#00599C] group-hover:scale-110 transition-transform duration-300" title="C++" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#4479A1] hover:shadow-[0_0_20px_rgba(68,121,161,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiMysql className="text-3xl text-[#4479A1] group-hover:scale-110 transition-transform duration-300" title="MySQL" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#3ECF8E] hover:shadow-[0_0_20px_rgba(62,207,142,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiSupabase className="text-3xl text-[#3ECF8E] group-hover:scale-110 transition-transform duration-300" title="Supabase" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#61DAFB] hover:shadow-[0_0_20px_rgba(97,218,251,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiReact className="text-3xl text-[#61DAFB] group-hover:scale-110 transition-transform duration-300" title="React" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiExpo className="text-3xl text-white group-hover:scale-110 transition-transform duration-300" title="Expo" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiNextdotjs className="text-3xl text-white group-hover:scale-110 transition-transform duration-300" title="Next.js" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#06B6D4] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiTailwindcss className="text-3xl text-[#06B6D4] group-hover:scale-110 transition-transform duration-300" title="Tailwind CSS" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#E34F26] hover:shadow-[0_0_20px_rgba(227,79,38,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiHtml5 className="text-3xl text-[#E34F26] group-hover:scale-110 transition-transform duration-300" title="HTML5" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#1572B6] hover:shadow-[0_0_20px_rgba(21,114,182,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiCss className="text-3xl text-[#1572B6] group-hover:scale-110 transition-transform duration-300" title="CSS3" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#FF9900] hover:shadow-[0_0_20px_rgba(255,153,0,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <FaAws className="text-3xl text-[#FF9900] group-hover:scale-110 transition-transform duration-300" title="AWS" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#2496ED] hover:shadow-[0_0_20px_rgba(36,150,237,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiDocker className="text-3xl text-[#2496ED] group-hover:scale-110 transition-transform duration-300" title="Docker" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiGithub className="text-3xl text-white group-hover:scale-110 transition-transform duration-300" title="GitHub" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center bg-[#0c1322] border border-blue-500/20 rounded-3xl shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] hover:border-[#F24E1E] hover:shadow-[0_0_20px_rgba(242,78,30,0.6)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
            <SiFigma className="text-3xl text-[#F24E1E] group-hover:scale-110 transition-transform duration-300" title="Figma" />
          </div>
        </div>
      </div>

      {/* 4. ส่วน Experience ด้านล่าง */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-2">
          Experience
        </h2>
        <p className="text-gray-400 text-center mb-12">My professional journey and background.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Bonchon */}
          <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
            <div>
              <p className="text-cyan-400 font-bold text-xs tracking-wider mb-2">PRESENT</p>
              <h4 className="text-2xl font-bold text-white mb-1">Part-time Staff</h4>
              <p className="text-gray-300 font-medium text-sm mb-4">Bonchon</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Manage back-of-house operations, specializing in food preparation and order fulfillment. Ensure fast and accurate cooking and packaging according to customer tickets in a fast-paced environment.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Kitchen Operations</span>
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Order Management</span>
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Teamwork</span>
            </div>
          </div>

          {/* Card 2: 7-Eleven */}
          <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
            <div>
              <p className="text-cyan-400 font-bold text-xs tracking-wider mb-2">JUN 2023 - OCT 2023</p>
              <h4 className="text-2xl font-bold text-white mb-1">Store Assistant</h4>
              <p className="text-gray-300 font-medium text-sm mb-4">7-Eleven</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Managed daily store operations, including POS transactions and inventory restocking, ensuring a seamless customer experience. Resolved customer inquiries efficiently, demonstrating strong communication and problem-solving skills under high-traffic conditions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Operations</span>
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Customer Service</span>
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Problem Solving</span>
            </div>
          </div>

          {/* Card 3: Story 90s */}
          <div className="bg-[#0c1322]/90 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 shadow-[0_6px_0_0_rgba(15,23,42,0.9),0_12px_25px_rgba(0,0,0,0.7)] flex flex-col justify-between hover:border-cyan-400/50 transition-all duration-300">
            <div>
              <p className="text-cyan-400 font-bold text-xs tracking-wider mb-2">SUMMER BREAKS</p>
              <h4 className="text-2xl font-bold text-white mb-1">Seasonal Service Staff</h4>
              <p className="text-gray-300 font-medium text-sm mb-4">Story 90s</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Managed front-of-house operations and delivered excellent customer service in a high-volume, fast-paced venue. Efficiently handled orders, coordinated with team members, and resolved on-the-spot issues to ensure a seamless customer experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Customer Service</span>
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rendered-full">Problem Solving</span>
              <span className="bg-gray-900 border border-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full">Fast-Paced Environment</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}