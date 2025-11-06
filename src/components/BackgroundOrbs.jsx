import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  const orbs = [
    { size: 320, x: '10%', y: '20%', color: '#f43f5e', opacity: 0.18 },
    { size: 260, x: '85%', y: '30%', color: '#3b82f6', opacity: 0.15 },
    { size: 220, x: '70%', y: '75%', color: '#f59e0b', opacity: 0.12 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [0.9, 1.05, 0.95, 1],
            opacity: [o.opacity * 0.6, o.opacity, o.opacity * 0.7, o.opacity],
            x: [0, 10, -8, 0],
            y: [0, -6, 4, 0],
          }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute rounded-full blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: `radial-gradient(circle at 30% 30%, ${o.color}, transparent 60%)`,
            filter: 'blur(48px)',
          }}
        />
      ))}
    </div>
  );
}
