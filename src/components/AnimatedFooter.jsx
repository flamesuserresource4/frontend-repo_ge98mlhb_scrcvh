import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react';

export default function AnimatedFooter() {
  return (
    <footer className="relative mt-20 bg-gray-900 text-gray-300">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.25),rgba(0,0,0,0))]" />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">SAT LMS</h3>
            <p className="mt-2 max-w-md text-sm text-gray-400">Practice smarter with adaptive drills, visual insights, and proven strategies.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 font-semibold text-white">Explore</p>
              <ul className="space-y-2">
                <li><a href="#courses" className="hover:text-white">Courses</a></li>
                <li><a href="#achievers" className="hover:text-white">Achievers</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-white">Resources</p>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
                <li><a href="#" className="hover:text-white">Updates</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-white">Connect</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="#" className="hover:text-white">Email</a></li>
                <li className="flex items-center gap-2"><Github className="h-4 w-4" /><a href="#" className="hover:text-white">GitHub</a></li>
                <li className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="mt-10 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
        />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} SAT LMS. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="group inline-flex items-center gap-1 hover:text-white">
              Privacy
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#" className="group inline-flex items-center gap-1 hover:text-white">
              Terms
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating orbs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -bottom-16 left-20 h-28 w-28 rounded-full bg-teal-400/20 blur-2xl"
      />
    </footer>
  );
}
