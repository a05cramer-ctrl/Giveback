import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MoneyParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function FallingMoney() {
  const [particles, setParticles] = useState<MoneyParticle[]>([]);

  useEffect(() => {
    // Generate 20 money particles
    const newParticles: MoneyParticle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-giveback-green/20 text-2xl font-bold"
          style={{ left: `${particle.left}%` }}
          initial={{ y: '-10vh', rotate: 0 }}
          animate={{
            y: '110vh',
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          $
        </motion.div>
      ))}
    </div>
  );
}





