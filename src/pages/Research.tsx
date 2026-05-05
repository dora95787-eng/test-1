import { motion } from 'motion/react';
import { Network, Cpu, Activity, Lightbulb } from 'lucide-react';

const researchAreas = [
  {
    id: 'synthesis',
    title: '奈米材料合成與界面工程',
    subtitle: 'Nanomaterials Synthesis & Interface Engineering',
    icon: <Network className="w-8 h-8" />,
    description: '專注於金屬與半導體奈米晶體的精準合成，探討尺寸、形狀與表面應變對物理化學特性的影響。透過表面配體置換與磊晶生長技術，控制界面電荷傳遞機制。',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    tags: ['Colloidal Synthesis', 'Surface Plasmon Resonance', 'Core-Shell Structures']
  },
  {
    id: 'optoelectronics',
    title: '先進光電元件開發',
    subtitle: 'Advanced Optoelectronic Devices',
    icon: <Cpu className="w-8 h-8" />,
    description: '將新型奈米材料應用於次世代發光二極體 (QLED/PeLED) 與高效率太陽能電池。研究重點包含載子傳輸層的能階對位、缺陷鈍化以及提升元件環境穩定性。',
    img: 'https://images.unsplash.com/photo-1544377193-33dce4ea6a42?auto=format&fit=crop&q=80&w=800',
    tags: ['Perovskite Solar Cells', 'Quantum Dot LEDs', 'Photodetectors']
  },
  {
    id: 'biosensors',
    title: '超靈敏生醫感測器',
    subtitle: 'Ultrasensitive Biosensors',
    icon: <Activity className="w-8 h-8" />,
    description: '結合微機電系統(MEMS)與奈米探針，開發可用於早期疾病診斷(如癌症標記物、病原體)的非侵入式光學與電化學感測平台，具有即時定點照護 (POCT) 潛力。',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    tags: ['SERS', 'Electrochemical Sensing', 'Point-of-Care Testing']
  },
  {
    id: 'energy',
    title: '綠能儲備與催化轉換',
    subtitle: 'Energy Storage & Catalytic Conversion',
    icon: <Lightbulb className="w-8 h-8" />,
    description: '開發多孔性奈米複合材料作為高效能電化學催化劑(如水分解產氫、二氧化碳還原)，並推進超級電容與新世代電池的電極材料設計。',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    tags: ['Electrocatalysis', 'Supercapacitors', 'Green Energy']
  }
];

export default function Research() {
  return (
    <div className="bg-silver-50 py-12 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-brand-900 mb-4"
          >
            研究領域 (Research)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-700 text-lg"
          >
            結合化學工程基礎與奈米科技前沿，我們致力於將材料創新轉化為解決能源與健康挑戰的具體方案。
          </motion.p>
        </div>

        <div className="space-y-12 lg:space-y-24">
          {researchAreas.map((area, idx) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Image / Graphical Abstract Placeholder */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-accent-500 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500 opacity-20 z-0" />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg bg-white border border-silver-200 aspect-[4/3] flex items-center justify-center">
                  <img 
                    src={area.img} 
                    alt={area.title} 
                    className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent opacity-80" />
                  {/* Overlay Icon */}
                  <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md p-3 rounded-xl text-white border border-white/30 hidden md:block">
                     {area.icon}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-brand-900 mb-1">{area.title}</h2>
                  <p className="text-accent-600 font-medium tracking-wide">{area.subtitle}</p>
                </div>
                <p className="text-brand-700 text-base lg:text-lg leading-relaxed font-light">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {area.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-silver-100 text-brand-800 text-xs font-medium rounded-full border border-silver-200 shadow-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
