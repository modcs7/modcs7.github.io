import { useEffect, useRef, useState } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  highlight?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'University of AlQadisiyah',
    role: 'Assistant Professor of Computer Science',
    period: 'Current',
    location: 'AlQadisiyah, Iraq',
    description: [
      'Teach and supervise undergraduate and postgraduate students in computer science.',
      'Lead research in artificial intelligence, speech technology, and forensic voice comparison.',
      'Contribute to departmental initiatives and collaborative research projects.',
    ],
  },
  {
    company: 'Budapest University of Technology and Economics',
    role: 'PhD Researcher',
    period: '2022 – Present',
    location: 'Budapest, Hungary',
    description: [
      'Research speech technology with a focus on forensic voice comparison and deep speaker embeddings.',
      'Develop methods for robust speaker verification under challenging conditions.',
      'Collaborate with the Speech Acoustics Laboratory on AI-driven speech analysis projects.',
    ],
    highlight: 'PhD Stipendium Hungaricum Scholarship (July 2022)',
  },
  {
    company: 'Bournemouth University',
    role: 'Visiting Fellow',
    period: 'Current',
    location: 'Bournemouth, United Kingdom',
    description: [
      'Contribute to collaborative research in AI and speech technology.',
      'Engage in cross-institutional projects and academic partnerships.',
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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
      id="experience" 
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/50"
    >
      <div className="max-w-5xl mx-auto">
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
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Academic and research appointments across AI and speech technology
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto rounded-full mt-4 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-accent-purple"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease 0.3s',
            }}
          />
          
          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 sm:pl-20"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-2 sm:left-6 w-4 h-4 rounded-full border-4 border-background shadow-glow transition-all duration-300 ${
                    hoveredIndex === index ? 'bg-accent scale-125 shadow-glow-lg' : 'bg-primary'
                  }`}
                  style={{ top: '1.5rem' }}
                />
                
                {/* Card */}
                <div
                  className={`bg-card rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-glow hover:-translate-y-2 border border-border hover:border-primary/50 transition-all duration-300 ${
                    hoveredIndex === index ? 'shadow-glow -translate-y-2 border-primary/50' : ''
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Highlight Badge */}
                  {exp.highlight && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-4">
                      <span className="text-sm font-semibold text-gradient">{exp.highlight}</span>
                    </div>
                  )}
                  
                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-foreground/70 text-sm sm:text-base"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
