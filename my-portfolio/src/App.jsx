import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import VibeCoding from './components/sections/VibeCoding';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';

import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VibeCoding />
        <Skills />
        <Projects />
        <Experience />
        <Education />

        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
