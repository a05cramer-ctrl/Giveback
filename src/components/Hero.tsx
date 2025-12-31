import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Market Took Enough.
          <br />
          <span className="text-giveback-green">This Gives Back.</span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Creator rewards are automatically distributed to holders. No promises. Just payouts.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => {
              document.getElementById('activity')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-giveback-green text-dark-navy font-semibold rounded-lg hover:bg-giveback-green/90 transition-all transform hover:scale-105"
          >
            View Live Rewards
          </button>
          <button
            className="px-8 py-4 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
          >
            Join the Community
          </button>
        </motion.div>
      </div>
    </section>
  );
}

