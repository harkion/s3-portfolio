import Link from "next/link";

export default function Navbar() {
return (
    <header className="border-b border-zinc-900/80">
    <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
        Fahri Can Genç • Frontend Developer
        </Link>
        <nav className="flex gap-6 text-zinc-300 text-sm">
        <Link href="/about" className="hover:text-white">About</Link>
        <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
        <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
    </div>
    </header>
);
}
