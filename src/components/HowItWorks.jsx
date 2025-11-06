import { PlayCircle, Clock, ClipboardList, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Pick a test',
      desc: 'Choose a full-length practice or custom section set.'
    },
    {
      icon: Clock,
      title: 'Timed experience',
      desc: 'Realistic timing, pauses, and section transitions.'
    },
    {
      icon: PlayCircle,
      title: 'Instant scoring',
      desc: 'Submit to get scaled scores and subscores right away.'
    },
    {
      icon: TrendingUp,
      title: 'Analyze & improve',
      desc: 'Drill into mistakes, track trends, and get smart recommendations.'
    }
  ];

  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
        <p className="mt-3 text-gray-600">Simple steps from practice to progress.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }, idx) => (
          <div key={title} className="relative rounded-2xl border border-gray-100 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="mb-4 inline-flex rounded-xl bg-gray-50 p-3 text-gray-800 ring-1 ring-gray-200">
              <Icon className="h-5 w-5" />
            </div>
            <div className="text-sm font-semibold text-rose-600">Step {idx + 1}</div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
