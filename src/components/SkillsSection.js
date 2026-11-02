import React from 'react';
import { Code, Layout, Cpu, Globe, Terminal, Layers } from 'lucide-react';

export default function SkillsSection() {
  const skills = [
    {
      name: 'React JS',
      level: 'Advanced',
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      desc: 'Building modern, reusable component-based UI architectures',
    },
    {
      name: 'Tailwind CSS',
      level: 'Expert',
      icon: <Layout className="w-8 h-8 text-cyan-400" />,
      desc: 'Creating highly responsive, custom styled web interfaces',
    },
    {
      name: 'JavaScript (ES6+)',
      level: 'Advanced',
      icon: <Code className="w-8 h-8 text-indigo-400" />,
      desc: 'Core programming, async logic, and dynamic DOM manipulation',
    },
    {
      name: 'HTML5 & CSS3',
      level: 'Expert',
      icon: <Globe className="w-8 h-8 text-indigo-400" />,
      desc: 'Semantic web structure, accessibility, and modern animations',
    },
    {
      name: 'Git & GitHub',
      level: 'Intermediate',
      icon: <Terminal className="w-8 h-8 text-purple-400" />,
      desc: 'Version control, code hosting, and project management',
    },
    {
      name: 'Vercel Deployment',
      level: 'Advanced',
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      desc: 'Deploying local developments directly to production environments',
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            My <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Tech Stack</span> & Skills
          </h2>
          <p className="text-slate-400 text-lg">
            Technologies and tools I specialize in to build high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
            >
              <div className="p-4 rounded-2xl bg-slate-800/60 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {skill.level}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}