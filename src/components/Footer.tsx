import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="flex gap-4 justify-center flex-wrap mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => {
              document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-giveback-green text-dark-navy font-semibold rounded-lg hover:bg-giveback-green/90 transition-all transform hover:scale-105"
          >
            View Full Dashboard
          </button>
          <button
            className="px-8 py-4 glass text-white font-semibold rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
          >
            Join the Community
          </button>
        </motion.div>

        <motion.p
          className="text-white/50 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          $GIVEBACK — Execution over promises.
        </motion.p>
      </div>
    </footer>
  );
}





