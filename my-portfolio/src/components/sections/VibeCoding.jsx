import React from 'react';
import { Zap, Cpu, Sparkles, FastForward } from 'lucide-react';

const VibeCoding = () => {
  const tools = [
    { name: "ChatGPT", role: "Architect", color: "text-green-400" },
    { name: "Claude", role: "Co-Pilot", color: "text-orange-400" },
    { name: "Bolt", role: "Rapid Proto", color: "text-blue-400" },
    { name: "Lovable", role: "Design Gen", color: "text-pink-400" }
  ];

  return (
    <section id="vibecoding" className="py-20 bg-slate-900 border-t border-slate-800/50 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-500/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-cyan-400 text-sm font-medium mb-4 animate-fadeIn">
            <Zap size={14} className="fill-cyan-400" /> Vibe Coding
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Building at the <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Speed of Thought</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I don't just code; I orchestrate AI to ship products 10x faster. 
            From idea to deployment in hours, not weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
                <div key={index} className="group p-6 bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                        <span className={`font-bold text-xl ${tool.color}`}>{tool.name}</span>
                        <Cpu className="text-slate-600 group-hover:text-white transition-colors" size={20} />
                    </div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                        {tool.role}
                    </p>
                </div>
            ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/50 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-white mb-1">10x</span>
                    <span className="text-slate-500 text-sm uppercase tracking-wide">Faster Dev</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-slate-700"></div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-white mb-1">0</span>
                    <span className="text-slate-500 text-sm uppercase tracking-wide">Syntax Errors</span>
                </div>
                <div className="hidden md:block w-px h-12 bg-slate-700"></div>
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-bold text-white mb-1">100%</span>
                    <span className="text-slate-500 text-sm uppercase tracking-wide">Focus on Logic</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VibeCoding;
