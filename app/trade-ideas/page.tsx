import PageHero from "../../components/PageHero";

const trades = [
  {
    pair: "XAUUSD",
    direction: "SELL",
    date: "22 June 2026",
    status: "Completed",
    rr: "1 : 3",
  },
  {
    pair: "EURUSD",
    direction: "BUY",
    date: "20 June 2026",
    status: "Completed",
    rr: "1 : 2",
  },
  {
    pair: "GBPUSD",
    direction: "BUY",
    date: "Coming Soon",
    status: "Pending",
    rr: "-",
  },
];

export default function TradeIdeasPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <PageHero
        title="Trade Ideas"
        subtitle="Educational trade setups with predefined risk management."
      />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {trades.map((trade) => (
              <div
                key={trade.pair}
                className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-yellow-400 transition"
              >
                <div className="flex justify-between mb-6">
                  <h2 className="text-2xl font-bold">
                    {trade.pair}
                  </h2>

                  <span className="text-yellow-400 font-semibold">
                    {trade.direction}
                  </span>
                </div>

                <p className="text-slate-400">
                  Date: {trade.date}
                </p>

                <p className="text-slate-400">
                  Status: {trade.status}
                </p>

                <p className="text-slate-400 mb-6">
                  Result: {trade.rr}
                </p>

                <button className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-400 font-semibold">
                  View Analysis
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}