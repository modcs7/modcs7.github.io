import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, BookOpen, FileText, Mic, Shield, Brain } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ElementType;
  githubUrl?: string;
  demoUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Face mask Detection from Speech Using Deep Speaker Embeddings',
    description: 'Accepted at the XXII. Magyar Számítógépes Nyelvészeti Konferencia in Szeged, Hungary (January 2026).',
    technologies: ['Conference', '2026', 'Szeged'],
    icon: Mic,
    color: 'from-primary to-blue-500',
  },
  {
    title: 'Retraining-Free Pruning Text-to-Speech Synthesis Model for Speaker Cloning',
    description: 'Accepted in the Q1 journal IEEE Access in collaboration with researchers from Hungary and Iraq (November 2025).',
    technologies: ['IEEE Access', 'Journal', '2025'],
    icon: BookOpen,
    color: 'from-accent to-indigo-500',
  },
  {
    title: 'Effect of Spoof Speech on Forensic Voice Comparison Using Deep Speaker Embeddings',
    description: 'Presented at SPECOM 2025 in Szeged and published by Springer Nature Switzerland.',
    technologies: ['Conference', 'Springer', '2025'],
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Spoof Speech Classification Using Deep Speaker Embeddings and Machine Learning Models',
    description: 'Published in Array (Elsevier) with an emphasis on robust spoof speech detection.',
    technologies: ['Array', 'Elsevier', '2025'],
    icon: FileText,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Federated Learning to Diagnose Brain Tumor',
    description: 'Research project funded by Research England through Buckinghamshire New University (REX100-18), Jan–Jul 2024.',
    technologies: ['Research England', '2024', 'REX100-18'],
    icon: Brain,
    color: 'from-orange-500 to-red-500',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">News & Highlights</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Recent publications, presentations, and funded research
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto rounded-full mt-4 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'rotateX(0deg) translateY(0)' : 'rotateX(30deg) translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.68, -0.15, 0.265, 1.15) ${0.2 + index * 0.15}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div
                className={`relative h-full bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow hover:-translate-y-3 hover:scale-[1.02] border border-border hover:border-primary/50 transition-all duration-300 ${
                  hoveredIndex === index ? 'shadow-glow -translate-y-3 scale-[1.02]' : ''
                }`}
              >
                {/* Holographic Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 transition-opacity duration-500`}
                />
                
                {/* Shine Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                    transform: hoveredIndex === index ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  }}
                />
                
                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-5 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    style={{
                      transform: hoveredIndex === index ? 'perspective(1000px) rotateY(10deg)' : 'perspective(1000px) rotateY(0deg)',
                    }}
                  >
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-muted rounded-full text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-foreground/60 hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-lg bg-background/80 backdrop-blur-xl">
          {selectedProject && (() => {
            const IconComponent = selectedProject.icon;
            return (
              <>
                {/* Subtle gradient accent at top */}
                <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${selectedProject.color} opacity-60`} />

                <DialogHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center shadow-lg shrink-0 animate-scale-in`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <DialogTitle className="text-2xl font-bold animate-slide-up" style={{ animationDelay: '0.05s', animationFillMode: 'both' }}>
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="text-base text-foreground/70 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2 mt-2 animate-slide-up" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium bg-muted/60 rounded-full text-foreground/70 border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                  <div className="flex items-center gap-4 mt-4 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
