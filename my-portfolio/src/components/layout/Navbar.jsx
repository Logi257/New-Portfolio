import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },

    { name: 'Education', href: '#education' },
    // { name: 'Testimonials', href: '#testimonials' },
    // { name: 'Contact', href: '#contact' },

  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-display bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Logesh K P
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1clK4NXR9bEyV69Ztz-l25k3OssFVf0Iv/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 md:hidden flex flex-col items-center py-8 space-y-6 animate-fadeIn">
             {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg text-slate-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
