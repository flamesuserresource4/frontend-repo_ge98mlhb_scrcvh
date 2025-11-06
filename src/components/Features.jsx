import { Rocket, BarChart3, BookOpen, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Features() {
  const items = [
    {
      icon: Rocket,
      title: 'Take Timed SAT Tests',
      desc: 'Full-length practice with adaptive timing, section controls, and real test interface.'
    },
    {
      icon: BarChart3,
      title: 'Instant Scores & Reports',
      desc: 'Auto-graded sections with scaled scores, subscores, and historical trends.'
    },
    {
      icon: BookOpen,
      title: 'Question-by-Question Review',
      desc: 'Reveal answers, solutions, and linked resources tailored to your weak areas.'
    },
    {
      icon: Award,
      title: 'Targeted Prep Plans',
      desc: 'Smart recommendations with goals and bite-sized practice sets.'
    }
  ];

  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-16">
      <AnimatedSection className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need for SAT mastery</h2>
        <p className="mt-3 text-gray-600">Practice, review, and improve with clean tools and clear feedback.</p>
      </AnimatedSection>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }, idx) => (
          <AnimatedSection key={title} delay={idx * 0.06} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
            <div className="mb-4 inline-flex rounded-xl bg-rose-50 p-3 text-rose-600 ring-1 ring-rose-100">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background:"radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(244, 63, 94, 0.08), transparent 40%)"}} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
