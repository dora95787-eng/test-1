import { motion } from 'motion/react';
import { ArrowRight, Microscope, Zap, ActivitySquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const news = [
  { id: 1, date: '2025.10', title: '恭喜本實驗室博士生榮獲台灣化學工程學會傑出論文獎。' },
  { id: 2, date: '2025.08', title: '最新關於高靈敏度生物感測器的研究成果已發表於 Advanced Materials。' },
  { id: 3, date: '2025.06', title: '歡迎新成員加入！114學年度碩士班與專題生迎新聚餐。' },
];

export default function Home() {
  return (
    <div className="bg-silver-50">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-900 z-0">
          {/* Mock abstract nano-material background image */}
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
            alt="Nanomaterials Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-brand-900/50 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p variants={fadeIn} className="text-accent-400 font-medium tracking-widest uppercase text-sm md:text-base">
              Chung Yuan Christian University
            </motion.p>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-md">
              奈米材料與元件實驗室
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-silver-200 max-w-3xl mx-auto font-light mt-4 drop-shadow">
              探索極致微觀，驅動未來科技
              <span className="block text-base md:text-lg opacity-80 mt-2 tracking-wide font-sans">
                Nanomaterials and Devices Laboratory (NMD Lab)
              </span>
            </motion.p>
            
            <motion.div variants={fadeIn} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/research" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-500 transition-colors shadow-lg shadow-accent-500/30">
                探索研究領域
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <Link to="/publications" className="inline-flex items-center justify-center px-8 py-3.5 border border-silver-400 text-base font-medium rounded-md text-white hover:bg-white/10 hover:border-white transition-colors backdrop-blur-sm">
                最新發表論文
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-white relative z-20 -mt-16 mx-4 sm:mx-6 lg:mx-8 max-w-7xl xl:mx-auto rounded-xl shadow-xl shadow-brand-900/5 border border-silver-100">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-silver-100">
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-silver-50 text-accent-600 rounded-full flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-900">前沿材料合成</h3>
            <p className="text-brand-700 text-sm leading-relaxed">專注於新型奈米結構的設計與製備，從基礎科學出發，突破材料特性的極限。</p>
          </div>
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-silver-50 text-accent-600 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-900">光電元件應用</h3>
            <p className="text-brand-700 text-sm leading-relaxed">將尖端奈米材料整合至高效率能源與光電元件中，致力於下一代綠色科技發展。</p>
          </div>
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-silver-50 text-accent-600 rounded-full flex items-center justify-center mb-4">
              <ActivitySquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-brand-900">跨領域生醫感測</h3>
            <p className="text-brand-700 text-sm leading-relaxed">與臨床醫學緊密結合，開發高靈敏度與即時定點照護的奈米生醫感測平台。</p>
          </div>
        </div>
      </section>

      {/* Welcome & News Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-brand-900 relative inline-block">
              歡迎來到 NMD 實驗室
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent-500 rounded-full"></span>
            </h2>
            <div className="prose prose-lg text-brand-700 font-light leading-relaxed">
              <p>
                本實驗室致力於奈米材料的先驅研究，從精巧的分子設計、磊晶成長到多功能奈米結構的構建。
              </p>
              <p>
                我們相信跨領域合作是激發創新的關鍵。除了深耕化學工程與材料科學領域，我們更積極將研究成果推向實際應用，涵蓋<strong>高效能光電元件</strong>與<strong>非侵入式生醫感測器</strong>。在這裡，學生能獲得札實的理論訓練與豐富的實作經驗，培育具備解決複雜問題能力的跨領域科技人才。
              </p>
            </div>
            <Link to="/team" className="inline-flex items-center text-accent-600 font-medium hover:text-accent-500 transition-colors">
              認識我們的團隊 <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-sm border border-silver-200 p-8"
          >
            <h2 className="text-2xl font-bold text-brand-900 mb-8 relative inline-block">
              最新消息
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent-500 rounded-full"></span>
            </h2>
            <ul className="space-y-6">
              {news.map((item) => (
                <li key={item.id} className="group relative pl-4 border-l-2 border-silver-200 hover:border-accent-500 transition-colors">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-silver-300 group-hover:bg-accent-500 transition-colors" />
                  <span className="block text-sm font-bold text-accent-600 mb-1">{item.date}</span>
                  <p className="text-brand-800 font-medium group-hover:text-brand-900 transition-colors">{item.title}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-silver-100 text-center">
              <Link to="/activities" className="text-sm font-medium text-brand-700 hover:text-accent-600 transition-colors uppercase tracking-wider">
                查看更多活動紀錄
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
