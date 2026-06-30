import { BookOpen, MessageCircle, BarChart3 } from "lucide-react";

export default function FreeServices() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Free Services
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Everything you need to start your trading journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <MessageCircle size={40} className="text-yellow-400 mb-6" />

            <h3 className="text-2xl text-white font-bold mb-4">
              Telegram Community
            </h3>

            <p className="text-slate-400">
              Daily market updates and free trading ideas.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <BookOpen size={40} className="text-yellow-400 mb-6" />

            <h3 className="text-2xl text-white font-bold mb-4">
              Free Learning
            </h3>

            <p className="text-slate-400">
              Trading concepts, psychology and risk management.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <BarChart3 size={40} className="text-yellow-400 mb-6" />

            <h3 className="text-2xl text-white font-bold mb-4">
              Market Analysis
            </h3>

            <p className="text-slate-400">
              Gold & Forex analysis based on predefined rules.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}