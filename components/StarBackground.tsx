'use client';

export default function StarBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050b14]">
      {/* กลุ่มดาวระยิบระยับจำลองด้วย CSS Animation */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full animate-ping [animation-duration:3s]"></div>
        <div className="absolute top-[30%] left-[80%] w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute top-[60%] left-[15%] w-1 h-1 bg-white rounded-full animate-ping [animation-duration:4s]"></div>
        <div className="absolute top-[80%] left-[70%] w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-duration:2s]"></div>
        <div className="absolute top-[20%] left-[50%] w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-[50%] left-[90%] w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse [animation-duration:3.5s]"></div>
        
        {/* แสงออร่าแบ็คกราวด์ */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-600/10 rounded-full blur-[140px]"></div>
      </div>
    </div>
  );
}