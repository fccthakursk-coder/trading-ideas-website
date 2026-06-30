import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
  <Image
    src="/images/logo/logo.png"
    alt="Trading Ideas"
    width={45}
    height={45}
  />

  <span className="text-2xl font-bold text-yellow-400">
    Trading Ideas
  </span>
</Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-yellow-400 transition">
  Home
</Link>
          <Link href="/trade-ideas" className="hover:text-yellow-400 transition">
  Trade Ideas
</Link>
          <Link href="/learn" className="hover:text-yellow-400 transition">
  Free Learning
</Link>
          <Link href="/premium" className="hover:text-yellow-400 transition">
  Premium
</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">
  About
</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">
  Contact
</Link>
        </div>

        <a
          href="https://t.me/letstrade_08"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold transition"
        >
          Join Telegram
        </a>

      </div>
    </nav>
  );
}