import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import GivebackEngine from './components/GivebackEngine';
import Performance from './components/Performance';
import LiveActivity from './components/LiveActivity';
import Footer from './components/Footer';
import FallingMoney from './components/FallingMoney';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'engine', 'performance', 'activity'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <FallingMoney />
      <Navigation onSectionChange={setActiveSection} activeSection={activeSection} />
      <Hero />
      <Overview />
      <GivebackEngine />
      <Performance />
      <LiveActivity />
      <Footer />
    </div>
  );
}

export default App;

