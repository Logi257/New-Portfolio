import React from 'react';
import { BadgeCheck } from 'lucide-react';

const About = () => {
    const skills = [
        "Frontend Architecture",
        "React & Vite Ecosystem",
        "Tailwind CSS Mastery",
        "MERN Stack Integration",
        "AI/LLM Implementation",
        "Performance Optimization"
    ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <div className="relative p-6 bg-slate-800 rounded-2xl border border-slate-700/50">
                        <p className="text-lg text-slate-300 leading-relaxed mb-6">
                            Hi, I'm a <strong className="text-cyan-400">Frontend Developer</strong> and early adopter of <strong className="text-purple-400">Vibe Coding</strong>. 
                            I leverage powerful AI tools to bridge the gap between idea and reality faster than ever before.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            My journey involves mastering the <strong className="text-purple-400">MERN stack</strong> while using tools like Claude and Bolt to accelerate development. 
                            I build real-world, high-performance applications with a focus on modern design and seamless user experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                            <BadgeCheck className="text-cyan-400 mr-3" size={20} />
                            <span className="text-slate-200 font-medium">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
