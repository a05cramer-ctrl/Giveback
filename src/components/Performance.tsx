import { motion } from 'framer-motion';
import { getVaultStats } from '../utils/mockData';

export default function Performance() {
  const stats = getVaultStats();

  const metrics = [
    {
      label: 'Total SOL Distributed',
      value: `${stats.totalDistributed.toFixed(2)} SOL`,
      color: 'text-giveback-green',
    },
    {
      label: 'Current Rewards Vault',
      value: `${stats.currentBalance.toFixed(2)} SOL`,
      color: 'text-giveback-green',
    },
    {
      label: 'Number of Distributions',
      value: stats.distributions.toLocaleString(),
      color: 'text-white',
    },
    {
      label: 'Estimated APR',
      value: `${stats.estimatedAPR.toFixed(1)}%`,
      color: 'text-giveback-green',
    },
  ];

  return (
    <section id="performance" className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Performance / Vault
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass-strong rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-medium mb-3 text-white/70 uppercase tracking-wide">
                {metric.label}
              </h3>
              <p className={`text-3xl font-bold ${metric.color}`}>
                {metric.value}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass rounded-xl p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/60 text-sm">
            <span className="text-giveback-green">Note:</span> Replace mock data with live on-chain data via indexer or API.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


