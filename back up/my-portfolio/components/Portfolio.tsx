import { ArrowLeft } from "lucide-react";

interface PortfolioProps {
  onNavigate: (section: string, projectId?: number) => void;
}

const projects = [
  {
    id: 1,
    title: "Travel Easy",
    category: "App Design",
    image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYwOTg2NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A mobile app for discovering and booking unique travel experiences"
  },
  {
    id: 2,
    title: "Gamma",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwc2NyZWVufGVufDF8fHx8MTc2MTAyMDc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A modern web platform for creative collaboration and project management"
  },
  {
    id: 3,
    title: "Brand Studio",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1689307300540-e3a2313cd6a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTAzMjY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete brand identity system for a creative design studio"
  },
  {
    id: 4,
    title: "Dashboard Pro",
    category: "Interface Design",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjEwNDQ2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Analytics dashboard with advanced data visualization and reporting"
  }
];

export function Portfolio({ onNavigate }: PortfolioProps) {
  return (
    <section className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Home</span>
        </button>
        <div className="text-sm opacity-50">Design & Art Director</div>
        <div className="text-sm opacity-50">Your Location • {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 max-w-4xl leading-relaxed">
          Dive into a few projects that represent my most fulfilling design experiences
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onNavigate('project', project.id)}
              className="group bg-zinc-900 rounded-3xl overflow-hidden hover:bg-zinc-800 transition-all cursor-pointer text-left w-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl">{project.title}</h3>
                  <span className="text-sm opacity-50">{project.category}</span>
                </div>
                <p className="opacity-60">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
