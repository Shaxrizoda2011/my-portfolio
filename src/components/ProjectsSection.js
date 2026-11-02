import React from 'react';
import { ExternalLink, Globe, Play, Newspaper, ShoppingBag, LayoutGrid } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'YouTube Clone Application',
      description: 'A fully responsive YouTube clone built with React and Tailwind CSS featuring dynamic video grids, sidebars, custom video modal player, and category filter bars.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'REST API'],
      icon: <Play className="w-6 h-6 text-red-500" />,
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'News Platform Web App',
      description: 'A modern, responsive news aggregator with structured grid layouts, customized category navigation, dynamic news cards, and smooth Tailwind UI animations.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Flexbox/Grid'],
      icon: <Newspaper className="w-6 h-6 text-cyan-400" />,
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'E-Commerce Product Platform',
      description: 'Interactive online market interface featuring dynamic category-based product filtering, real-time search functionality, empty state indicators, and cart management.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'State Management'],
      icon: <ShoppingBag className="w-6 h-6 text-indigo-400" />,
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Interactive Frontend Showcase',
      description: 'A collection of dynamic web interfaces and UI components demonstrating responsive design techniques, modern layouts, and optimized client-side performance.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
      icon: <LayoutGrid className="w-6 h-6 text-purple-400" />,
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Here are some of the key web applications I have conceptualized, designed, and developed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-800/80 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubLink}
                      className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                      aria-label="View Code"
                    >
                      <Globe size={18} />
                    </a>
                    <a
                      href={project.demoLink}
                      className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                {project.tech.map((techItem, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}