import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, User, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind or want to collaborate? Feel free to send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email</p>
                    <a href="mailto:shahrizoda@example.com" className="text-slate-200 font-medium hover:text-cyan-400 transition-colors">
                      shahrizoda@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</p>
                    <p className="text-slate-200 font-medium">
                      Uzbekistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent border border-slate-800">
              <h4 className="text-xl font-bold text-white mb-2">Let's build together!</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Open for collaboration on exciting web applications, interactive interfaces, and creative frontend concepts.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 relative">
              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="p-4 rounded-full bg-cyan-500/10 text-cyan-400 mb-4">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-400">Thank you for reaching out. I will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Your Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Your Email</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-slate-500" />
                      <textarea
                        rows="4"
                        required
                        placeholder="Write your message here..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}