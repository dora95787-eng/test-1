import { Beaker, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-900 text-silver-200 py-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-brand-800 text-accent-400 p-2 rounded-lg">
                <Beaker className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">奈米材料與元件實驗室</h3>
                <p className="text-xs text-brand-400">NMD Lab, CYCU</p>
              </div>
            </div>
            <p className="text-sm text-silver-400 font-light leading-relaxed">
              致力於前瞻性奈米材料合成、光電元件開發以及生醫感測器之研究。推進學術前沿，並與產業界及臨床單位緊密合作。
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">聯絡我們</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-sm text-silver-300">
                  桃園市中壢區中北路200號<br/>
                  中原大學 化學工程學系
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="text-sm text-silver-300">+886-3-265-xxxx</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-500 shrink-0" />
                <a href="mailto:contact@nmdlab.cycu.edu.tw" className="text-sm text-silver-300 hover:text-white transition-colors">
                  contact@nmdlab.cycu.edu.tw
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white tracking-wider">相關連結</h3>
            <ul className="space-y-2 text-sm text-silver-300">
              <li><a href="#" className="hover:text-accent-400 transition-colors">中原大學 (CYCU)</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">化學工程學系</a></li>
              <li><a href="#" className="hover:text-accent-400 transition-colors">嘉義基督教醫院 (CYCH)</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-brand-800 text-center text-sm text-silver-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} NMD Lab, Chung Yuan Christian University. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Advancing Nanotechnology</p>
        </div>
      </div>
    </footer>
  );
}
