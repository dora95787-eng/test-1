import { motion } from 'motion/react';
import { Beaker as Microscope, Zap, MonitorPlay } from 'lucide-react';

const instruments = [
  {
    category: "分析與鑑定設備 (Analytical Instruments)",
    items: [
      {
        name: "紫外光-可見光光譜儀",
        model: "JASCO V-730 UV-Vis Spectrophotometer",
        specs: "波長範圍 190 至 1100 nm。用於奈米材料吸收光譜分析、表面電漿共振峰位鑑定及催化降解即時監測。",
        img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=600",
        icon: <MonitorPlay className="w-5 h-5" />
      },
      {
        name: "電化學工作站",
        model: "CH Instruments CHI 611E Potentiostat",
        specs: "具備 CV, DPV, SWV, 交流阻抗 (EIS) 測量功能。用於生醫感測平台開發、電化學催化 (OER/HER) 及電池性能評估。",
        img: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=600",
        icon: <Zap className="w-5 h-5" />
      }
    ]
  },
  {
    category: "製備與合成設備 (Synthesis & Fabrication)",
    items: [
      {
        name: "高溫管流爐 / 系統",
        model: "Thermo Scientific Lindberg/Blue M",
        specs: "最高工作溫度達 1200°C。可通入多種反應氣體，適用於熱化學氣相沉積 (CVD) 及無機奈米材料高溫退火處理",
        img: "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?auto=format&fit=crop&q=80&w=600",
        icon: <Zap className="w-5 h-5" />
      },
      {
        name: "精密旋轉塗佈機",
        model: "Nabond Spin Coater",
        specs: "轉速精確控制，用於光電元件(如太陽能電池、量子點LED)之薄膜均勻塗佈與逐層(LbL)製膜工藝。",
        img: "https://images.unsplash.com/photo-1614935151651-0bea6508abb0?auto=format&fit=crop&q=80&w=600",
        icon: <Microscope className="w-5 h-5" />
      },
      {
        name: "水熱合成反應釜與烘箱",
        model: "Teflon-lined Stainless Steel Autoclaves",
        specs: "不同容量(20-100 mL)高壓反應釜與精密恆溫烘箱。專門用於奈米粒子與金屬層狀雙氫氧化物(LDH)之高溫高壓水熱合成。",
        img: "https://images.unsplash.com/photo-1614729939124-032f0b5609ce?auto=format&fit=crop&q=80&w=600",
        icon: <Microscope className="w-5 h-5" />
      }
    ]
  }
];

export default function Instruments() {
  return (
    <div className="bg-silver-50 py-12 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-brand-900 mb-4"
          >
            實驗設備 (Instruments)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-700 text-lg"
          >
            本實驗室配備完善的材料合成、奈米微影與光電/生化分析儀器，支援從基礎研究到元件原型開發。
          </motion.p>
        </div>

        <div className="space-y-16">
          {instruments.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="text-2xl font-bold text-brand-900 mb-8 tracking-wide border-b border-silver-200 pb-3">
                {section.category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-silver-200 group"
                  >
                    <div className="h-48 overflow-hidden relative bg-silver-100">
                      <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500 transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm text-accent-600">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-900 mb-1 leading-snug">{item.name}</h3>
                      <p className="text-sm font-medium text-accent-600 mb-4 font-mono select-all">Model: {item.model}</p>
                      <p className="text-brand-700 text-sm leading-relaxed">
                        {item.specs}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
