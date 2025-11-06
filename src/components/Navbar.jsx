import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      className={`fixed inset-x-0 top-0 z-40`}
    >
      <div
        className={`mx-auto mt-3 max-w-6xl px-4 sm:px-6`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all ${
            scrolled ? 'border-white/20 bg-white/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60' : 'border-transparent bg-white/70 backdrop-blur'
          } px-4 py-3`}
        >
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-rose-600 text-white font-bold">S</div>
            <span className="text-sm font-semibold tracking-wide text-gray-900">SAT LMS</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm text-gray-700 hover:text-gray-900">Features</a>
            <a href="#how" className="text-sm text-gray-700 hover:text-gray-900">How it works</a>
            <a href="#start" className="text-sm text-gray-700 hover:text-gray-900">Start</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-rose-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700">Get started</a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl px-4 md:hidden"
          >
            <div className="rounded-xl border border-white/20 bg-white/90 p-3 shadow-sm backdrop-blur">
              <a href="#features" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">Features</a>
              <a href="#how" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">How it works</a>
              <a href="#start" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-50">Start</a>
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-lg bg-rose-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-rose-700">Get started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
