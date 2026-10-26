import { useState } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import JoinAcceleratorModal from './components/JoinAcceleratorModal';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import CourseIntro from './sections/CourseIntro';
import WhySkillGenesis from './sections/WhySkillGenesis';
import Progression from './sections/Progression';
import PracticalSkills from './sections/PracticalSkills';
import FaqSection from './sections/FaqSection';
import FinalCta from './sections/FinalCta';

import { useStickyHeader } from './hooks/useStickyHeader';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useScrollReveal } from './hooks/useScrollReveal';

const SECTION_IDS = [
  'hero',
  'why-skillgenesis',
  'course-intro',
  'how-it-works',
  'skills',
  'faqs',
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = useStickyHeader(40);
  const activeSection = useScrollSpy(SECTION_IDS, 140);

  // Initialize global refined scroll reveal observer
  useScrollReveal();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleToggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Navigation */}
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        onOpenModal={handleOpenModal}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={handleToggleMobileMenu}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
        activeSection={activeSection}
        onOpenModal={handleOpenModal}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <CourseIntro />
        <WhySkillGenesis />
        <Progression />
        <PracticalSkills />
        <FaqSection />
        <FinalCta onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Application Form Modal */}
      <JoinAcceleratorModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
