import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Professor() {
  return (
    <div className="bg-silver-50 py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-sm border border-silver-200 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Photo Column */}
            <div className="md:col-span-5 bg-silver-100 flex items-center justify-center p-8 lg:p-12">
              <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden shadow-inner bg-silver-200">
                {/* Professor Photo Placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                  alt="教授照片 (Portrait)" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Info Column */}
            <div className="md:col-span-7 p-8 md:p-12 lg:py-16 flex flex-col justify-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-brand-900 mb-2">某某某 教授</h1>
                <p className="text-lg text-accent-600 font-medium mb-6">計畫主持人 (Principal Investigator)</p>
                <p className="text-brand-700 leading-relaxed font-light mb-8">
                  專精於奈米材料的合成與表面改質，長期投入奈米科技於儲能、生醫感測及環境工程之跨領域應用研究。致力於引領學生探索未知，培養具國際觀與獨立思考能力的優秀研究人才。
                </p>

                <div className="space-y-4 text-sm text-brand-800">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-silver-100 flex items-center justify-center text-accent-600 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>工學館 4F, 401 辦公室 (Office 401, Engineering Building)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-silver-100 flex items-center justify-center text-accent-600 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+886-3-265-xxxx</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-silver-100 flex items-center justify-center text-accent-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:professor@cycu.edu.tw" className="hover:text-accent-600 transition-colors">
                      professor@cycu.edu.tw
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

        {/* Details Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-silver-100 pb-4">
              <GraduationCap className="w-6 h-6 text-accent-500" />
              <h2 className="text-xl font-bold text-brand-900">學歷 (Education)</h2>
            </div>
            <ul className="space-y-4">
              <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent-400 before:rounded-full">
                <p className="font-bold text-brand-900">博士</p>
                <p className="text-sm text-brand-700">國立台灣大學 化學工程學系</p>
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:silver-300 before:rounded-full">
                <p className="font-bold text-brand-900">碩士</p>
                <p className="text-sm text-brand-700">國立成功大學 材料科學工程學系</p>
              </li>
              <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:silver-300 before:rounded-full">
                <p className="font-bold text-brand-900">學士</p>
                <p className="text-sm text-brand-700">中原大學 化學工程學系</p>
              </li>
            </ul>
          </motion.div>

          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-silver-100 pb-4">
              <BookOpen className="w-6 h-6 text-accent-500" />
              <h2 className="text-xl font-bold text-brand-900">經歷 (Experience)</h2>
            </div>
            <ul className="space-y-4">
              <li className="relative pl-4 border-l-2 border-silver-200 pb-2">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent-500" />
                <p className="text-sm font-bold text-accent-600">2020 - 至今</p>
                <p className="font-bold text-brand-900">教授</p>
                <p className="text-sm text-brand-700">中原大學 化學工程學系</p>
              </li>
              <li className="relative pl-4 border-l-2 border-silver-200 pb-2">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-silver-300" />
                <p className="text-sm font-bold text-accent-600">2016 - 2020</p>
                <p className="font-bold text-brand-900">副教授</p>
                <p className="text-sm text-brand-700">中原大學 化學工程學系</p>
              </li>
              <li className="relative pl-4 border-l-2 border-silver-200">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-silver-300" />
                <p className="text-sm font-bold text-accent-600">2014 - 2016</p>
                <p className="font-bold text-brand-900">博士後研究員</p>
                <p className="text-sm text-brand-700">中央研究院</p>
              </li>
            </ul>
          </motion.div>

          {/* Honors */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-silver-100 pb-4">
              <Award className="w-6 h-6 text-accent-500" />
              <h2 className="text-xl font-bold text-brand-900">榮譽 (Honors)</h2>
            </div>
            <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                 <div>
                   <p className="font-medium text-brand-900 text-sm">中原大學 研究傑出獎</p>
                   <p className="text-xs text-brand-500 mt-0.5">2023</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                 <div>
                   <p className="font-medium text-brand-900 text-sm">台灣化學工程學會 優秀青年學者獎</p>
                   <p className="text-xs text-brand-500 mt-0.5">2021</p>
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0" />
                 <div>
                   <p className="font-medium text-brand-900 text-sm">科技部 年輕學者育成計畫(哥倫布計畫)</p>
                   <p className="text-xs text-brand-500 mt-0.5">2018</p>
                 </div>
               </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-silver-100">
               <a href="#" className="inline-flex items-center text-sm font-medium text-accent-600 hover:text-brand-900 transition-colors">
                 完整 CV 下載 <ExternalLink className="w-4 h-4 ml-1.5" />
               </a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
