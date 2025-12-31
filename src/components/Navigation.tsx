import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

export default function Navigation({ onSectionChange, activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'engine', label: 'Giveback Engine' },
    { id: 'performance', label: 'Performance / Vault' },
    { id: 'activity', label: 'Live Activity' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-giveback-green">
            $GIVEBACK
          </div>
          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'text-giveback-green'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div className="md:hidden text-giveback-green text-sm font-medium">
            Menu
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

