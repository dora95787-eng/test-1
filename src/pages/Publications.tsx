import { motion } from 'motion/react';
import { BookText, ExternalLink } from 'lucide-react';

// Demo data - structuring publications by year
const publications = [
  {
    year: '2025',
    papers: [
      {
        title: "Ultrasensitive SERS-based Biosensor for Early Detection of Cancer Biomarkers Using Plasmonic Core-Shell Nanoparticles",
        authors: "Wang, Y.-T.; Chen, J.-H.; PI_Name*.",
        journal: "Advanced Materials",
        details: "2025, 37(12), 2410382.",
        doi: "#",
        isNew: true
      },
      {
        title: "Defect Passivation in Perovskite Solar Cells via Novel Mixed-Ligand Strategy for Enhanced Efficiency and Stability",
        authors: "Chen, J.-H.; Lee, M.-C.; PI_Name*.",
        journal: "Energy & Environmental Science",
        details: "2025, 18, 456-465.",
        doi: "#"
      }
    ]
  },
  {
    year: '2024',
    papers: [
      {
        title: "Electrochemical Non-Enzymatic Glucose Sensor Based on Metal-Organic Framework Derived CuO Nanowires",
        authors: "Liu, C.-L.; Chang, C.-W.; PI_Name*.",
        journal: "Sensors and Actuators B: Chemical",
        details: "2024, 401, 134982.",
        doi: "#"
      },
      {
        title: "Green Synthesized Silver Nanoparticles for Antibacterial and Photocatalytic Degradation of Organic Dyes",
        authors: "Chang, S.-J.; PI_Name*.",
        journal: "Journal of Cleaner Production",
        details: "2024, 434, 140232.",
        doi: "#"
      },
      {
        title: "High-Performance Quantum Dot Light-Emitting Diodes Using Optimized Charge Transport Layers",
        authors: "Ho, C.-Y.; PI_Name*.",
        journal: "ACS Applied Materials & Interfaces",
        details: "2024, 16(5), 6234-6242.",
        doi: "#"
      }
    ]
  },
  {
    year: '2023',
    papers: [
      {
        title: "Review on Surface Plasmon Resonance Sensors: From Conventional Configurations to Nanostructured Amplification",
        authors: "PI_Name*.",
        journal: "Chemical Engineering Journal",
        details: "2023, 460, 141673.",
        doi: "#"
      }
    ]
  }
];

export default function Publications() {
  return (
    <div className="bg-silver-50 py-12 lg:py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">發表論文 (Publications)</h1>
          <p className="text-brand-700">精選學術期刊論文發表紀錄 (Selected Peer-Reviewed Journal Articles)。</p>
        </div>

        <div className="space-y-16">
          {publications.map((section, idx) => (
            <motion.div 
              key={section.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-accent-600 mb-6 flex items-center">
                <span className="bg-silver-200 h-px flex-1 mr-4"></span>
                {section.year}
                <span className="bg-silver-200 h-px flex-1 ml-4"></span>
              </h2>

              <div className="space-y-6">
                {section.papers.map((paper, pIdx) => (
                  <div 
                    key={pIdx} 
                    className="bg-white rounded-xl p-6 shadow-sm border border-silver-200 hover:shadow-md hover:border-accent-300 transition-all group relative"
                  >
                    {paper.isNew && (
                      <div className="absolute top-0 right-0 -mt-2 -mr-2">
                        <span className="flex h-6 items-center px-3 rounded-full bg-accent-500 text-white text-xs font-bold shadow-sm">
                          最新發表 NEW!
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex mt-1 w-10 h-10 rounded-full bg-silver-50 items-center justify-center text-brand-400 shrink-0 group-hover:bg-accent-50 group-hover:text-accent-500 transition-colors">
                        <BookText className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-brand-900 mb-2 leading-snug">
                          {paper.title}
                        </h3>
                        <p className="text-brand-700 text-sm mb-1 font-medium">
                          {paper.authors.split('PI_Name*').map((part, i, arr) => 
                            i === arr.length - 1 ? part : <span key={i}>{part}<strong className="text-brand-900 border-b border-brand-300">PI_Name*</strong></span>
                          )}
                        </p>
                        <p className="text-sm">
                          <span className="italic text-accent-700 mr-2 font-medium">{paper.journal}</span>
                          <span className="text-brand-500">{paper.details}</span>
                        </p>
                        
                        <div className="mt-4">
                          <a 
                            href={paper.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-medium text-silver-500 hover:text-accent-600 transition-colors"
                          >
                            DOI Link <ExternalLink className="w-3 h-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
