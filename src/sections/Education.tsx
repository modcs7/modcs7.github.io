import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, ChevronDown } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

const education: EducationItem[] = [
  {
    degree: 'PhD in Computer Science',
    institution: 'Budapest University of Technology and Economics',
    location: 'Budapest, Hungary',
    period: '2022 – Present',
    details: [
      'Specialisation: Speech Technology and Forensic Voice Comparison.',
      'PhD Candidate at the Speech Acoustics Laboratory.',
    ],
  },
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'Dr. B.A.M. University',
    location: 'India',
    period: '2011',
    details: [
      'Thesis Focus: SAR Image Compression using SPIHT.',
    ],
  },
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'University of AlQadisiyah',
    location: 'Iraq',
    period: '2008',
    details: [
      'Completed foundational coursework in computer science and programming.',
    ],
  },
];

const certificates = [
  { name: 'PhD Stipendium Hungaricum Scholarship', provider: 'July 2022' },
  { name: 'Research England Project Grant', provider: 'REX100-18' },
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showCertificates, setShowCertificates] = useState(false);
  
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
      id="education" 
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
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Academic background in computer science and AI
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto rounded-full mt-4 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>
        
        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group perspective-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(100px) rotateX(30deg)',
                transition: `all 0.7s cubic-bezier(0.68, -0.15, 0.265, 1.15) ${0.2 + index * 0.2}s`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow border border-border hover:border-primary/50 transition-all duration-300 preserve-3d ${
                  hoveredIndex === index ? 'shadow-glow border-primary/50' : ''
                }`}
              >
                {/* Header Layer */}
                <div
                  className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(6px)' : 'translateZ(0)',
                  }}
                >
                  <GraduationCap className={`w-8 h-8 text-primary mb-3 ${hoveredIndex === index ? 'shadow-glow' : ''}`} />
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {edu.degree}
                  </h3>
                </div>
                
                {/* Institution Layer */}
                <div
                  className="px-6 py-4 border-b border-border transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(4px)' : 'translateZ(0)',
                  }}
                >
                  <p className="font-semibold text-primary text-sm">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-foreground/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>
                </div>
                
                {/* Details Layer */}
                <div
                  className="p-6 transition-transform duration-300"
                  style={{
                    transform: hoveredIndex === index ? 'translateZ(2px)' : 'translateZ(0)',
                  }}
                >
                  <ul className="space-y-2">
                    {edu.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-sm text-foreground/70 flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Certificates Section */}
        <div 
          className="mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.8s',
          }}
        >
          <button
            onClick={() => setShowCertificates(!showCertificates)}
            className="w-full flex items-center justify-between p-5 bg-card rounded-xl shadow-soft hover:shadow-glow border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              <span className="font-semibold text-foreground">Scholarships & Awards</span>
              <span className="px-2 py-0.5 bg-primary/10 rounded-full text-xs font-medium text-primary">
                {certificates.length}
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-foreground/60 transition-transform duration-300 ${showCertificates ? 'rotate-180' : ''}`}
            />
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ${
              showCertificates ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-3">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-soft hover:shadow-glow border border-border hover:border-primary/50 transition-all duration-300"
                  style={{
                    opacity: showCertificates ? 1 : 0,
                    transform: showCertificates ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `all 0.4s ease ${index * 0.05}s`,
                  }}
                >
                  <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{cert.name}</p>
                    <p className="text-xs text-foreground/50">{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
