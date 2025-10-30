import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectDetailProps {
  onNavigate: (section: string, projectId?: number) => void;
  projectId: number;
}

const projectsData = [
  {
    id: 1,
    title: "Travel Easy",
    category: "App Design",
    year: "2024",
    role: "Lead Designer",
    team: ["Your Name", "Developer A", "Developer B"],
    overview: "Travel Easy is a comprehensive mobile application designed to revolutionize how people discover and book unique travel experiences. The app combines intuitive navigation with stunning visuals to create an immersive booking experience.",
    challenge: "Traditional travel booking platforms often overwhelm users with too many options and complex interfaces. Our challenge was to create a streamlined experience that makes booking travel experiences feel effortless and exciting.",
    solution: "We developed a card-based interface with large imagery and minimal text, allowing users to quickly browse and compare experiences. The booking flow was simplified to just three steps, reducing friction and increasing conversions.",
    images: [
      "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYwOTg2NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1716788781066-7dbce308bbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9qZWN0JTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc2MTUyNTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1643336177967-710676ec3fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBpbnRlcmZhY2UlMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NjE1MjUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 2,
    title: "Gamma",
    category: "UX/UI Design",
    year: "2024",
    role: "UI/UX Designer",
    team: ["Your Name", "Product Manager", "Engineers"],
    overview: "Gamma is a modern web platform designed for creative collaboration and project management. Built with teams in mind, it combines powerful functionality with an elegant, minimalist interface.",
    challenge: "Most project management tools prioritize features over usability, resulting in cluttered interfaces that overwhelm users. Teams needed a solution that was both powerful and pleasant to use daily.",
    solution: "We created a clean, distraction-free interface that uses subtle animations and micro-interactions to guide users. The design system emphasizes whitespace and typography, making complex information easy to digest.",
    images: [
      "https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwc2NyZWVufGVufDF8fHx8MTc2MTAyMDc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1642756060888-aa5f4bc4d86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjE0OTU3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1643336177967-710676ec3fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBpbnRlcmZhY2UlMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NjE1MjUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 3,
    title: "Brand Studio",
    category: "Brand Identity",
    year: "2023",
    role: "Brand Designer",
    team: ["Your Name", "Creative Director"],
    overview: "Brand Studio is a comprehensive brand identity system created for a modern creative design studio. The project encompassed logo design, color systems, typography, and brand guidelines.",
    challenge: "The studio needed a brand identity that would appeal to both corporate clients and creative startups while standing out in a crowded market of design agencies.",
    solution: "We developed a flexible brand system with a bold, geometric logo and a vibrant color palette. The identity balances professionalism with creativity, using dynamic layouts and expressive typography.",
    images: [
      "https://images.unsplash.com/photo-1689307300540-e3a2313cd6a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MTAzMjY0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1716788781066-7dbce308bbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9qZWN0JTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc2MTUyNTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1642756060888-aa5f4bc4d86b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjE0OTU3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  },
  {
    id: 4,
    title: "Dashboard Pro",
    category: "Interface Design",
    year: "2023",
    role: "Product Designer",
    team: ["Your Name", "Data Team", "Engineering"],
    overview: "Dashboard Pro is an advanced analytics dashboard featuring comprehensive data visualization and reporting capabilities. Designed for data-driven teams who need quick insights.",
    challenge: "Users were struggling to find meaningful insights in their data due to overwhelming amounts of information and poor visualization choices in existing tools.",
    solution: "We created a modular dashboard system with customizable widgets and intelligent defaults. Color-coded metrics and progressive disclosure patterns help users focus on what matters most.",
    images: [
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjEwNDQ2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1643336177967-710676ec3fa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBpbnRlcmZhY2UlMjBkYXJrJTIwbW9kZXxlbnwxfHx8fDE3NjE1MjUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1716788781066-7dbce308bbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBwcm9qZWN0JTIwbW9ja3VwJTIwc2NyZWVufGVufDF8fHx8MTc2MTUyNTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ]
  }
];

export function ProjectDetail({ onNavigate, projectId }: ProjectDetailProps) {
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    return null;
  }

  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <section className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 md:p-12 border-b border-zinc-800">
        <button
          onClick={() => onNavigate('portfolio')}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Back to Portfolio</span>
        </button>
        <div className="text-sm opacity-50">Frontend Developer</div>
      </header>

      {/* Project Hero */}
      <div className="p-6 md:p-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4">{project.title}</h1>
              <p className="text-xl opacity-60">{project.category}</p>
            </div>
            <div className="space-y-4 text-sm">
              <div>
                <span className="opacity-50">Year:</span>
                <span className="ml-2">{project.year}</span>
              </div>
              <div>
                <span className="opacity-50">Role:</span>
                <span className="ml-2">{project.role}</span>
              </div>
              <div>
                <span className="opacity-50">Team:</span>
                <span className="ml-2">{project.team.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Images */}
      <div className="space-y-4 p-6 md:p-12">
        {project.images.map((image, index) => (
          <div 
            key={index}
            className={`max-w-7xl mx-auto rounded-3xl overflow-hidden ${
              index % 2 === 0 ? 'bg-zinc-100' : 'bg-zinc-200'
            }`}
          >
            <div className="aspect-[16/10]">
              <ImageWithFallback
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="bg-black py-20 px-6 md:px-12 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16">EXPLORE THE FULL STORY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl mb-4 opacity-50">Overview</h3>
              <p className="opacity-70 leading-relaxed">{project.overview}</p>
            </div>
            <div>
              <h3 className="text-xl mb-4 opacity-50">The Challenge</h3>
              <p className="opacity-70 leading-relaxed">{project.challenge}</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-xl mb-4 opacity-50">Solution</h3>
            <p className="opacity-70 leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </div>

      {/* Additional Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-12">
        <div className="bg-zinc-100 rounded-3xl overflow-hidden aspect-[4/3]">
          <ImageWithFallback
            src={project.images[0]}
            alt={`${project.title} detail 1`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-zinc-200 rounded-3xl overflow-hidden aspect-[4/3]">
          <ImageWithFallback
            src={project.images[1]}
            alt={`${project.title} detail 2`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-zinc-800 p-6 md:p-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Previous Project */}
          {prevProject ? (
            <button
              onClick={() => onNavigate('project', prevProject.id)}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
            >
              <ChevronLeft size={20} />
              <div className="text-left">
                <div className="text-xs opacity-50 mb-1">PREV</div>
                <div className="text-sm">{prevProject.title}</div>
              </div>
            </button>
          ) : (
            <div></div>
          )}

          {/* Project Credits */}
          <div className="text-right text-sm opacity-50">
            <div>Made with ❤️</div>
            <div>by Your Name</div>
          </div>

          {/* Next Project */}
          {nextProject ? (
            <button
              onClick={() => onNavigate('project', nextProject.id)}
              className="flex items-center gap-2 hover:opacity-70 transition-opacity group"
            >
              <div className="text-right">
                <div className="text-xs opacity-50 mb-1">NEXT</div>
                <div className="text-sm">{nextProject.title}</div>
              </div>
              <ChevronRight size={20} />
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </section>
  );
}
