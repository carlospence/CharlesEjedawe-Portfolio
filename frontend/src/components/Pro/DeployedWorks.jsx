import React from "react";

export default function DeployedWorks({ data }) {
  return (
    <section id="deployed-works" className="py-32 px-8 bg-[#0a0f16]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="font-sans text-3xl font-bold tracking-tight mb-4 text-white flex items-center gap-4">
              <span className="text-[#4edea3] font-mono text-xl">02.</span>{" "}
              DEPLOYED_WORKS
            </h2>
            <p className="text-[#94a3b8] font-mono text-sm tracking-tight opacity-70">
              A selection of technical implementation case studies.
            </p>
          </div>
          <div className="h-[1px] flex-grow mx-8 bg-[#1e293b] hidden md:block"></div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#4edea3] opacity-60">
            BUILD_LOG_2024
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.map((project, idx) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${idx === 1 ? "md:mt-24" : ""}`}
            >
              <div className="aspect-video bg-[#141b24] border border-[#1e293b] overflow-hidden mb-8 group-hover:border-[#4edea3]/40 transition-colors">
                <img
                  alt={project.name}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  src={project.imageUrl}
                />
              </div>
              <div>
                <h3 className="font-sans text-2xl font-bold mb-4 text-white group-hover:text-[#4edea3] transition-colors">
                  {project.name}
                </h3>
                <p className="text-[#94a3b8] mb-6 leading-relaxed font-sans">
                  {project.description}
                </p>
                <div className="flex gap-3 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono uppercase tracking-widest text-[#4edea3]/70 border border-[#4edea3]/20 px-2 py-1 bg-[#4edea3]/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4edea3] font-mono text-xs tracking-widest inline-flex items-center gap-2 group/link"
                >
                  GET_SOURCE{" "}
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
