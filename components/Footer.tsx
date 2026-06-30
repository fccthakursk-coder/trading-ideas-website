export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Trading Ideas
            </h2>

            <p className="text-slate-400 mt-2">
              Professional Market Analysis for Gold & Forex
            </p>
          </div>

          <div className="flex gap-6 text-slate-400">

            <a
              href="https://t.me/letstrade_08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              Telegram
            </a>

            <a href="#" className="hover:text-yellow-400">
              Contact
            </a>

            <a href="#" className="hover:text-yellow-400">
              Disclaimer
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
          © 2026 Trading Ideas. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}