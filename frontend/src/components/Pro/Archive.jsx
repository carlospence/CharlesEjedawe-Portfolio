import React from "react";

export default function Archive({ data }) {
  return (
    <section
      id="archive"
      className="py-32 bg-[#141b24]/50 px-8 border-y border-[#1e293b]/50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <h2 className="font-sans text-3xl font-bold tracking-tight mb-8 text-white flex items-center gap-4">
            <span className="text-[#4edea3] font-mono text-xl">03.</span>{" "}
            EXPERIENCE_EDUCATION
          </h2>
          <p className="text-[#94a3b8] leading-relaxed font-sans italic border-l border-[#4edea3]/30 pl-6">
            Professional trajectory defined by technical leadership and
            performance optimization.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-16">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative pl-10 border-l border-[#1e293b]"
            >
              <div className="absolute -left-[4.5px] top-0 w-[8px] h-[8px] bg-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.8)]"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-sans text-xl font-bold text-white tracking-wide">
                  {item.position}{" "}
                  <span className="text-[#4edea3]/50 font-mono text-sm ml-2">
                    @ {item.company}
                  </span>
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#94a3b8]">
                  {new Date(item.startDate).getFullYear()} //
                  {item.endDate === null || item.endDate === "present"
                    ? " PRESENT"
                    : ` ${new Date(item.endDate).getFullYear()}`}
                </span>
              </div>
              <p className="text-[#94a3b8] leading-relaxed font-sans text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
