import React from "react";
import { portfolioData } from "../data/portfolio";
import ProNavigation from "../components/Pro/Navigation.jsx";
import ProHero from "../components/Pro/Hero.jsx";
import CoreCompetence from "../components/Pro/CoreCompetence.jsx";
import DeployedWorks from "../components/Pro/DeployedWorks.jsx";
import Archive from "../components/Pro/Archive.jsx";
import ProContact from "../components/Pro/Contact.jsx";
import ProFooter from "../components/Pro/Footer.jsx";

export default function ProPortfolio() {
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

      <ProNavigation data={portfolioData.hero} />
      <div className="relative z-10 pt-20">
        <ProHero data={portfolioData.hero} />
        <CoreCompetence data={portfolioData.skills} />
        <DeployedWorks data={portfolioData.projects} />
        <Archive data={portfolioData.experience} />
        <ProContact data={portfolioData.contact} />
      </div>
      <ProFooter data={portfolioData.hero} />
    </div>
  );
}
