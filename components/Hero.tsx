export default function Hero() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-[150px] rounded-full"></div>
      </div>

      <section className="relative max-w-7xl mx-auto px-6 py-24 text-center">

        <span className="inline-block px-4 py-2 rounded-full border border-yellow-500 text-yellow-400 text-sm mb-8">
          Professional Trading Community
        </span>

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Trade Smarter.
          <br />
          <span className="text-yellow-400">
            Execute With Confidence.
          </span>
        </h1>

        <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">
          Rule-based market analysis for Gold & Forex using disciplined risk
          management. Join our community to access free trade ideas,
          educational resources, and premium mentorship.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">

          <a
            href="https://t.me/letstrade_08"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition duration-300"
          >
            Join Free Telegram
          </a>

          <button className="border border-slate-700 hover:border-yellow-500 px-8 py-4 rounded-xl transition duration-300">
            Explore Premium
          </button>

        </div>

      </section>
    </main>
  );
}