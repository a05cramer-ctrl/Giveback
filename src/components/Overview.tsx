import { motion } from 'framer-motion';

export default function Overview() {
  const cards = [
    {
      title: 'What is $GIVEBACK?',
      content: 'A Solana token that automatically distributes creator rewards to holders. No manual claims. No promises. Just execution.',
    },
    {
      title: 'How rewards are generated',
      content: 'Creator trading fees flow into a public rewards vault. The vault is transparent, on-chain, and verifiable.',
    },
    {
      title: 'How holders receive SOL',
      content: 'Rewards are distributed pro-rata based on token holdings. SOL is sent directly to your wallet. No action required.',
    },
  ];

  return (
    <section id="overview" className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Simple. Transparent. Executed.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="glass rounded-xl p-8 hover:bg-white/10 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-giveback-green">
                {card.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


