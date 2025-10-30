import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  const [currentSection, setCurrentSection] = useState<'home' | 'about' | 'portfolio' | 'contact' | 'project'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleNavigate = (section: string, projectId?: number) => {
    setCurrentSection(section as 'home' | 'about' | 'portfolio' | 'contact' | 'project');
    if (projectId !== undefined) {
      setSelectedProjectId(projectId);
    }
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="size-full bg-black overflow-y-auto">
      {currentSection === 'home' && <Hero onNavigate={handleNavigate} />}
      {currentSection === 'about' && <About onNavigate={handleNavigate} />}
      {currentSection === 'portfolio' && <Portfolio onNavigate={handleNavigate} />}
      {currentSection === 'contact' && <Contact onNavigate={handleNavigate} />}
      {currentSection === 'project' && selectedProjectId && (
        <ProjectDetail onNavigate={handleNavigate} projectId={selectedProjectId} />
      )}
    </div>
  );
}
