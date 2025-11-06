import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
