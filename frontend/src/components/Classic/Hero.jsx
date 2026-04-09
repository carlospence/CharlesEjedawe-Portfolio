import React from "react";

export default function Hero({ data }) {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          {data.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-300 mb-6">
          {data.title}
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          {data.bio}
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition transform hover:scale-105"
          >
            GitHub
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-semibold transition transform hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
