import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Layers, Beaker, PenTool, Brain } from 'lucide-react';
import AnimatedSection from './AnimatedSection.jsx';

const courses = [
  {
    title: 'SAT Math Mastery',
    desc: 'Algebra, advanced math, and problem-solving drills with step-by-step solutions.',
    icon: Beaker,
    color: 'from-blue-500/20 to-blue-500/0',
  },
  {
    title: 'SAT Reading Pro',
    desc: 'Evidence-based reading strategies and time-saving annotation tactics.',
    icon: BookOpen,
    color: 'from-rose-500/20 to-rose-500/0',
  },
  {
    title: 'SAT Writing & Language',
    desc: 'Grammar rules, rhetoric, and editing drills to polish precision and style.',
    icon: PenTool,
    color: 'from-amber-500/20 to-amber-500/0',
  },
  {
    title: 'Full-Length Practice Exams',
    desc: 'Adaptive tests with analytics for pacing and accuracy improvements.',
    icon: Layers,
    color: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    title: 'Mindset & Test Strategy',
    desc: 'Cognitive frameworks, stress management, and exam-day optimization.',
    icon: Brain,
    color: 'from-violet-500/20 to-violet-500/0',
  },
];

function CourseCard({ title, desc, Icon, color, i }) {
  return (
    <AnimatedSection delay={i * 0.06}>
      <div className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
        <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-b ${color} blur-2xl`} />
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gray-900 text-white shadow">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm text-gray-600">{desc}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="font-medium text-emerald-600">Explore curriculum</span>
          <span className="text-gray-400">→</span>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function CoursesShowcase() {
  return (
    <section id="courses" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Programs</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Courses Available</h2>
        <p className="mt-3 text-gray-600">Built for score jumps. Choose focused modules or a complete path.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c, i) => (
          <CourseCard key={c.title} title={c.title} desc={c.desc} Icon={c.icon} color={c.color} i={i} />)
        )}
      </div>
    </section>
  );
}
