export default function CTA() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 to-rose-500 p-1 shadow-lg">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[22px] bg-white/90 px-8 py-10 backdrop-blur sm:flex-row">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Ready to raise your SAT score?</h3>
            <p className="mt-2 text-gray-700">Start a free practice test and get a detailed score report in minutes.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">Start now</a>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50">View sample report</a>
          </div>
        </div>
      </div>
    </section>
  );
}
