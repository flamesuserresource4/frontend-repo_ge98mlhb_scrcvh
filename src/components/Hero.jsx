import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      {/* Spline interactive cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Animated gradient vignette - does not block interaction */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.65, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(1200px circle at 20% 10%, rgba(255,255,255,0.28), transparent 40%), radial-gradient(900px circle at 80% 20%, rgba(255,255,255,0.18), transparent 35%), linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0.85))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          Immersive 3D • Smooth scroll animations
        </motion.span>
        <motion.h1
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20, delay: 0.05 }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          SAT Practice, Results, and Deep Analysis
        </motion.h1>
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
          className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg"
        >
          A focused LMS for SAT prep. Take full-length tests, get instant scores, and
          understand strengths and gaps with clean, visual insights.
        </motion.p>
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.15 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#start"
            className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Start a Practice Test
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-md bg-white/80 px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 backdrop-blur transition hover:bg-white"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
