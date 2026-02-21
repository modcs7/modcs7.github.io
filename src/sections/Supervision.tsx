import { useEffect, useRef, useState } from 'react';
import { Users } from 'lucide-react';

interface SupervisionItem {
  student: string;
  year: string;
  title: string;
  details: string[];
}

const supervisionItems: SupervisionItem[] = [
  {
    student: 'Selim Ben Haj Braiek',
    year: '2025',
    title: 'Enhancing Spoof Speech Detection with CNN-Based Transfer Learning on Mel Spectrograms',
    details: [
      'Course: Project Laboratory 2',
      'Department: Telecommunications and Artificial Intelligence, Faculty of Electrical Engineering and Informatics, BME',
    ],
  },
  {
    student: 'Liang Wenlong',
    year: '2025',
    title: 'Age and Gender Identification Using Deep Speaker Embedding Techniques',
    details: [
      'Course: Project Laboratory 1',
      'Department: Telecommunications and Artificial Intelligence, Faculty of Electrical Engineering and Informatics, BME',
    ],
  },
  {
    student: 'Liang Wenlong',
    year: '2025',
    title: 'Age and Gender Prediction Using Deep Speaker Embedding',
    details: [
      'Course: Project Laboratory 2',
      'Department: Telecommunications and Artificial Intelligence, Faculty of Electrical Engineering and Informatics, BME',
    ],
  },
  {
    student: 'Sellami Yosr',
    year: '2025',
    title: 'Effect of Facemask on Speaker Verification Using Deep Speaker Embedding',
    details: [
      'Course: Project Laboratory 2',
      'Department: Telecommunications and Artificial Intelligence, Faculty of Electrical Engineering and Informatics, BME',
    ],
  },
  {
    student: 'Xue Zhexiong',
    year: '2024',
    title: 'Speaker Verification Using Improved Convolutional Neural Network',
    details: [
      'Course: Project Laboratory 2',
      'Department: Telecommunications and Artificial Intelligence, Faculty of Electrical Engineering and Informatics, BME',
    ],
  },
  {
    student: 'Selim Ben Haj Braiek',
    year: '2024',
    title: 'Effect of Noises and Mobile Codings on Pre-Trained Speaker Embedding Models in Forensic Voice Comparison',
    details: [
      'Course: Project Laboratory 1',
      'Department: Telecommunications and Artificial Intelligence, Faculty of Electrical Engineering and Informatics, BME',
    ],
  },
  {
    student: 'Xue Zhexiong',
    year: '2024',
    title: 'Speaker Diarization Based on a Deep Learning Embedding',
    details: [
      'Course: Project Laboratory 1',
      'Department: Telecommunications and Artificial Intelligence, BME',
    ],
  },
  {
    student: 'Dhurgham Hassan Mahlool',
    year: '2022',
    title: 'Brain Tumor Diagnosis Using a Federated Learning Environment',
    details: [
      'Department: Computer Science, University of AlQadisiyah',
      'Role: Main Supervisor',
    ],
  },
  {
    student: 'Hussein K. Alzubaidy',
    year: '2022',
    title: 'Patients Privacy Protection by Hilbert Measurements-Based Secure Distribution for LSB and MSB Steganography',
    details: [
      'Department: Computer Science, University of AlQadisiyah',
      'Role: Co-supervisor',
    ],
  },
];

const Supervision = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="supervision"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/50"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Supervision</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Supervision of M.Sc students (thesis and project)
          </p>
          <div
            className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto rounded-full mt-4 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {supervisionItems.map((item, index) => (
            <div
              key={`${item.student}-${item.title}`}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-3 text-primary">
                <Users className="w-5 h-5" />
                <span className="text-sm font-semibold">{item.year}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {item.student}
              </h3>
              <p className="text-sm text-foreground/70 mb-4">{item.title}</p>
              <ul className="space-y-2">
                {item.details.map((detail) => (
                  <li key={detail} className="text-xs text-foreground/60 flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supervision;
