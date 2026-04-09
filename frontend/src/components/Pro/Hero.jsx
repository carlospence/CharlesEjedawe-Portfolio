import React from "react";
import myImage from "../../assets/images/resumephoto.png";

export default function ProHero({ data }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-8 pt-20 relative bg-[#0a0f16]"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4edea3]/5 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#4edea3] mb-6 block font-medium opacity-80">
            &lt;Senior Full-Stack Engineer /&gt;
          </span>
          <h1 className="font-sans text-[3.5rem] leading-[1.1] font-extrabold tracking-tight text-white mb-8 lg:text-[5.5rem]">
            Architecting <br />
            <span
              className="text-[#4edea3]"
              style={{ textShadow: "0 0 20px rgba(78, 222, 163, 0.4)" }}
            >
              Performance.
            </span>
          </h1>
          <p className="font-sans text-xl text-[#94a3b8] max-w-2xl leading-relaxed mb-10 border-l-2 border-[#4edea3]/20 pl-6">
            Specializing in building scalable web applications and
            high-performance distributed systems. Driven by clean code and
            user-centric design.
          </p>
          <div className="flex gap-8 items-center font-mono text-sm">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#e2e8f0] hover:text-[#4edea3] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">
                terminal
              </span>
              <span>GitHub</span>
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-[#e2e8f0] hover:text-[#4edea3] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">lan</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[#1e293b] bg-[#141b24] p-2">
            <img
              alt="Portrait"
              src={myImage}
              className="w-full h-full object-cover grayscale brightness-75 contrast-125 hover:grayscale-0 transition-all duration-700"
              //   src={`https://via.placeholder.com/400x500/1a1f2e/4edea3?text=${encodeURIComponent(data.name)}`}
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-[#141b24] p-4 border border-[#4edea3]/30 shadow-[0_0_20px_rgba(78,222,163,0.1)]">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#4edea3] rounded-full animate-pulse shadow-[0_0_10px_rgba(78,222,163,1)]"></div>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#4edea3]">
                System Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
