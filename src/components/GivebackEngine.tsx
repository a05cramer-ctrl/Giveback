import { motion } from 'framer-motion';
import { getVaultStats } from '../utils/mockData';

export default function GivebackEngine() {
  const stats = getVaultStats();
  const steps = [
    { number: 1, title: 'Collect', description: 'Creator rewards flow into a public rewards vault' },
    { number: 2, title: 'Settle', description: 'Rewards are settled periodically (net of fees)' },
    { number: 3, title: 'Snapshot', description: 'Holder balances are calculated' },
    { number: 4, title: 'Distribute', description: 'SOL is sent directly to holders' },
  ];

  return (
    <section id="engine" className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Giveback Engine
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="glass rounded-xl p-6 text-center relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-giveback-green/20 flex items-center justify-center mb-4 mx-auto">
                <span className="text-giveback-green font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-giveback-green">
                {step.title}
              </h3>
              <p className="text-sm text-white/70">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-giveback-green text-2xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="glass-strong rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white/70">Public Rewards Vault</h3>
            <p className="text-3xl font-bold text-giveback-green">
              {stats.currentBalance.toFixed(2)} SOL
            </p>
          </motion.div>

          <motion.div
            className="glass-strong rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white/70">Distribution Method</h3>
            <p className="text-3xl font-bold text-giveback-green">Pro-rata</p>
          </motion.div>

          <motion.div
            className="glass-strong rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white/70">Fee Transparency</h3>
            <p className="text-3xl font-bold text-giveback-green">0.5%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}





