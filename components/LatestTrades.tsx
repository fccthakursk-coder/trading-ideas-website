export default function LatestTrades() {
  const trades = [
    {
      pair: "XAUUSD",
      type: "SELL",
      status: "Completed",
      rr: "1:3 RR",
    },
    {
      pair: "EURUSD",
      type: "BUY",
      status: "Completed",
      rr: "1:2 RR",
    },
    {
      pair: "GBPUSD",
      type: "BUY",
      status: "Coming Soon",
      rr: "-",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Latest Trade Ideas
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Recent educational trade setups shared with the community.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {trades.map((trade) => (
            <div
              key={trade.pair}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-yellow-500 transition"
            >
              <div className="flex justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {trade.pair}
                </h3>

                <span className="text-yellow-400 font-semibold">
                  {trade.type}
                </span>
              </div>

              <p className="text-slate-400 mb-2">
                Status: {trade.status}
              </p>

              <p className="text-slate-400 mb-8">
                Result: {trade.rr}
              </p>

              <button className="text-yellow-400 hover:text-yellow-300 font-semibold">
                View Analysis →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}