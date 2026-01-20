import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vite", "Tailwind CSS", "Redux Toolkit", "HTML5", "CSS3", "JavaScript (ES6+)"]
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth"]
    },
    {
      title: "Vibe Stack (AI)",
      skills: ["ChatGPT", "Claude 3.5", "Bolt.new", "Lovable", "Cursor", "v0"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Figma", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-white">
          Technical <span className="text-purple-400">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
                <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
                    <h3 className="text-xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="px-3 py-1 bg-slate-800 rounded-full text-slate-300 text-sm border border-slate-700 group-hover:border-slate-600 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
