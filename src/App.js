import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ThreeDModelSection from './components/ThreeDModelSection'; // <--- Import qilindi
import ProjectsSection from './components/ProjectsSection';
import RegisterSection from './components/RegisterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ThreeDModelSection /> {/* <--- 3D Maket bo'limi qo'shildi */}
        <ProjectsSection />
        <RegisterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}