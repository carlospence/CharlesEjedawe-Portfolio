import React, { useState } from "react";
import axios from "axios";

export default function ProContact({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await axios.post("/api/contact", formData);
      setStatus("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(
        "Failed to send message. Please try again or email me directly.",
      );
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-8 bg-[#0a0f16]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="mb-16">
            <h2 className="font-sans text-5xl font-extrabold tracking-tighter mb-8 leading-tight text-white">
              Let's build <br />
              <span
                className="text-[#4edea3]"
                style={{ textShadow: "0 0 20px rgba(78, 222, 163, 0.4)" }}
              >
                extraordinary.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-[#94a3b8] text-lg mb-12 max-w-md font-sans">
                  Available for select technical leadership roles and
                  high-performance system consulting.
                </p>
                <div className="space-y-6">
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-4 text-lg font-mono group"
                  >
                    <div className="w-12 h-12 bg-[#141b24] border border-[#1e293b] flex items-center justify-center group-hover:border-[#4edea3]/50 transition-all">
                      <span className="material-symbols-outlined text-[#4edea3]">
                        mail
                      </span>
                    </div>
                    <span className="group-hover:text-[#4edea3] transition-colors text-[#e2e8f0]">
                      {data.email}
                    </span>
                  </a>
                  <div className="flex items-center gap-4 text-lg font-mono">
                    <div className="w-12 h-12 bg-[#141b24] border border-[#1e293b] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#4edea3]">
                        location_on
                      </span>
                    </div>
                    <span className="text-[#94a3b8]">{data.location}</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#141b24] border border-[#1e293b] transition-all duration-300 hover:border-[#4edea3]/40 relative overflow-hidden p-10 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#4edea3]/20 to-transparent"></div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#4edea3]/70">
                      NAME_INPUT
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0f16] border border-[#1e293b] focus:ring-1 focus:ring-[#4edea3]/30 focus:border-[#4edea3] transition-all px-4 py-3 text-[#e2e8f0] placeholder:text-[#94a3b8]/30 font-mono text-sm"
                      placeholder="ID_USER"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#4edea3]/70">
                      EMAIL_INPUT
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0f16] border border-[#1e293b] focus:ring-1 focus:ring-[#4edea3]/30 focus:border-[#4edea3] transition-all px-4 py-3 text-[#e2e8f0] placeholder:text-[#94a3b8]/30 font-mono text-sm"
                      placeholder="USER@NODE.COM"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#4edea3]/70">
                      MESSAGE_BUFFER
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-[#0a0f16] border border-[#1e293b] focus:ring-1 focus:ring-[#4edea3]/30 focus:border-[#4edea3] transition-all px-4 py-3 text-[#e2e8f0] placeholder:text-[#94a3b8]/30 font-mono text-sm"
                      placeholder="DESCRIBE_PROJECT..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#4edea3] text-[#0a0f16] py-4 font-mono font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(78,222,163,0.2)] disabled:opacity-50"
                  >
                    {loading ? "SENDING..." : "EXECUTE_SEND"}
                  </button>
                  {status && (
                    <p
                      className={`text-center text-sm font-semibold ${
                        status.includes("successfully")
                          ? "text-[#4edea3]"
                          : "text-red-400"
                      }`}
                    >
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
