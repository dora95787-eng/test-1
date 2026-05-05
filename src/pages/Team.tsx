import { motion } from 'motion/react';
import { User } from 'lucide-react';

const teamCategories = [
  {
    title: '博士後研究員 (Postdoctoral Researchers)',
    members: [
      { name: 'Dr. 林冠宇', role: '生醫感測器整合開發', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400' }
    ]
  },
  {
    title: '博士生 (Ph.D. Students)',
    members: [
      { name: '陳俊宏', role: '鈣鈦礦太陽能電池研究', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400' },
      { name: '王雅婷', role: '表面增強拉曼光譜 (SERS) 應用', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400' }
    ]
  },
  {
    title: '碩士生 (Master Students)',
    members: [
      { name: '李明傑', role: '碩二 / 金屬奈米粒子合成', img: '' },
      { name: '張家瑋', role: '碩二 / 電化學感測器', img: '' },
      { name: '林子晴', role: '碩一 / 氧化鋅奈米線陣列', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400' },
      { name: '黃信堯', role: '碩一 / 綠色化學合成', img: '' }
    ]
  },
  {
    title: '專題生 (Undergraduate Students)',
    members: [
      { name: '吳伯倫', role: '化四', img: '' },
      { name: '蔡孟璇', role: '化三', img: '' },
      { name: '趙宇軒', role: '化三', img: '' }
    ]
  },
  {
    title: '歷屆校友 (Alumni)',
    members: [
      { name: 'Dr. 劉建良', role: '2023 畢 / 現職：台積電', img: '' },
      { name: '張書睿', role: '2024 碩士畢 / 現職：群創光電', img: '' },
      { name: '何佳穎', role: '2024 碩士畢 / 現職：工研院', img: '' }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export default function Team() {
  return (
    <div className="bg-silver-50 py-12 lg:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">團隊成員 (Our Team)</h1>
          <p className="text-brand-700">集合多元背景的專業人才，在開放且充滿活力的學術氛圍中共同探索科學邊界。</p>
        </div>

        <div className="space-y-16">
          {teamCategories.map((category, catIdx) => (
            <motion.section 
              key={catIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              <h2 className="text-2xl font-bold text-brand-900 mb-8 border-b-2 border-silver-200 pb-2 inline-block">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.members.map((member, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-4 shadow-sm border border-silver-100 flex flex-col items-center text-center group transition-all"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-silver-100 mb-4 border border-silver-200 flex items-center justify-center">
                      {member.img ? (
                        <img 
                          src={member.img} 
                          alt={member.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      ) : (
                        <User className="w-10 h-10 text-silver-300" />
                      )}
                    </div>
                    <h3 className="font-bold text-brand-900 text-lg mb-1">{member.name}</h3>
                    <p className="text-xs text-brand-500 font-medium leading-relaxed">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

      </div>
    </div>
  );
}
