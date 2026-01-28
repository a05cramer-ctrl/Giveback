import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

export default function Navigation({ onSectionChange, activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contractAddress = 'CQ4PVtwm4gVyRqx5s9MwwMHdk1unHHiL8cZ1TVKLbonk';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'engine', label: 'Giveback Engine' },
    { id: 'performance', label: 'Performance / Vault' },
    { id: 'activity', label: 'Live Activity' },
  ];

  return (
    <>
      {/* Top bar with Twitter and CA */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 glass-strong py-2 px-6"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-end gap-4">
          <button
            onClick={copyToClipboard}
            className="text-xs font-mono text-white/70 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>CA: {contractAddress.slice(0, 4)}...{contractAddress.slice(-4)}</span>
            {copied ? (
              <span className="text-giveback-green text-xs">Copied!</span>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
          <a
            href="https://x.com/GiveBack_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-giveback-green transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Main navigation */}
      <motion.nav
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
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
    </>
  );
}

