import React, { useState } from "react";
import { portfolioData } from "../data/portfolio";

export default function ProPortfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 min-h-screen font-sans overflow-x-hidden">
      {/* Animated grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #4edea3 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            {portfolioData.hero.name.split(" ")[0].toUpperCase()}
          </div>

          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("home")}
              className="font-mono text-xs tracking-widest text-emerald-400 uppercase hover:text-emerald-300 transition"
            >
              /home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="font-mono text-xs tracking-widest text-slate-400 hover:text-emerald-400 transition uppercase"
            >
              /skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="font-mono text-xs tracking-widest text-slate-400 hover:text-emerald-400 transition uppercase"
            >
              /projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="font-mono text-xs tracking-widest text-slate-400 hover:text-emerald-400 transition uppercase"
            >
              /experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-mono text-xs tracking-widest text-slate-400 hover:text-emerald-400 transition uppercase"
            >
              /contact
            </button>
          </div>

          <button className="border border-emerald-400/50 text-emerald-400 px-6 py-2 text-xs font-mono uppercase tracking-widest hover:bg-emerald-400/10 transition">
            Init_Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center px-8 pt-20 relative"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-6 block opacity-80">
              &lt;{portfolioData.hero.title} /&gt;
            </span>
            <h1 className="text-5xl lg:text-6xl leading-tight font-extrabold tracking-tight text-white mb-8">
              {portfolioData.hero.name.split(" ")[0]} <br />
              <span
                className="text-emerald-400"
                style={{ textShadow: "0 0 20px rgba(52, 211, 153, 0.4)" }}
              >
                {portfolioData.hero.name.split(" ")[1]}.
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10 border-l-2 border-emerald-400/20 pl-6">
              {portfolioData.hero.bio}
            </p>

            <div className="flex gap-8 items-center font-mono text-sm">
              <a
                href={portfolioData.hero.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-100 hover:text-emerald-400 transition"
              >
                <span>📱</span>
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.hero.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-100 hover:text-emerald-400 transition"
              >
                <span>🔗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-slate-800 bg-slate-800 p-2">
              <img
                alt={portfolioData.hero.name}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="w-full h-full object-cover grayscale brightness-75 contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-slate-800 p-4 border border-emerald-400/30 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400">
                  System Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-32 px-8 border-y border-slate-800/50 bg-slate-800/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-bold text-3xl tracking-tight mb-4 text-white flex items-center gap-4">
              <span className="text-emerald-400 font-mono text-xl">01.</span>{" "}
              CORE_COMPETENCIES
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend Card */}
            <div className="bg-slate-800 border border-slate-700 p-10 hover:border-emerald-400/40 transition duration-300 group">
              <div className="text-4xl mb-6 opacity-70 group-hover:opacity-100 transition">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-widest">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Tailwind CSS"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-mono uppercase tracking-wider group-hover:border-emerald-400/30 group-hover:text-emerald-400 transition"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-slate-800 border border-slate-700 p-10 hover:border-emerald-400/40 transition duration-300 group">
              <div className="text-4xl mb-6 opacity-70 group-hover:opacity-100 transition">
                ⚙️
              </div>
              <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-widest">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "PostgreSQL", "GraphQL", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-mono uppercase tracking-wider group-hover:border-emerald-400/30 group-hover:text-emerald-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps Card */}
            <div className="bg-slate-800 border border-slate-700 p-10 hover:border-emerald-400/40 transition duration-300 group">
              <div className="text-4xl mb-6 opacity-70 group-hover:opacity-100 transition">
                🚀
              </div>
              <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-widest">
                DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS", "Git", "CI/CD"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-[10px] font-mono uppercase tracking-wider group-hover:border-emerald-400/30 group-hover:text-emerald-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="font-bold text-3xl tracking-tight mb-4 text-white flex items-center gap-4">
                <span className="text-emerald-400 font-mono text-xl">02.</span>{" "}
                DEPLOYED_WORKS
              </h2>
              <p className="text-slate-400 font-mono text-sm tracking-tight opacity-70">
                A selection of technical implementations.
              </p>
            </div>
            <div className="h-px flex-grow mx-8 bg-slate-800 hidden md:block"></div>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 opacity-60">
              BUILD_LOG_2024
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-slate-800 border border-slate-700 overflow-hidden mb-8 group-hover:border-emerald-400/40 transition">
                <img
                  alt="Nexus Analytics"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-emerald-400 transition">
                  Nexus Analytics
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  A real-time data visualization dashboard featuring live
                  streams and custom filtering with D3.js integration.
                </p>
                <div className="flex gap-3 mb-6">
                  {["React", "D3.js", "Supabase"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono uppercase tracking-widest text-emerald-400/70 border border-emerald-400/20 px-2 py-1 bg-emerald-400/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-emerald-400 font-mono text-xs tracking-widest inline-flex items-center gap-2 group/link hover:gap-3 transition"
                >
                  GET_SOURCE <span>→</span>
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer md:mt-24">
              <div className="aspect-video bg-slate-800 border border-slate-700 overflow-hidden mb-8 group-hover:border-emerald-400/40 transition">
                <img
                  alt="Zenith E-Commerce"
                  src="https://images.unsplash.com/photo-1460925895917-aeb19be489c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-emerald-400 transition">
                  Zenith E-Commerce
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Headless commerce solution with complex dynamic cart logic and
                  SSR for extreme SEO performance.
                </p>
                <div className="flex gap-3 mb-6">
                  {["Next.js", "Stripe", "Sanity.io"].map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-mono uppercase tracking-widest text-emerald-400/70 border border-emerald-400/20 px-2 py-1 bg-emerald-400/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-emerald-400 font-mono text-xs tracking-widest inline-flex items-center gap-2 group/link hover:gap-3 transition"
                >
                  RUN_DEMO <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-32 bg-slate-800/20 px-8 border-y border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-bold text-3xl tracking-tight mb-8 text-white flex items-center gap-4">
              <span className="text-emerald-400 font-mono text-xl">03.</span>{" "}
              ARCHIVE
            </h2>
            <p className="text-slate-300 leading-relaxed italic border-l border-emerald-400/30 pl-6">
              Professional trajectory defined by technical leadership and
              performance optimization.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {/* Experience Entry 1 */}
            <div className="relative pl-10 border-l border-slate-700">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-400 shadow-lg shadow-emerald-400/50"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-white tracking-wide">
                  Lead Developer{" "}
                  <span className="text-emerald-400/50 font-mono text-sm ml-2">
                    @ TechFlow
                  </span>
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  2021 // PRESENT
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                Led a high-performing team of 5 engineers. Orchestrated
                migration of legacy monolithic systems into scalable
                microservices, improving deployment frequency by 60%.
              </p>
            </div>

            {/* Experience Entry 2 */}
            <div className="relative pl-10 border-l border-slate-700">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-600"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-bold text-xl text-white tracking-wide">
                  Software Engineer{" "}
                  <span className="text-emerald-400/50 font-mono text-sm ml-2">
                    @ InnovateHQ
                  </span>
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  2018 // 2021
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                Focused on backend performance and architectural integrity.
                Optimized complex database queries resulting in 40% reduction in
                API latency.
              </p>
            </div>

            {/* Education */}
            <div className="pt-16 border-t border-slate-700/50">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 mb-6">
                CERT_EDUCATION
              </h4>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <h3 className="font-bold text-xl text-white">
                  B.S. in Computer Science
                </h3>
                <span className="text-slate-400 font-mono text-sm italic">
                  University of Washington
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight mb-8 leading-tight text-white">
                Let's build <br />
                <span
                  className="text-emerald-400"
                  style={{ textShadow: "0 0 20px rgba(52, 211, 153, 0.4)" }}
                >
                  extraordinary.
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-12 max-w-md">
                Available for select technical leadership roles and
                high-performance system consulting.
              </p>

              <div className="space-y-6">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="flex items-center gap-4 text-lg font-mono group hover:text-emerald-400 transition"
                >
                  <div className="w-12 h-12 bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-emerald-400/50 transition">
                    ✉️
                  </div>
                  <span>{portfolioData.contact.email}</span>
                </a>
                <div className="flex items-center gap-4 text-lg font-mono text-slate-400">
                  <div className="w-12 h-12 bg-slate-800 border border-slate-700 flex items-center justify-center">
                    📍
                  </div>
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 border border-slate-700 p-10 shadow-2xl hover:border-emerald-400/30 transition">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400/70">
                    NAME_INPUT
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ID_USER"
                    className="w-full bg-slate-900 border border-slate-700 focus:ring-1 focus:ring-emerald-400/30 focus:border-emerald-400 transition px-4 py-3 text-slate-100 placeholder:text-slate-500/30 font-mono text-sm outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400/70">
                    EMAIL_INPUT
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="USER@NODE.COM"
                    className="w-full bg-slate-900 border border-slate-700 focus:ring-1 focus:ring-emerald-400/30 focus:border-emerald-400 transition px-4 py-3 text-slate-100 placeholder:text-slate-500/30 font-mono text-sm outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-400/70">
                    MESSAGE_BUFFER
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="DESCRIBE_PROJECT..."
                    rows="4"
                    className="w-full bg-slate-900 border border-slate-700 focus:ring-1 focus:ring-emerald-400/30 focus:border-emerald-400 transition px-4 py-3 text-slate-100 placeholder:text-slate-500/30 font-mono text-sm outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-400 text-slate-900 py-4 font-mono font-bold text-xs uppercase tracking-widest hover:bg-emerald-300 transition shadow-lg shadow-emerald-400/20"
                >
                  EXECUTE_SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 border-t border-slate-800/50">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">
          <div className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            {portfolioData.hero.name.toUpperCase()}
          </div>

          <div className="flex gap-8">
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition"
            >
              LN
            </a>
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition"
            >
              GH
            </a>
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition"
            >
              DR
            </a>
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition"
            >
              X
            </a>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 opacity-40">
            © 2024 SYSTEM_V1.0. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
