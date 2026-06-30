import PageHero from "../../components/PageHero";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageHero
        title="Free Learning"
        subtitle="Master trading psychology, risk management and market structure through structured educational content."
      />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold mb-4">Trading Basics</h3>
            <p className="text-slate-400">
              Learn market structure, trends and price action.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold mb-4">Risk Management</h3>
            <p className="text-slate-400">
              Position sizing, R:R and capital preservation.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-2xl font-bold mb-4">Trading Psychology</h3>
            <p className="text-slate-400">
              Build discipline and consistency.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}