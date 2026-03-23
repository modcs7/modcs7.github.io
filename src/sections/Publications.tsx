import { useEffect, useRef, useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

const publications: Publication[] = [
  
  {
    title: 'Face mask Detection from Speech Using Deep Speaker Embeddings',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: 'XXII. Magyar Számítógépes Nyelvészeti Konferencia',
    year: '2026',
    link: 'https://www.researchgate.net/profile/Mohammed-Alsalihi-2/publication/400144906_Face_mask_Detection_from_Speech_Using_Deep_Speaker_Embeddings/links/697a470164ca8a3820872da9/Face-mask-Detection-from-Speech-Using-Deep-Speaker-Embeddings.pdf',
  },
  {
    title: 'Face mask Detection from Speech Using Deep Speaker Embeddings',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: 'XXII. Magyar Számítógépes Nyelvészeti Konferencia',
    year: '2026',
    link: 'https://www.researchgate.net/profile/Mohammed-Alsalihi-2/publication/400144906_Face_mask_Detection_from_Speech_Using_Deep_Speaker_Embeddings/links/697a470164ca8a3820872da9/Face-mask-Detection-from-Speech-Using-Deep-Speaker-Embeddings.pdf',
  },
  {
    title: 'Retraining-Free Pruning Text-to-Speech Synthesis Model for Speaker Cloning',
    authors: 'A.R. Mandeel, T.Z. Fadhil, M. H. Alsalihi, M. S. Al-Radhi and G. Németh',
    venue: 'IEEE Access, vol. 13',
    year: '2025',
    link: 'https://ieeexplore.ieee.org/document/11242128',
  },
  {
    title: 'Effect of Spoof Speech on Forensic Voice Comparison Using Deep Speaker Embeddings',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: 'International Conference on Speech and Computer',
    year: '2025',
    link: 'https://link.springer.com/chapter/10.1007/978-3-032-07956-5_21',
  },
  {
    title: 'Spoof Speech Classification Using Deep Speaker Embeddings and Machine Learning Models',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: 'Array, vol. 27, 100494',
    year: '2025',
    link: 'https://www.sciencedirect.com/science/article/pii/S2590005625001213',
  },
  {
    title: 'Effect of Noises and GSM Codings on Pre-Trained Speaker Embedding Models in Forensic Voice Comparison',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: 'IEEE Access, vol. 13',
    year: '2025',
    link: 'https://ieeexplore.ieee.org/abstract/document/11097280',
  },
  {
    title: 'Effect of Child Voices on Forensic Voice Comparison using Deep Speaker Embeddings',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: '3rd Workshop on Intelligent Infocommunication Networks, Systems and Services (WINS 2025)',
    year: '2025',
    link: 'https://repozitorium.omikk.bme.hu/items/40eafcb4-1570-4bc0-9d52-e8b764111c29',
  },
  {
    title: 'Deep Speaker Embeddings for Speaker Verification of Children',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: 'International Conference on Text, Speech, and Dialogue (TSD), pp. 58–69',
    year: '2024',
  },
  {
    title: 'Optimize Energy Consumption of Wireless Sensor Networks by Using Modified Ant Colony Optimization (ACO)',
    authors: 'M. H. Alsalihi',
    venue: 'Acta Technica Jaurinensis, vol. 17, no. 3, pp. 111–117',
    year: '2024',
  },
  {
    title: 'Effect of Identical Twins on Deep Speaker Embeddings Based Forensic Voice Comparison',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: 'International Journal of Speech Technology, pp. 1–11',
    year: '2024',
  },
  {
    title: 'An Effective Ensemble Learning Approach for Classification of Glioma Grades Based on Novel MRI Features',
    authors: 'M. H. Alsalihi',
    venue: 'Scientific Reports, vol. 14, no. 1, 11977',
    year: '2024',
  },
  {
    title: 'Brain Tumor Classification Based on Federated Learning',
    authors: 'M. H. Alsalihi',
    venue: '10th International Conference on Optimization and Applications (ICOA), IEEE',
    year: '2024',
  },
  {
    title: 'Hilbert Convex Similarity for Highly Secure Random Distribution of Patient Privacy Steganography',
    authors: 'M. H. Alsalihi',
    venue: 'IEEE Access',
    year: '2023',
  },
  {
    title: 'Effects of Emotional Speech on Forensic Voice Comparison Using Deep Speaker Embeddings',
    authors: 'M. H. Alsalihi and D. Sztahó',
    venue: 'Magyar Számítógépes Nyelvészeti Konferencia, vol. 19, pp. 159–170',
    year: '2023',
  },
  {
    title: 'Distributed Brain Tumor Diagnosis Using a Federated Learning Environment',
    authors: 'M. H. Alsalihi',
    venue: 'Bulletin of Electrical Engineering and Informatics',
    year: '2022',
  },
  {
    title: 'Convolutional Neural Network for Color Images Classification',
    authors: 'M. H. Alsalihi',
    venue: 'Bulletin of Electrical Engineering and Informatics',
    year: '2022',
  },
  {
    title: 'A Comprehensive Survey on Federated Learning: Concept and Applications',
    authors: 'M. H. Alsalihi',
    venue: 'Springer',
    year: '2022',
  },
  {
    title: 'Optimize Weight Sharing for Aggregation Model in Federated Learning Environment of Brain Tumor Classification',
    authors: 'M. H. Alsalihi',
    venue: 'Journal of Al-Qadisiyah for Computer Science and Mathematics, vol. 14, no. 3, pp. 76–87',
    year: '2022',
  },
  {
    title: 'A Survey on Patients Privacy Protection with Steganography and Visual Encryption',
    authors: 'M. H. Alsalihi',
    venue: 'Lecture Notes in Networks and Systems, vol. 444, pp. 491–504',
    year: '2022',
  },
  {
    title: 'Finger Knuckle Pattern Person Identification System Based on LDP-NPE and Machine Learning Methods',
    authors: 'M. H. Alsalihi',
    venue: 'Bulletin of Electrical Engineering and Informatics, vol. 11, no. 6, pp. 3521–3529',
    year: '2022',
  },
  {
    title: 'Deep Learning Approach for COVID-19 Diagnosis Using X-Ray Images',
    authors: 'M. H. Alsalihi',
    venue: 'International Conference on Information Technology and Applications, p. 350',
    year: '2022',
  },
  {
    title: 'Palm Vein Identification Based on Hybrid Feature Selection Model',
    authors: 'M. H. Alsalihi',
    venue: 'Publication',
    year: '2021',
  },
  {
    title: 'Cluster-Based Information Retrieval Using K-Means Hierarchical Parallel Genetic Algorithms Approach',
    authors: 'M. H. Alsalihi',
    venue: 'TELKOMNIKA (Telecommunication, Computing, Electronics and Control)',
    year: '2021',
  },
  {
    title: 'Diabetic Retinopathy Diagnosis Based on Convolutional Neural Network',
    authors: 'M. H. Alsalihi',
    venue: 'Journal of Physics: Conference Series',
    year: '2021',
  },
  {
    title: 'The Effect of Topology Adaptation on Search Performance in Overlay Network',
    authors: 'M. H. Alsalihi',
    venue: 'Expert Clouds and Applications, pp. 65–73',
    year: '2021',
  },
  {
    title: 'Architectural Heritage Images Classification Using Deep Learning with CNN',
    authors: 'M. H. Alsalihi',
    venue: 'Publication',
    year: '2020',
  },
  {
    title: 'Convolutional Neural Network for Satellite Image Classification',
    authors: 'M. H. Alsalihi',
    venue: 'Intelligent Information Alsalihi Database Systems',
    year: '2020',
  },
  {
    title: 'Real-Time Color Image Classification Based on Deep Learning Network',
    authors: 'M. H. Alsalihi',
    venue: 'Journal of Southwest Jiaotong University',
    year: '2019',
  },
  {
    title: 'Wrist and Palm Vein Pattern Recognition Using Gabor Filter',
    authors: 'M. H. Alsalihi',
    venue: 'Journal of Al-Qadisiyah for Computer Science and Mathematics',
    year: '2017',
  },
  {
    title: 'Iris Recognition Model Based on Principal Component Analysis and Two-Level Haar Wavelet Transform',
    authors: 'M. H. Alsalihi',
    venue: 'Journal of Education College Wasit University',
    year: '2017',
  },
  {
    title: 'Content-Based Image Retrieval Based on Histogram',
    authors: 'M. H. Alsalihi',
    venue: 'International Journal of Computer Applications',
    year: '2015',
  },
  {
    title: 'SAR Image Compression Using SPIHT Algorithm',
    authors: 'M. H. Alsalihi',
    venue: 'International Journal of Computer Applications',
    year: '2011',
  },
];

const Publications = () => {
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

  const groupedPublications = publications.reduce<Record<string, Publication[]>>((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(groupedPublications).sort((a, b) => Number(b) - Number(a));
  let itemIndex = 0;

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
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
            <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Research contributions across speech technology and AI
          </p>
          <div
            className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-accent-purple mx-auto rounded-full mt-4 animate-gradient-shift"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>

        {years.map((year, yearIndex) => (
          <div key={year} className="mb-12">
            <div
              className="flex items-center gap-3 mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + yearIndex * 0.1}s`,
              }}
            >
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">{year}</h3>
            </div>

            <div className="space-y-4">
              {groupedPublications[year].map((pub) => {
                const currentIndex = itemIndex;
                itemIndex += 1;
                return (
                  <div
                    key={`${pub.title}-${pub.year}`}
                    className="relative group"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                      transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + currentIndex * 0.05}s`,
                    }}
                    onMouseEnter={() => setHoveredIndex(currentIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div
                      className={`relative bg-card rounded-xl p-5 sm:p-6 shadow-soft hover:shadow-glow border border-border hover:border-primary/50 transition-all duration-300 ${
                        hoveredIndex === currentIndex ? 'shadow-glow -translate-y-1 border-primary/50' : ''
                      }`}
                    >
                      <div className="pl-4">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {pub.title}
                        </h4>
                        <p className="text-sm text-foreground/60 mb-1">{pub.authors}</p>
                        <p className="text-sm text-foreground/50">
                          <span className="italic">{pub.venue}</span>, {pub.year}
                        </p>
                        {pub.link && (
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>View publication</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
