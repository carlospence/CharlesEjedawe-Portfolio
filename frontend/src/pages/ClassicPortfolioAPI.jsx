import React, { useState, useEffect } from "react";
import ClassicNavigation from "../components/Classic/Navigation.jsx";
import Hero from "../components/Classic/Hero.jsx";
import Skills from "../components/Classic/Skills.jsx";
import Projects from "../components/Classic/Projects.jsx";
import Experience from "../components/Classic/Experience.jsx";
import Contact from "../components/Classic/Contact.jsx";
import Footer from "../components/Classic/Footer.jsx";

export default function ClassicPortfolioAPI() {
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
          name: "Charles Ejedawe",
          title: "Full Stack Developer",
          bio: "Building excellent digital experiences",
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading portfolio data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">Error loading portfolio:</p>
          <p className="text-gray-600">{error}</p>
          <p className="text-gray-500 text-sm mt-4">
            Make sure the backend API is running.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <ClassicNavigation />
      <div className="pt-16">
        <Hero data={apiData.hero} />
        <Skills data={apiData.skills} />
        <Projects data={apiData.projects} />
        <Experience data={apiData.experience} />
        <Contact data={apiData.contact} />
      </div>
      <Footer data={apiData.hero} />
    </div>
  );
}
