import { ArrowLeft } from "lucide-react";

interface AboutProps {
  onNavigate: (section: string) => void;
}

export function About({ onNavigate }: AboutProps) {
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
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="space-y-6">
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed">
            I'm <span className="opacity-100">Fahri Can Genç</span>, a multi-disciplinary designer specializing in creating immersive and engaging product experiences.{" "}
            <span className="opacity-40">
              My work is characterized by a commitment to clarity, consistency, and attention to detail, ensuring that every project resonates authentically with its audience.
            </span>
          </p>
          
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed opacity-40">
            I have a deep appreciation for typography and its powerful role in design. Additionally, I'm an aspiring entrepreneur, driven by the desire to innovate and push creative boundaries in the industry.
          </p>
        </div>

        {/* Profile Image */}
        <div className="mt-12 flex justify-end">
          <div className="w-64 h-80 rounded-3xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1656313826909-1f89d1702a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc2MTAzNDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="mb-4 opacity-50">Expertise</h3>
            <ul className="space-y-2 opacity-70">
              <li>Product Design</li>
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Design Systems</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="mb-4 opacity-50">Tools</h3>
            <ul className="space-y-2 opacity-70">
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
              <li>Framer</li>
              <li>Webflow</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="mb-4 opacity-50">Experience</h3>
            <ul className="space-y-2 opacity-70">
              <li>5+ Years</li>
              <li>20+ Projects</li>
              <li>Global Clients</li>
              <li>Award Winning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
