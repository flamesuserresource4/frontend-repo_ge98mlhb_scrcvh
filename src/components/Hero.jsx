import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] overflow-hidden">
      {/* Spline interactive cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          Interactive 3D cover • Minimal, modern, responsive
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          SAT Practice, Results, and Deep Analysis
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          A focused LMS for SAT prep. Take full-length tests, get instant scores, and
          understand strengths and gaps with clean, visual insights.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
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
        </div>
      </div>
    </section>
  );
}
