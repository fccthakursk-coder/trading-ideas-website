import PageHero from "../../components/PageHero";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageHero
        title="Contact"
        subtitle="Questions, feedback or partnership inquiries."
      />

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-10">

            <h2 className="text-3xl font-bold mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-yellow-400 font-semibold">Telegram</p>
                <a
                  href="https://t.me/letstrade_08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-yellow-400"
                >
                  @letstrade_08
                </a>
              </div>

              <div>
                <p className="text-yellow-400 font-semibold">Email</p>
                <p className="text-slate-300">
                  comingsoon@tradingideas.com
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}