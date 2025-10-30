import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="min-h-screen bg-black text-white p-6 md:p-12 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center mb-20">
        <div>
          <div className="text-sm opacity-70">Fahri Can Genç</div>
          <div className="text-sm opacity-50">Frontend Developer</div>
        </div>
        <div className="text-sm opacity-50">Your Location • {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
      </header>

      {/* Hero Title */}
      <div className="flex-1 flex items-center justify-center mb-20">
        <h1 className="text-6xl md:text-8xl lg:text-9xl text-center tracking-tight">
          Fahri Can Genç
        </h1>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/* About Card */}
        <button
          onClick={() => onNavigate('about')}
          className="group bg-zinc-900 rounded-3xl p-8 aspect-[4/3] flex items-end justify-between hover:bg-zinc-800 transition-colors"
        >
          <span>About</span>
          <ArrowUpRight className="opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
        </button>

        {/* Portfolio Card */}
        <button
          onClick={() => onNavigate('portfolio')}
          className="group bg-zinc-900 rounded-3xl p-8 aspect-[4/3] flex items-end justify-between hover:bg-zinc-800 transition-colors"
        >
          <span>Portfolio</span>
          <ArrowUpRight className="opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
        </button>

        {/* Contact Card */}
        <button
          onClick={() => onNavigate('contact')}
          className="group bg-zinc-900 rounded-3xl p-8 aspect-[4/3] flex items-end justify-between hover:bg-zinc-800 transition-colors md:col-span-2 lg:col-span-1"
        >
          <span>Contact</span>
          <ArrowUpRight className="opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
        </button>
      </div>
    </section>
  );
}
