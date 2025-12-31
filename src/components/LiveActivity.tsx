import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  generateInitialActivity,
  generateNewActivity,
  formatSOL,
  formatWallet,
  formatTime,
  type ActivityItem,
} from '../utils/mockData';

export default function LiveActivity() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);

  useEffect(() => {
    // Initialize with mock data
    setActivities(generateInitialActivity(20));

    // Add new activity every 3-5 seconds
    const interval = setInterval(() => {
      const newActivity = generateNewActivity();
      setActivities((prev) => [newActivity, ...prev].slice(0, 50)); // Keep last 50
      
      // Remove isNew flag after animation
      setTimeout(() => {
        setActivities((prev) =>
          prev.map((item) =>
            item.id === newActivity.id ? { ...item, isNew: false } : item
          )
        );
      }, 2000);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="activity" className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Live Activity Feed
        </motion.h2>

        <motion.div
          className="glass-strong rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Wallet
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-white/70 uppercase tracking-wider">
                    Transaction
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <AnimatePresence>
                  {activities.map((activity) => (
                    <motion.tr
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        backgroundColor: activity.isNew
                          ? 'rgba(0, 255, 136, 0.1)'
                          : 'transparent',
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`hover:bg-white/5 transition-colors ${
                        activity.isNew ? 'animate-pulse-glow' : ''
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                        {formatTime(activity.time)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className="text-giveback-green font-medium">
                          {activity.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90 font-mono">
                        {formatWallet(activity.wallet)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-giveback-green font-semibold">
                        {formatSOL(activity.amount)} SOL
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <a
                          href={`https://solscan.io/tx/${activity.transaction}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-giveback-green hover:text-giveback-green/80 font-mono text-xs"
                        >
                          {activity.transaction.slice(0, 8)}...
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

