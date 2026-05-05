import { motion } from 'motion/react';

const activities = [
  {
    id: 1,
    title: '2025 台灣化學工程學會年會',
    date: '2025-11',
    description: '實驗室成員赴年會進行海報與口頭發表，展現優異研究成果。',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: '畢業生撥穗與歡送會',
    date: '2025-06',
    description: '恭喜實驗室今年畢業的碩士與專題生，祝福鵬程萬里！',
    img: 'https://images.unsplash.com/photo-1523580456209-ef3defce02d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: '生醫感測國際研討會 (Biosensors Conference)',
    date: '2024-09',
    description: '參與國際學術交流，掌握最新生醫感測技術脈動。',
    img: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: '實驗室迎新聚餐',
    date: '2024-08',
    description: '歡迎新成員加入 NMD Lab 大家庭。',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: '歲末聖誕交換禮物',
    date: '2023-12',
    description: '辛勤研究之餘，大家齊聚一堂歡度佳節。',
    img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: '校內產學媒合交流會',
    date: '2023-05',
    description: '展示實驗室技術原型，與業界進行技術交流與產學洽談。',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Activities() {
  return (
    <div className="bg-silver-50 py-12 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-brand-900 mb-4"
          >
            活動紀錄 (Gallery & Activities)
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-700 text-lg"
          >
            回顧實驗室的學術參與、日常點滴與歡樂時光。我們相信平衡的實驗室生活能激發更多創意。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((act, idx) => (
            <motion.div 
              key={act.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-silver-200 mb-4 shadow-sm border border-silver-100">
                <img 
                  src={act.img} 
                  alt={act.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">{act.description}</p>
                </div>
              </div>
              <div className="px-2">
                <p className="text-accent-600 font-bold text-sm tracking-widest mb-1">{act.date}</p>
                <h3 className="text-lg font-bold text-brand-900 group-hover:text-accent-600 transition-colors leading-snug">{act.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
