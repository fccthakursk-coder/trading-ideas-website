const faqs = [
  {
    q: "Are these trading signals?",
    a: "No. They are educational trade ideas based on predefined rules.",
  },
  {
    q: "Do you guarantee profits?",
    a: "No. Every trade carries risk. We focus on process, not promises.",
  },
  {
    q: "Is there a free community?",
    a: "Yes. Join our Telegram channel for free market analysis and learning.",
  },
  {
    q: "Who is Premium for?",
    a: "Traders looking for deeper analysis, mentorship and structured learning.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Common questions from our community.
        </p>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                {faq.q}
              </h3>

              <p className="text-slate-300">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}