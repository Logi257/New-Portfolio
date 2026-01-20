import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
            content: "Working with this developer was an absolute pleasure. They transformed our vision into a stunning reality with exceptional attention to detail.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Product Manager, InnovateLab",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
            content: "The technical expertise and problem-solving skills shown throughout the project were impressive. Delivery was on time and exceeded expectations.",
            rating: 5
        },
        {
            name: "Emily Davis",
            role: "Founder, CreativeStudio",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80",
            content: "Not only is the code clean and efficient, but the design sense is also top-notch. Truly a full-package developer who understands user experience.",
            rating: 5
        }
    ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-16">
          Client <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Testimonials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg group relative">
                    <div className="absolute top-8 right-8 text-cyan-500/10 group-hover:text-cyan-500/20 transition-colors">
                        <Quote size={40} fill="currentColor" />
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/30">
                           <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-sm text-cyan-400">{testimonial.role}</p>
                        </div>
                    </div>

                    <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                    </div>

                    <p className="text-slate-400 leading-relaxed relative z-10">
                        "{testimonial.content}"
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
