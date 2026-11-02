import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${
        scrolled 
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg shadow-cyan-500/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-cyan-500 to-indigo-500 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform duration-300">
            <Code2 size={24} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Shahrizoda.dev
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-cyan-400 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-6 px-6 flex flex-col gap-4 md:hidden">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-cyan-400 text-lg font-medium transition-colors py-2 border-b border-slate-800/50"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium shadow-lg shadow-cyan-500/20 mt-2"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}