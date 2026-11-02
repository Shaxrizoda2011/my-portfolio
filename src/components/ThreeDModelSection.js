import React, { useEffect, useRef } from 'react';
import { Box, Sparkles, Layers } from 'lucide-react';

export default function ThreeDModelSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    let angleX = 0;
    let angleY = 0;

    // 3D Kub va Texnologiya ramzlari nuqtalari
    const nodes = [
      { x: -100, y: -100, z: -100, label: 'React' },
      { x: 100, y: -100, z: -100, label: 'Tailwind' },
      { x: 100, y: 100, z: -100, label: 'JS' },
      { x: -100, y: 100, z: -100, label: 'HTML' },
      { x: -100, y: -100, z: 100, label: 'CSS' },
      { x: 100, y: -100, z: 100, label: 'Git' },
      { x: 100, y: 100, z: 100, label: 'Vercel' },
      { x: -100, y: 100, z: 100, label: 'API' },
    ];

    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    const project = (x, y, z) => {
      const radX = (angleX * Math.PI) / 180;
      const radY = (angleY * Math.PI) / 180;

      // Y o'qi bo'yicha aylantirish
      let x1 = x * Math.cos(radY) + z * Math.sin(radY);
      let z1 = -x * Math.sin(radY) + z * Math.cos(radY);

      // X o'qi bo'yicha aylantirish
      let y2 = y * Math.cos(radX) - z1 * Math.sin(radX);
      let z2 = y * Math.sin(radX) + z1 * Math.cos(radX);

      const scale = 300 / (300 + z2);
      const xProj = x1 * scale + width / 2;
      const yProj = y2 * scale + height / 2;

      return { x: xProj, y: yProj, scale, z: z2 };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Doimiy 3D aylanish harakati
      angleX += 0.4;
      angleY += 0.6;

      const projectedNodes = nodes.map((node) => ({
        ...project(node.x, node.y, node.z),
        label: node.label,
      }));

      // Chiziqlarni chizish (Cyber Grid / Wireframe)
      ctx.lineWidth = 2;
      edges.forEach(([start, end]) => {
        const p1 = projectedNodes[start];
        const p2 = projectedNodes[end];

        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.8)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.8)');

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Nuqtalar va Texnologiya matnlarini chizish
      projectedNodes.forEach((p) => {
        const radius = Math.max(4, 6 * p.scale);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#22d3ee';
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 15;
        ctx.fill();

        ctx.font = 'bold 12px sans-serif';
        ctx.fillStyle = '#f8fafc';
        ctx.fillText(p.label, p.x + 10, p.y + 4);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="3d-model" className="py-20 px-6 bg-slate-950 relative overflow-hidden border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-6">
            <Sparkles size={16} className="text-cyan-400 animate-spin" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">3D Interactive Tech Cube</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Interactive <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">3D Tech Structure</span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed mb-6">
            This interactive 3D rotating structure represents the connected ecosystem of my frontend development stack — including React, JavaScript, Tailwind CSS, and web performance tools.
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-cyan-400">
            <span className="flex items-center gap-2"><Box size={16} /> Real-time 3D Render</span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-2"><Layers size={16} /> Canvas Animation</span>
          </div>
        </div>

        {/* 3D Aylanadigan Maket Joyi */}
        <div className="lg:col-span-7 flex justify-center items-center">
          <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden flex items-center justify-center group hover:border-cyan-500/40 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 pointer-events-none"></div>
            <canvas ref={canvasRef} className="w-full h-full relative z-10" />
          </div>
        </div>

      </div>
    </section>
  );
}