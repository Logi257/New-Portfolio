import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Concern Infotech Pvt. Ltd, Chennai",
      period: "2025 - Present",
      description:
        "Promoted from Frontend Intern to Full-time Frontend Developer after demonstrating strong technical skills, ownership, and consistent performance.",
      achievements: [
        "Designed, customized, and deployed the official Concern Infotech website, improving mobile responsiveness and page performance by ~25%.",
        "Successfully led and completed the frontend development of the Sooriya Diagnostics website, collaborating with designers and backend developers to deliver a production-ready, scalable healthcare platform.",
        "Leveraged AI-assisted workflows to accelerate debugging and boilerplate reduction, cutting development turnaround time by 30%.",
      ],
    },

    
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-white">
          Professional <span className="text-purple-400">Journey</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-slate-700 last:border-0 last:pb-0"
            >
              <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>

              <div className="bg-slate-900 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase size={18} className="text-cyan-400" />
                    {exp.role}
                  </h3>
                  <span className="text-slate-400 text-sm flex items-center gap-2 mt-2 md:mt-0">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                </div>

                <p className="text-purple-400 font-medium mb-4">
                  {exp.company}
                </p>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-400 text-sm flex items-start gap-2"
                    >
                      <span className="text-cyan-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
