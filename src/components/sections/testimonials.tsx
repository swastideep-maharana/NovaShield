"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import NextImage from "next/image";

const testimonials = [
  {
    quote: "NovaShield has completely transformed our security posture. The AI detection is terrifyingly accurate.",
    author: "Alex Rivera",
    role: "CTO, TechFlow",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    quote: "Setup was instant. We saw a 99% reduction in bot traffic within the first hour of deployment.",
    author: "Sarah Chen",
    role: "DevOps Lead, Orbit",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    quote: "The analytics dashboard is a work of art. Finally, security metrics that stakeholders can actually understand.",
    author: "James Wilson",
    role: "VP Engineering, Nexus",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
];

const companies = [
  "Vortex", "Chronos", "Nebula", "Oasis", "Apex", "Titan"
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-transparent relative overflow-hidden">


      <div className="container mx-auto max-w-7xl">
        
        {/* Social Proof Strip */}
        <div className="mb-24 text-center">
            <p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by security teams at</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {companies.map(company => (
                    <div key={company} className="text-xl font-bold text-white/40 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-white/20" />
                        {company}
                    </div>
                ))}
            </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Don't take our word for it</h2>
          <p className="text-zinc-400 text-lg">Join thousands of companies securing their future with NovaShield.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 relative hover:border-white/10 hover:bg-zinc-900/50 transition-all duration-300 group"
            >
               <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 rotate-180 group-hover:text-white/10 transition-colors" />

                <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                </div>
              <p className="text-zinc-300 text-lg mb-8 leading-relaxed relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <NextImage 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    width={48} 
                    height={48}
                    className="rounded-full border border-white/10 group-hover:border-white/20 transition-colors" 
                />
                <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-zinc-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
