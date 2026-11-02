import React from 'react';
import { Code2, Globe, Send, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/60">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Code2 size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Shahrizoda.dev
              </span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm">
              Building modern, highly performant, and dynamic web interfaces with React and Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Globe size={18} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
            >
              <Send size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Shahrizoda Ergasheva. Built with</span>
            <Heart size={14} className="text-cyan-400 fill-cyan-400" />
            <span>using React & Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}