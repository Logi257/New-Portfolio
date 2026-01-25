import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Food Ordering & Restaurant Discovery Platform",
      description:
        "A fully functional food ordering app clone with live API integration, finding nearby restaurants, menu browsing, and cart functionality.",
      tech: ["React", "Redux Toolkit", "Tailwind Code", "Live API"],
      demoLink: "https://swiggy-frontend-tau-wheat.vercel.app/",
      repoLink: "https://github.com/Logi257/swiggy-frontend",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkn1Wm4EAoh80OMWq3FaD1W5gZa3VdpXCVbQ&s",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Video Streaming Platform with Authentication",
      description:
        "Developed a Netflix-style frontend application with Firebase Authentication (Login / Signup) and protected routes",
      tech: ["React", "Firebase", "Tailwind CSS", "TMDB API"],
      demoLink: "https://net-filx.vercel.app/",
      repoLink: "https://github.com/Logi257/NetFilx-Gpt",
      image:
        "data:image/jpeg;base64,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",
      color: "from-red-600 to-red-700",
    },
    {
      title: "Food Delivery App With Admin Panel",
      description:
        "A full-stack Food Delivery platform where a users can order the food and admin can manage the orders.",
      tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      demoLink: "https://tomato-food-del-frontend-uxtq.onrender.com/",
      repoLink: "https://github.com/Logi257",
      image:
        "https://img.freepik.com/free-psd/grocery-delivery-service-banner-template_23-2149077518.jpg?t=st=1737896290~exp=1737899890~hmac=9f19425cd0e2d9db95ee905872c706693ce5bdd4575bc1415725d186a5a9bb5b&w=1060",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Music Streaming Web Application",
      description:
        "A full-stack Spotify clone where users can listen to songs, and admins can manage albums and songs.",
      tech: ["MERN Stack", "Tailwind CSS", "Audio API"],
      demoLink: "https://spotify-frontend-zj8f.onrender.com/",
      repoLink: "https://github.com/Logi257",
      image:
        "https://api.stereofox.com/wp-content/uploads/2021/04/The-Best-Spotify-Playlists.png",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Placeholder for project image - Simplified as a gradient block for now */}
              <div
                className="h-48 w-full bg-center bg-cover flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                <h4 className="text-3xl font-bold text-white/20 uppercase tracking-widest">
                  {project.title}
                </h4>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1 bg-slate-900 rounded-full text-slate-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center gap-2 text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    className="flex items-center gap-2 text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
