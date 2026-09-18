'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';

type Project = {
  id: number;
  title: string;
  subtitle: string;
  role: string;
  tech_stack: string;
  overview: string;
  features: string;
  outcome: string;
  image_url: string;
  video_url: string;
};

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return '';
  let embedUrl = url.trim();
  if (embedUrl.includes('youtu.be/')) {
    return embedUrl.replace('youtu.be/', 'www.youtube.com/embed/');
  } else if (embedUrl.includes('watch?v=')) {
    return embedUrl.replace('watch?v=', 'embed/');
  }
  return embedUrl;
};

const getTechLogo = (techName: string) => {
  const name = techName.toLowerCase().trim();
  
  // จัด Node-RED ไว้บนสุดเพื่อป้องกันการทับซ้อน
  if (name.includes('node-red')) return 'https://cdn.simpleicons.org/nodered/8F0000';
  
  if (name.includes('react')) return 'https://cdn.simpleicons.org/react/61DAFB';
  if (name.includes('python')) return 'https://cdn.simpleicons.org/python/3776AB';
  if (name.includes('supabase')) return 'https://cdn.simpleicons.org/supabase/3ECF8E';
  if (name.includes('figma')) return 'https://cdn.simpleicons.org/figma/F24E1E';
  if (name.includes('node')) return 'https://cdn.simpleicons.org/nodedotjs/339933';
  if (name.includes('aws')) return 'https://cdn.simpleicons.org/amazonaws/FF9900';
  if (name.includes('cisco')) return 'https://cdn.simpleicons.org/cisco/1BA0D7';
  if (name.includes('github')) return 'https://cdn.simpleicons.org/github/ffffff';
  if (name.includes('c/c++')) return 'https://cdn.simpleicons.org/cplusplus/00599C';
  if (name.includes('mqtt')) return 'https://cdn.simpleicons.org/mqtt/660066';
  if (name.includes('esp32')) return 'https://cdn.simpleicons.org/espressif/E7352C';
  if (name.includes('line')) return 'https://cdn.simpleicons.org/line/00C300';
  if (name.includes('google')) return 'https://cdn.simpleicons.org/googleassistant/4285F4';
  
  // --- ไอคอนจาก Iconify API สำหรับโปรเจกต์ 8-Bit CPU (สีฟ้า Cyan) ---
  if (name.includes('logisim')) return 'https://api.iconify.design/lucide/cpu.svg?color=%2322d3ee'; 
  if (name.includes('alu design')) return 'https://api.iconify.design/lucide/settings.svg?color=%2322d3ee'; 
  if (name.includes('instruction cycles')) return 'https://api.iconify.design/lucide/refresh-cw.svg?color=%2322d3ee'; 
  if (name.includes('assembly')) return 'https://api.iconify.design/lucide/terminal.svg?color=%2322d3ee'; 

  // --- ไอคอนสำหรับโปรเจกต์ 7 Database (สีฟ้า Cyan & โลโก้จริง) ---
  if (name.includes('mysql')) return 'https://cdn.simpleicons.org/mysql/4479A1';
  if (name.includes('relational database')) return 'https://api.iconify.design/lucide/database.svg?color=%2322d3ee';
  if (name.includes('er-diagram')) return 'https://api.iconify.design/lucide/share-2.svg?color=%2322d3ee';
  if (name.includes('data dictionary')) return 'https://api.iconify.design/lucide/book-open.svg?color=%2322d3ee';
  
  return null; 
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-cyan-300">
        กำลังโหลดข้อมูลโปรเจกต์...
      </div>
    );
  }

  return (
    <section className="relative z-10 min-h-screen py-24 px-6 max-w-7xl mx-auto">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-widest drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const imageUrls = project.image_url ? project.image_url.split(',').map(url => url.trim()) : [];
          const coverImage = imageUrls.length > 0 ? imageUrls[0] : null;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-[#0f172a] border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-300 cursor-pointer shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <div className="w-full h-56 bg-gray-900 overflow-hidden relative">
                {coverImage ? (
                  <img 
                    src={coverImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 font-mono text-sm">No Cover Image</div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold text-cyan-500 tracking-widest uppercase mb-3">Project {index + 1}</span>
                <h3 className="text-2xl font-bold text-gray-100 mb-3 line-clamp-2 leading-snug">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.overview}</p>
                
                <div className="mt-auto pt-4">
                  <button 
                    className="w-full py-3 bg-blue-600/90 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    Read case study <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mt-16 md:mt-0">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[85vh] bg-[#0b1120] border border-gray-800 rounded-2xl overflow-y-auto shadow-2xl flex flex-col custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed md:absolute top-6 right-6 z-50 w-12 h-12 bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                ✕
              </button>

              <div className="p-8 md:p-12 flex flex-col gap-10">
                
                <div>
                  <span className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3 block">Case Study</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{selectedProject.title}</h2>
                  {selectedProject.subtitle && (
                    <h3 className="text-xl md:text-2xl text-gray-400 font-light">{selectedProject.subtitle}</h3>
                  )}
                </div>

                {selectedProject.image_url && (
                  <div className={`mx-auto w-full max-w-3xl columns-1 ${
                    selectedProject.image_url.split(',').length >= 3 
                      ? 'md:columns-3' 
                      : selectedProject.image_url.split(',').length === 2 
                        ? 'md:columns-2' 
                        : ''
                  } gap-4 space-y-4`}>
                    {selectedProject.image_url.split(',').map((imgUrl, idx) => (
                      <div 
                        key={idx} 
                        className="w-full break-inside-avoid rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-black"
                      >
                        <img 
                          src={imgUrl.trim()} 
                          alt={`Gallery ${idx + 1}`} 
                          className="w-full h-auto object-contain" 
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-gray-800 pb-10 mt-4">
                  {selectedProject.role && (
                    <div>
                      <h4 className="text-gray-500 text-sm font-bold tracking-widest mb-4 uppercase">Role & Responsibilities</h4>
                      <div className="inline-block px-5 py-3 border border-gray-700 rounded-xl text-gray-200 bg-gray-800/40 font-medium">
                        {selectedProject.role}
                      </div>
                    </div>
                  )}

                  {selectedProject.tech_stack && (
                    <div>
                      <h4 className="text-gray-500 text-sm font-bold tracking-widest mb-4 uppercase">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.tech_stack.split(',').map((tech, i) => {
                          // ตัดฟันหนูและวงเล็บออกอัตโนมัติ เพื่อให้ข้อความออกมาสวยงาม
                          const techName = tech.replace(/"/g, '').replace(/\[/g, '').replace(/\]/g, '').trim();
                          if (!techName) return null;
                          
                          const logoUrl = getTechLogo(techName);
                          return (
                            <span 
                              key={i} 
                              className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full text-sm font-medium text-gray-300 bg-[#0f172a]"
                            >
                              {logoUrl && <img src={logoUrl} alt={techName} className="w-4 h-4 object-contain" />}
                              {techName}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {selectedProject.overview && (
                  <div>
                    <h4 className="text-white text-2xl font-bold mb-4">Overview</h4>
                    <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                      {selectedProject.overview}
                    </p>
                  </div>
                )}

                {selectedProject.features && (
                  <div>
                    <h4 className="text-white text-2xl font-bold mb-4">Key Features & Contributions</h4>
                    <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                      {selectedProject.features}
                    </p>
                  </div>
                )}

                {selectedProject.outcome && (
                  <div>
                    <h4 className="text-white text-2xl font-bold mb-4">Outcome</h4>
                    <div className="p-6 border border-blue-900/50 bg-blue-900/10 rounded-xl">
                      <p className="text-blue-100/90 leading-relaxed text-lg whitespace-pre-wrap">
                        {selectedProject.outcome}
                      </p>
                    </div>
                  </div>
                )}

                {selectedProject.video_url && (
                  <div className="pt-8 border-t border-gray-800">
                    <h4 className="text-white text-2xl font-bold mb-6 text-center md:text-left">Project Demo</h4>
                    <div className="flex flex-col md:flex-row gap-6 items-start justify-center mx-auto w-full max-w-3xl">
                      {selectedProject.video_url.split(',').map((url, i) => {
                        const trimmedUrl = url.trim();
                        
                        if (trimmedUrl.includes('youtu.be') || trimmedUrl.includes('youtube.com')) {
                          const embedUrl = getYouTubeEmbedUrl(trimmedUrl);
                          return (
                            <div key={i} className="w-full flex-1 aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-black">
                              <iframe
                                src={embedUrl}
                                className="w-full h-full"
                                allowFullScreen
                              ></iframe>
                            </div>
                          );
                        }
                        
                        return (
                          <div key={i} className="w-full flex-1 rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-black">
                            <img src={trimmedUrl} alt={`Demo ${i + 1}`} className="w-full h-auto object-contain" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b1120;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>
    </section>
  );
}