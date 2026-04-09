import React from "react";

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
          Experience & Education
        </h2>

        <div className="space-y-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* Timeline connector */}
              {index !== data.length - 1 && (
                <div className="absolute left-8 top-full w-1 h-8 bg-gradient-to-b from-blue-600 to-transparent"></div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold">
                    {item.type === "work" ? "💼" : "🎓"}
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {item.position}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mt-1">
                    {item.company}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{item.location}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {new Date(item.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                    {" - "}
                    {item.endDate === null || item.endDate === "present"
                      ? "Present"
                      : new Date(item.endDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}
                  </p>
                  <p className="text-gray-600 mt-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
