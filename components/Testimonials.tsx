import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Community Member",
    text: "The rule-based approach helped me stop taking random trades.",
  },
  {
    name: "Forex Trader",
    text: "Clear analysis and disciplined risk management. Highly recommended.",
  },
  {
    name: "Gold Trader",
    text: "I learned to wait for quality setups instead of chasing the market.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          What Traders Say
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Feedback from our growing community.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8"
            >

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-300 italic mb-8">
                "{item.text}"
              </p>

              <h3 className="text-white font-semibold">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}