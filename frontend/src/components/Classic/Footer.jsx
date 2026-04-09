import React from "react";

export default function Footer({ data }) {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="font-semibold text-white">{data.name}</p>
            <p className="text-sm text-gray-400">{data.title}</p>
          </div>

          <div className="flex gap-6">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
          </div>

          <div className="text-center sm:text-right mt-4 sm:mt-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
