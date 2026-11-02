import React, { useState } from 'react';
import { User, Mail, Lock, UserPlus, CheckCircle2 } from 'lucide-react';

export default function RegisterSection() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      setFormData({ name: '', email: '', password: '' });
    }, 4000);
  };

  return (
    <section id="register" className="py-24 px-6 bg-slate-950 relative overflow-hidden flex items-center justify-center">
      {/* Orqa fon porlashi */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Create an <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Account</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Join and get updates on my latest frontend projects and applications.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl relative">
          {isRegistered ? (
            <div className="py-8 flex flex-col items-center justify-center text-center animate-fadeIn">
              <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 mb-4">
                <CheckCircle2 size={48} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Welcome, {formData.name}!</h4>
              <p className="text-slate-400 text-sm">You have successfully registered on Shahrizoda's portfolio platform.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Sign Up
                <UserPlus size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}