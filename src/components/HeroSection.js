import React from 'react';
import { Newspaper, ShoppingBag, Play, Code2, Terminal } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen bg-slate-950 text-white relative flex flex-col justify-between items-center pt-24 pb-12 px-6 overflow-hidden select-none">
      
      {/* Orqa fon nur effekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 1. Ulkan Orqa Sarlavha (HI, I'M SHAHRIZODA) */}
      <div className="w-full text-center relative z-0 mt-4">
        <h1 className="text-5xl sm:text-8xl md:text-9xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-slate-200 via-slate-400 to-slate-800 uppercase drop-shadow-2xl opacity-90 leading-none">
          HI, I'M SHAHRIZODA
        </h1>
      </div>

      {/* 2. Markaziy Qism: Chap Matn, Markazdagi 3D Qiz Bola, va O'ngdagi Tugma */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 relative z-10 my-auto">
        
        {/* Chap tomon: Tanishuv va ma'lumot */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 shadow-2xl max-w-sm">
            <p className="text-sm font-semibold tracking-wide text-slate-300 uppercase leading-relaxed">
              A young, passionate front-end developer crafting exceptional digital experiences. 11 years old. Creator of YouTube clones, News apps, and interactive E-commerce products. 🚀
            </p>
          </div>
        </div>

        {/* Markaz: 3D Qiz Bola Avatar va Suzuvchi Ikonkalar */}
        <div className="lg:col-span-4 flex justify-center relative">
          
          {/* Avatar orqasidagi neon halqa */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>

          {/* 3D Qiz Bola Avatari (Rasm orqali) */}
          <div className="relative z-10 w-64 sm:w-80 hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_35px_rgba(6,182,212,0.25)]">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
              alt="Shahrizoda 3D Developer Avatar"
              className="w-full h-80 sm:h-96 object-cover rounded-3xl border-2 border-cyan-500/30 shadow-2xl"
            />
          </div>

          {/* Suzuvchi Ikonka 1: News App */}
          <div className="absolute top-4 left-0 sm:-left-6 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md animate-bounce duration-[3000ms] flex items-center gap-2">
            <Newspaper className="text-cyan-400" size={22} />
            <span className="text-xs font-bold text-slate-200">News App</span>
          </div>

          {/* Suzuvchi Ikonka 2: YouTube Clone */}
          <div className="absolute bottom-6 left-2 sm:-left-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md animate-pulse duration-[2000ms] flex items-center gap-2">
            <Play className="text-red-500 fill-red-500" size={20} />
            <span className="text-xs font-bold text-slate-200">YouTube</span>
          </div>

          {/* Suzuvchi Ikonka 3: Product App */}
          <div className="absolute top-10 right-0 sm:-right-6 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md animate-bounce duration-[4000ms] flex items-center gap-2">
            <ShoppingBag className="text-purple-400" size={22} />
            <span className="text-xs font-bold text-slate-200">Products</span>
          </div>

          {/* Suzuvchi Ikonka 4: React / Code */}
          <div className="absolute bottom-10 right-2 sm:-right-4 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md animate-pulse duration-[2500ms]">
            <Code2 className="text-cyan-400" size={24} />
          </div>
        </div>

        {/* O'ng tomon: Neon "CONTACT ME" tugmasi */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <a
            href="#contact"
            className="group relative px-10 py-4 rounded-full bg-slate-950 border-2 border-cyan-400 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:border-purple-400"
          >
            <span className="relative z-10 group-hover:text-cyan-300 transition-colors">
              Contact Me
            </span>
          </a>
        </div>

      </div>

      {/* 3. Pastki Navigatsiya Tugmalari */}
      <div className="w-full max-w-xl flex items-center justify-center gap-6 text-xs tracking-widest font-bold uppercase text-slate-400 z-10 pt-6">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <span className="text-slate-700">•</span>
        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
        <span className="text-slate-700">•</span>
        <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
        <span className="text-slate-700">•</span>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>

    </section>
  );
}