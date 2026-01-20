import React, { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CalendarClockIcon,
  PhoneCall,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert("Thanks for your message! This is a demo form.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative is-wavy">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16 text-white">
          Let's{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-8">
            <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in touch
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-cyan-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-white font-medium">
                      <a href="mailto:logeshparamalai@gmail.com">
                        logeshparamalai@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-purple-400">
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Mobile</p>
                    <p className="text-white font-medium">
                      <a href="tel:6385718845">6385718845</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Contact;
