import React from 'react';
import { NetworkBackground } from './components/NetworkBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Internship } from './components/Internship';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col relative selection:bg-blue-600 selection:text-white">
      {/* Background Interactive Particles & Network Graph */}
      <NetworkBackground />

      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full relative z-10">
        {/* 1. HOME / HERO */}
        <Hero />

        {/* 2. ABOUT */}
        <About />

        {/* 3. EDUCATION */}
        <Education />

        {/* 4. SKILLS */}
        <Skills />

        {/* 5. PROJECTS */}
        <Projects />

        {/* 6. INTERNSHIP */}
        <Internship />

        {/* 7. CERTIFICATIONS */}
        <Certifications />

        {/* 8. LANGUAGES */}
        <Languages />

        {/* 9. CONTACT */}
        <Contact />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}
