import React from 'react';
import { ArrowRight, Code, Database, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 mb-6 backdrop-blur-sm">
                <span className="flex w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                <span className="text-slate-300 text-sm">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
                Frontend Developer <br />
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-300%">
                    & Vibe Coder
                </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Building modern web experiences at lightning speed using React, Tailwind, and advanced AI workflows.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a href="#projects" className="group relative px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2">
                    View Projects
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="px-8 py-3 rounded-full border border-slate-700 text-white font-semibold hover:bg-slate-800/50 transition-colors">
                    Contact Me
                </a>
            </div>

            <div className="mt-20 flex justify-center gap-8 text-slate-500 grayscale opacity-70">
               {/* Tech stack icons placeholder or simple text */}
               <div className="flex items-center gap-2">
                   <Code size={20} /> <span>React/Vite</span>
               </div>
               <div className="flex items-center gap-2">
                   <Sparkles size={20} /> <span>Tailwind</span>
               </div>
               <div className="flex items-center gap-2">
                   <Database size={20} /> <span>MERN</span>
               </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
