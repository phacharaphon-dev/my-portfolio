'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaFilePdf } from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    // ใส่ Access Key ของคุณเรียบร้อยแล้ว
    formData.append("access_key", "78e6324a-7286-4295-8a56-ab0ffb56e3e2");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset(); // ล้างข้อมูลในฟอร์มเมื่อส่งสำเร็จ
        setTimeout(() => setStatus(''), 5000); // ซ่อนข้อความ success หลังผ่านไป 5 วินาที
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6 max-w-5xl mx-auto text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase mb-2 block">Get in touch</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Interested in collaborating or have an amazing project in mind? Feel free to reach out through the channels below.
        </p>
      </div>

      {/* Main Container */}
      <div className="bg-[#0f172a]/80 backdrop-blur-md border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          <h3 className="text-xl font-bold text-white mb-2">Contact Info</h3>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 text-lg shrink-0">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Email</p>
              <p className="text-sm sm:text-base font-medium">aaaite0310@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 text-lg shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Phone</p>
              <p className="text-sm sm:text-base font-medium">083-539-9330</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-950/50 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 text-lg shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Location</p>
              <p className="text-sm sm:text-base font-medium">Bangkok, Thailand</p>
            </div>
          </div>

          <div className="mt-4 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-400 mb-4">Social Profiles</p>
            <div className="flex gap-4">
              <a href="https://github.com/phacharaphon-dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/phacharapol-ritsanan-7470902bb/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/share/1Hf8CJ9t5F/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/pha_f03?stkn=OTBma3I3MDUwcHJr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Form & Resume Button */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow">
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Name" 
              className="w-full bg-[#0b1120] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <input 
              type="email" 
              name="email"
              required
              placeholder="Your Email" 
              className="w-full bg-[#0b1120] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <textarea 
              name="message"
              required
              placeholder="Your Message..." 
              rows={4}
              className="w-full bg-[#0b1120] border border-gray-800 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
            ></textarea>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-cyan-950/50 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30 rounded-xl py-3 text-sm font-bold tracking-widest transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>

            {/* แจ้งเตือนสถานะการส่ง */}
            {status === 'success' && <p className="text-green-400 text-sm text-center mt-2">Message sent successfully! I'll get back to you soon.</p>}
            {status === 'error' && <p className="text-red-400 text-sm text-center mt-2">Something went wrong. Please try again.</p>}
          </form>

          {/* Resume Button */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-yellow-900/20 hover:bg-yellow-900/40 text-yellow-500 border border-yellow-600/50 rounded-xl py-3 text-sm font-bold tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <FaFilePdf className="text-lg" /> GET MY RESUME
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}