export default function Stats() {
  const stats = [
    {
      number: "5+",
      label: "Years Experience",
    },
    {
      number: "1000+",
      label: "Trade Ideas",
    },
    {
      number: "Daily",
      label: "Market Analysis",
    },
    {
      number: "Free",
      label: "Learning Resources",
    },
  ];

  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center bg-slate-900 rounded-xl p-8 border border-slate-800"
          >
            <h2 className="text-4xl font-bold text-yellow-400">
              {stat.number}
            </h2>

            <p className="text-slate-400 mt-3">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}