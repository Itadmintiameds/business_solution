"use client";

// Removed useState, ChevronLeft, ChevronRight as they are no longer needed here
import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import FooterSection from "./component/FooterSection";
import HeroSection from "./component/HeroSection";
import NavBar from "./component/NavBar";
import ServiceSection from "./component/ServiceSection";
// import TestimonialSection from "./component/TestimonialSection";
import ProjectsSection from "./component/ProjectsSection";
import TeamSection from "./component/TeamSection";
import HistoryTimeline from "./component/History";

const LandingPage = () => {
  // ✅ The 'videos' array and 'useState' have been removed from this file.
  // They are now inside ServiceSection.tsx.

  return (
    <div className="font-sans">
      <NavBar />
      <HeroSection />
      <HistoryTimeline />
      <AboutSection />

      {/* This component now correctly shows your Services
          AND the "big card" video carousel.
      */}
      <ServiceSection />

      {/* ✅ The redundant "small card" video section that 
        was here has been DELETED.
      */}

      <TeamSection /> {/* Our Teams */}
      <ProjectsSection />
      {/* <TestimonialSection /> */}
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;