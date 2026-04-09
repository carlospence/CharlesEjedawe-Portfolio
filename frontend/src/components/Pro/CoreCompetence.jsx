import React from "react";

const iconMap = {
  Programming: "code",
  Frontend: "layers",
  Backend: "database",
  Database: "storage",
  DevOps: "memory",
  "ML & Data": "analytics",
};

export default function CoreCompetence({ data }) {
  const categories = Object.entries(data).slice(0, 3); // Show first 3 for primary display

  return (
    <section
      id="core-competence"
      className="py-32 px-8 border-y border-[#1e293b]/50 bg-[#141b24]/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-sans text-3xl font-bold tracking-tight mb-4 text-white flex items-center gap-4">
            <span className="text-[#4edea3] font-mono text-xl">01.</span>{" "}
            CORE_COMPETENCIES
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-[#4edea3]/50 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(([category, skills]) => {
            const icon = iconMap[category] || "layers";
            return (
              <div
                key={category}
                className="bg-[#141b24] border border-[#1e293b] transition-all duration-300 hover:border-[#4edea3]/40 relative overflow-hidden p-10 group"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4edea3]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="material-symbols-outlined text-4xl text-[#4edea3] mb-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  {icon === "layers"
                    ? "layers"
                    : icon === "database"
                      ? "database"
                      : icon === "memory"
                        ? "memory"
                        : icon === "storage"
                          ? "storage"
                          : icon === "analytics"
                            ? "analytics"
                            : "code"}
                </span>
                <h3 className="font-sans text-xl font-bold mb-6 text-white uppercase tracking-widest">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#0a0f16] border border-[#1e293b] text-[#94a3b8] text-[10px] font-mono uppercase tracking-wider group-hover:border-[#4edea3]/30 group-hover:text-[#4edea3] transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
