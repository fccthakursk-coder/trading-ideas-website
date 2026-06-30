export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-yellow-400">
          Trading Ideas
        </h1>

        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Trade Ideas</a>
          <a href="#" className="hover:text-yellow-400">Learn</a>
          <a href="#" className="hover:text-yellow-400">Premium</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </div>

        <a
          href="https://t.me/letstrade_08"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Join Telegram
        </a>
      </div>
    </nav>
  );
}