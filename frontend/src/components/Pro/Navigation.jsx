import React, { useState, useEffect } from "react";

export default function ProNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { id: "hero", route: "/home" },
    { id: "core-competence", route: "/skills" },
    { id: "deployed-works", route: "/projects" },
    { id: "archive", route: "/experience" },
    { id: "contact", route: "/contact" },
  ];

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleActiveSection = () => {
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < 100) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f16]/80 backdrop-blur-md border-b border-[#1e293b]/50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-white font-sans flex items-center gap-2">
          <span className="w-2 h-2 bg-[#4edea3] rounded-full"></span>
          ALEX CHEN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className={`font-mono text-xs tracking-widest transition-colors uppercase ${
                activeSection === link.id
                  ? "text-[#4edea3]"
                  : "text-[#94a3b8] hover:text-[#4edea3]"
              }`}
            >
              {link.route}
            </a>
          ))}
        </div>

        {/* Admin Link */}
        <div className="hidden md:block">
          <a
            href="/admin"
            className="border border-[#4edea3]/50 text-[#4edea3] px-6 py-2 text-xs font-mono uppercase tracking-widest hover:bg-[#4edea3]/10 transition-all"
          >
            Init_Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#4edea3] hover:text-[#4edea3]/80 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pb-4 space-y-2 bg-slate-950">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className={`block px-4 py-2 rounded-lg font-semibold transition ${
                activeSection === link.id
                  ? "bg-emerald-400 text-slate-950"
                  : "text-gray-300 hover:text-emerald-400"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/admin"
            className="block px-4 py-2 border border-emerald-400 text-emerald-400 rounded-lg font-semibold"
          >
            Admin
          </a>
        </div>
      )}
    </nav>
  );
}
