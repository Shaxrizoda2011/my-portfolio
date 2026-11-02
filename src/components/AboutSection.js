import React from 'react';
import { Award, Code2, Heart, Sparkles, Target, Zap } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: 'Frontend Mastery',
      desc: 'Building responsive, fast, and accessible user interfaces using modern React and Tailwind CSS.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
      title: 'Creative UI/UX',
      desc: 'Focusing on clean layouts, smooth micro-interactions, and engaging visual experiences.'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Real-World Projects',
      desc: 'Successfully delivered complex clones like YouTube, E-Commerce platforms, and News applications.'
    }
  ];

  return (
    <section id="about-me" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Get to know more about my journey, passion, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Passionate Creator & Frontend Developer
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Hello! I am Shahrizoda Ergasheva, an 11-year-old passionate frontend developer based in Uzbekistan. I love transforming creative ideas into interactive, functional, and visually striking web applications.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                My portfolio includes building advanced interface clones and web apps such as a full-featured YouTube clone, a dynamic news platform, and an e-commerce product marketplace using React and Tailwind CSS.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                <div>
                  <h4 className="text-3xl font-extrabold text-cyan-400 mb-1">3+</h4>
                  <p className="text-sm text-slate-400">Major Projects Built</p>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-indigo-400 mb-1">100%</h4>
                  <p className="text-sm text-slate-400">Responsive Designs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex items-start gap-5 group"
              >
                <div className="p-4 rounded-2xl bg-slate-800/80 shrink-0 group-group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}