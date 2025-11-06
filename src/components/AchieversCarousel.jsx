import { useEffect, useMemo, useRef, useState } from 'react';
import { Trophy } from 'lucide-react';

// Simple 3D carousel using CSS perspective and rotateY transforms
// Auto-rotates and supports hover pause
const sampleAchievers = [
  { name: 'Aarav Patel', score: 1590 },
  { name: 'Sophia Chen', score: 1580 },
  { name: 'Liam Johnson', score: 1570 },
  { name: 'Isabella García', score: 1560 },
  { name: 'Noah Kim', score: 1550 },
  { name: 'Mia Rossi', score: 1540 },
];

function Avatar({ name }) {
  const initials = useMemo(() => name.split(' ').map(p => p[0]).slice(0, 2).join(''), [name]);
  // Deterministic color based on name
  const hue = useMemo(() => {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h + name.charCodeAt(i) * 17) % 360;
    return h;
  }, [name]);
  return (
    <div
      className="grid h-14 w-14 place-items-center rounded-full text-white shadow-lg"
      style={{
        background: `conic-gradient(hsl(${hue} 80% 55%), hsl(${(hue + 60) % 360} 80% 55%))`,
      }}
    >
      <span className="font-semibold">{initials}</span>
    </div>
  );
}

function CarouselCard({ achiever, index, total, radius, angle }) {
  const theta = (360 / total) * index + angle;
  return (
    <div
      className="absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/70 p-4 shadow-xl backdrop-blur ring-1 ring-black/5"
      style={{
        transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
      }}
    >
      <div className="flex items-center gap-3">
        <Avatar name={achiever.name} />
        <div>
          <p className="text-sm text-gray-500">Top Scorer</p>
          <p className="font-semibold text-gray-900">{achiever.name}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-emerald-600">
        <Trophy className="h-4 w-4" />
        <span className="text-sm font-medium">SAT {achiever.score}</span>
      </div>
      <p className="mt-2 text-xs text-gray-600">“Consistent practice and smart strategies helped me break through.”</p>
    </div>
  );
}

export default function AchieversCarousel() {
  const [angle, setAngle] = useState(0);
  const [paused, setPaused] = useState(false);
  const reqRef = useRef(0);

  useEffect(() => {
    const step = () => {
      setAngle(prev => (prev + 0.2) % 360);
      reqRef.current = requestAnimationFrame(step);
    };
    if (!paused) reqRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(reqRef.current);
  }, [paused]);

  const radius = 320;
  const list = sampleAchievers;

  return (
    <section id="achievers" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Hall of Fame</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Our Achievers</h2>
        <p className="mt-3 text-gray-600">Meet students who pushed their scores to the top with focused prep.</p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-b from-white to-emerald-50/60 p-8">
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(50%_30%_at_50%_0%,rgba(16,185,129,0.25),rgba(255,255,255,0))]" />
        <div
          className="relative mx-auto h-[420px] w-full perspective"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative h-full w-full transform-style-preserve-3d transition-transform duration-300 ease-out"
            style={{ transform: `translateZ(-${radius}px) rotateY(${angle}deg)` }}
          >
            {list.map((a, i) => (
              <CarouselCard key={a.name} achiever={a} index={i} total={list.length} radius={radius} angle={0} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">Hover to pause. Auto-rotates to showcase success stories.</div>
      </div>
    </section>
  );
}
