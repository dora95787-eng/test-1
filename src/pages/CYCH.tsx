import { motion } from 'motion/react';
import { Microscope, ArrowRightLeft, Stethoscope, HandHeart } from 'lucide-react';

export default function CYCH() {
  return (
    <div className="bg-silver-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-brand-900 py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-brand-900/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 pr-3 border-b-2 border-accent-500 text-accent-400 font-bold tracking-widest uppercase text-sm mb-6">
              Cross-disciplinary Clinical Partnership
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              CYCU × CYCH<br/>
              轉譯奈米醫學合作平台
            </h1>
            <p className="text-lg md:text-xl text-silver-300 font-light leading-relaxed">
              中原大學奈米材料與元件實驗室與嘉義基督教醫院 (Chia-Yi Christian Hospital) 建立深度跨領域臨床夥伴關係，致力於將奈米科技落實於臨床診斷與定點照護。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-brand-900">學醫研發：從實驗桌到病床旁 (Bench to Bedside)</h2>
            <div className="prose prose-lg text-brand-700 font-light">
              <p>
                傳統生化檢測通常需要大型儀器與耗時的流程。透過我們與嘉基臨床醫師團隊的合作，我們專注於開發<strong>微型化、高靈敏度的非侵入性生醫感測元件</strong>。
              </p>
              <p>
                藉由結合我們在「表面增強拉曼光譜 (SERS)」與「電化學奈米探針」的專長，搭配醫院提供之第一手臨床痛點與真實檢體驗證，我們期望能大幅縮短檢驗時間，讓早期疾病篩檢(如：急性感染、特定癌症生物標記物) 變得更為普及與迅速。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-silver-200">
                <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=400" alt="Clinical Research" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-silver-200">
                <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=400" alt="Nanomedicine" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-silver-200">
                <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400" alt="Biomedical Sensing" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-silver-200">
                <img src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&q=80&w=400" alt="Hospital Collaboration" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Collaboration Themes */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-900">核心合作專案</h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Stethoscope className="w-8 h-8" />,
              title: "高靈敏度疾病快篩",
              desc: "針對臨床常見之急重症感染指標，設計專一性奈米光學探針，於數分鐘內實現極微量血液或唾液中的生物標記物偵測。"
            },
            {
              icon: <HandHeart className="w-8 h-8" />,
              title: "即時定點照護 (POCT)",
              desc: "開發微型化電化學感測晶片與可攜式讀出設備，賦能偏鄉醫療與床邊檢驗，降低醫療系統負擔並提升診斷效率。"
            },
            {
              icon: <ArrowRightLeft className="w-8 h-8" />,
              title: "技術轉移與專利佈局",
              desc: "雙方針對具備高度臨床應用價值之感測技術共同申請專利，並積極參與醫療新創與產學技轉，達成技術落地。"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-silver-100 hover:border-accent-400 transition-colors text-center"
            >
              <div className="mx-auto w-16 h-16 bg-silver-50 text-accent-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-silver-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
              <p className="text-brand-700 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}
