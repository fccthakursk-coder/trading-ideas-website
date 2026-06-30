import { Crown, BookCheck, Users } from "lucide-react";

export default function PremiumServices() {
  return (
    <section id="premium" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Premium Services
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Take your trading to the next level.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <Crown size={42} className="text-yellow-400 mb-6" />

            <h3 className="text-2xl font-bold text-white mb-4">
              Premium Telegram
            </h3>

            <p className="text-slate-400">
              High-quality trade ideas with detailed analysis and updates.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <BookCheck size={42} className="text-yellow-400 mb-6" />

            <h3 className="text-2xl font-bold text-white mb-4">
              Trading Course
            </h3>

            <p className="text-slate-400">
              Step-by-step learning from beginner to advanced level.
            </p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <Users size={42} className="text-yellow-400 mb-6" />

            <h3 className="text-2xl font-bold text-white mb-4">
              Mentorship
            </h3>

            <p className="text-slate-400">
              Personal guidance, trade reviews and strategy improvement.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}