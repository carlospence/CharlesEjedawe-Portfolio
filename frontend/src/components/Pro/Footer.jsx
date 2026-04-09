import React from "react";

export default function ProFooter({ data }) {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12 border-t border-emerald-500 border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-emerald-400 mb-2">
              {data.name}
            </div>
            <p className="text-sm text-gray-500">{data.title}</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#core-competence"
                  className="hover:text-emerald-400 transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#deployed-works"
                  className="hover:text-emerald-400 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-emerald-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                GitHub
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500 border-opacity-20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-4 sm:mt-0">
            Crafted with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
