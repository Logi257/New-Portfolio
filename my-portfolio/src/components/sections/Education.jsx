import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Alagappa University",
      period: "2024 - 2026",
      description:
        "Major in Computer Application with focus on Frontend Development",
    },
    {
      degree: "Full Stack Development",
      institution: "NxtWave",
      period: "May 2024 - Feb 2025",
      description: "Full Stack Development with MERN Specialization",
    },

    {
      degree: "Bachelor of Mathematics",
      institution: "V.O.Chidambaram College",
      period: "2020 - 2023",
      description: "Specialized in Mathematics and Analytics",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-white">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-l-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pl-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-slate-400 text-sm font-medium">
                      {item.institution}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm mt-2 md:mt-0 pl-14 md:pl-0">
                  <Calendar size={14} />
                  {item.period}
                </div>
              </div>

              <div className="pl-4 md:pl-16">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
