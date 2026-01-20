import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
      

        <div className="flex gap-6 mb-6 md:mb-0">
            <a href="https://github.com/Logi257" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/logeshkp" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all">
                <Linkedin size={20} />
            </a>
           
        </div>
      </div>
      <div className="text-center mt-12 pt-8 border-t border-slate-800/50">
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            © 2026 Created with <Heart size={14} className="text-red-500 fill-red-500" /> by Logesh 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
