import PageHero from "../../components/PageHero";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageHero
        title="Premium"
        subtitle="Advanced analysis, mentorship and exclusive educational content."
      />

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-slate-900 border border-yellow-500 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-6">
              Premium Membership
            </h2>

            <p className="text-slate-400 mb-10">
              Premium trade ideas, market analysis and mentorship.
            </p>

            <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold">
              Coming Soon
            </button>

          </div>

        </div>
      </section>
    </main>
  );
}