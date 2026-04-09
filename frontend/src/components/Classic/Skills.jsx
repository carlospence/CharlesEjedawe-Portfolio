import React from "react";

export default function Skills({ data }) {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(data).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold hover:from-blue-200 hover:to-cyan-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
