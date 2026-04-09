import React, { useState, useEffect } from "react";
import ProNavigation from "../components/Pro/Navigation.jsx";
import ProHero from "../components/Pro/Hero.jsx";
import CoreCompetence from "../components/Pro/CoreCompetence.jsx";
import DeployedWorks from "../components/Pro/DeployedWorks.jsx";
import Archive from "../components/Pro/Archive.jsx";
import ProContact from "../components/Pro/Contact.jsx";
import ProFooter from "../components/Pro/Footer.jsx";

export default function ProPortfolioAPI() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiUrl = import.meta.env.VITE_API_URL;

        // Fetch all data from backend APIs
        const [skillsRes, projectsRes, experienceRes, contactRes, bioRes] =
          await Promise.all([
            fetch(`${apiUrl}/skills`),
            fetch(`${apiUrl}/projects`),
            fetch(`${apiUrl}/experience`),
            fetch(`${apiUrl}/contact`),
            fetch(`${apiUrl}/bio/first`),
          ]);

        if (
          !skillsRes.ok ||
          !projectsRes.ok ||
          !experienceRes.ok ||
          !contactRes.ok ||
          !bioRes.ok
        ) {
          throw new Error("Failed to fetch data from backend");
        }

        const skills = await skillsRes.json();
        const projects = await projectsRes.json();
        const experience = await experienceRes.json();
        const contact = await contactRes.json();
        const bio = await bioRes.json();

        // Skills are already organized by category from the API

        // Get hero data from first contact or use defaults
        const heroData = bio[0] || {
          name: "CHARLES EJEDAWE",
          title: "Senior Full-Stack Engineer",
          bio: "Specializing in building scalable web applications and high-performance distributed systems.",
          email: "contact@example.com",
          phone: "+1 (XXX) XXX-XXXX",
          location: "Your Location",
          github: "#",
          linkedin: "#",
        };

        setApiData({
          hero: heroData,
          skills: skills,
          projects: projects.map((p) => ({
            ...p,
            techStack: Array.isArray(p.techStack)
              ? p.techStack
              : p.techStack?.split(",") || [],
          })),
          experience: experience,
          contact: bio[0] || {
            email: "contact@example.com",
            phone: "+1 (XXX) XXX-XXXX",
            location: "Your Location",
          },
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f16] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4edea3] mx-auto mb-4"></div>
          <p className="text-[#94a3b8]">Loading portfolio data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0f16] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">Error loading portfolio:</p>
          <p className="text-[#94a3b8]">{error}</p>
          <p className="text-[#94a3b8]/50 text-sm mt-4">
            Make sure the backend API is running.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0f16] text-[#e2e8f0] min-h-screen font-sans overflow-x-hidden">
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

      <ProNavigation data={apiData.hero} />
      <div className="relative z-10 pt-20">
        <ProHero data={apiData.hero} />
        <CoreCompetence data={apiData.skills} />
        <DeployedWorks data={apiData.projects} />
        <Archive data={apiData.experience} />
        <ProContact data={apiData.contact} />
      </div>
      <ProFooter data={apiData.hero} />
    </div>
  );
}
