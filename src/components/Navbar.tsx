import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Beaker } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: '首頁', path: '/' },
  { name: '指導教授', path: '/professor' },
  { name: '團隊成員', path: '/team' },
  { name: '研究領域', path: '/research' },
  { name: '發表論文', path: '/publications' },
  { name: '實驗設備', path: '/instruments' },
  { name: '活動紀錄', path: '/activities' },
  { name: '嘉基合作 (CYCH)', path: '/cych' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-silver-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="bg-brand-900 text-white p-2 rounded-lg group-hover:bg-accent-600 transition-colors">
              <Beaker className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-none text-brand-900 group-hover:text-accent-600 transition-colors">奈米材料與元件實驗室</h1>
              <p className="text-xs text-brand-700 font-medium tracking-wider">CYCU ChemEng NMD Lab</p>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-50 text-accent-600'
                      : 'text-brand-700 hover:bg-silver-100 hover:text-brand-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-700 hover:text-brand-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-silver-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-accent-50 text-accent-600'
                        : 'text-brand-800 hover:bg-silver-100 hover:text-brand-900'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
