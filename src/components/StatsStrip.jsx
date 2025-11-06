export default function StatsStrip() {
  const stats = [
    { label: 'Questions practiced', value: '12,450+' },
    { label: 'Avg. score increase', value: '+130' },
    { label: 'Daily active learners', value: '5,200+' },
    { label: 'Accuracy gain (2 wks)', value: '+18%' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid grid-cols-2 gap-4 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="">
            <div className="text-xl font-bold text-gray-900 sm:text-2xl">{s.value}</div>
            <div className="mt-1 text-xs text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
