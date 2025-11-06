import { Rocket, BarChart3, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Take Tests Effortlessly',
    desc: 'Full-length SAT practice with section timers and clean question navigation.',
  },
  {
    icon: BarChart3,
    title: 'Instant Results',
    desc: 'Auto-graded scores with subscore breakdowns to guide your next steps.',
  },
  {
    icon: Clock,
    title: 'Timing Insights',
    desc: 'Pacing analytics per question and section to improve speed and accuracy.',
  },
  {
    icon: ShieldCheck,
    title: 'Progress Tracking',
    desc: 'Secure history of attempts, trends over time, and personalized goals.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Designed for focused learning</h2>
        <p className="mt-3 text-gray-600">
          Everything you need to prepare efficiently: testing, scoring, and analytics in one place.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex rounded-lg bg-rose-50 p-3 text-rose-600 ring-1 ring-rose-100">
              <Icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
