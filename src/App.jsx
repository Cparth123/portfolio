import "./App.css";
import LandingSection from "./compoents/LandingSection";
import SkillsSection from "./compoents/SkillsSection";
import HeroSection from "./compoents/HeroSection";
import BhagavadGitaSection from "./compoents/BhagavadGitaSection";
import EndSection from "./compoents/EndSection";
import React from "react";

function App() {
  return (
    <div>
      <div className="animated-gradient">
        <LandingSection />
        <div className="">
          <SkillsSection />
        </div>
        <HeroSection />
        <BhagavadGitaSection />
        <EndSection />
      </div>
    </div>
  );
}

export default App;
