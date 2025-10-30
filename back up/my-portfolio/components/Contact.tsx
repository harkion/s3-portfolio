import { ArrowLeft, Mail, Linkedin, Github, Instagram } from "lucide-react";

interface ContactProps {
  onNavigate: (section: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
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
        <div className="text-sm opacity-50">Frontend Developer</div>
        <div className="text-sm opacity-50">Your Location • {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-12 leading-tight">
          Let's create something amazing together
        </h2>

        <p className="text-2xl md:text-3xl opacity-60 mb-16 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Contact Cards */}
        <div className="space-y-4 mb-16">
          <a
            href="mailto:your.email@example.com"
            className="group flex items-center justify-between bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Mail className="opacity-50" size={24} />
              <div>
                <div className="text-sm opacity-50 mb-1">Email</div>
                <div className="text-xl">your.email@example.com</div>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">→</div>
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="opacity-50" size={24} />
              <div>
                <div className="text-sm opacity-50 mb-1">LinkedIn</div>
                <div className="text-xl">linkedin.com/in/yourprofile</div>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">→</div>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Github className="opacity-50" size={24} />
              <div>
                <div className="text-sm opacity-50 mb-1">GitHub</div>
                <div className="text-xl">github.com/yourusername</div>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">→</div>
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Instagram className="opacity-50" size={24} />
              <div>
                <div className="text-sm opacity-50 mb-1">Instagram</div>
                <div className="text-xl">@yourusername</div>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">→</div>
          </a>
        </div>

        {/* Availability */}
        <div className="bg-zinc-900 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm opacity-50">Available for work</span>
          </div>
          <p className="text-xl opacity-70">
            Currently accepting select freelance projects and full-time opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
