import {
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  Crown,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Rule-Based Trading",
      description:
        "Every trade idea follows predefined rules for consistency and discipline.",
      icon: TrendingUp,
    },
    {
      title: "Risk Management",
      description:
        "Protecting capital is our first priority before chasing profits.",
      icon: ShieldCheck,
    },
    {
      title: "Free Learning",
      description:
        "Access educational content designed for beginners and experienced traders.",
      icon: GraduationCap,
    },
    {
      title: "Premium Community",
      description:
        "Unlock premium trade ideas, mentorship, and market insights.",
      icon: Crown,
    },
  ];

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Why Choose Trading Ideas?
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Learn. Analyze. Execute.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-yellow-500 transition duration-300"
              >
                <Icon
                  size={42}
                  className="text-yellow-400 mb-6"
                />

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}