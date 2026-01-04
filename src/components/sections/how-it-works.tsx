"use client";

import { motion } from "framer-motion";
import { Link2, Sliders, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect Source",
    description: "Integrate NovaShield with your existing infrastructure via our secure API or DNS configurations.",
  },
  {
    icon: Sliders,
    title: "Configure Policy",
    description: "Define your threat models and security protocols using our drag-and-drop policy editor.",
  },
  {
    icon: PlayCircle,
    title: "Activate Protection",
    description: "Deploy your new security layer instantly across your entire network with a single click.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 px-6 relative bg-transparent overflow-hidden">
        {/* Decorative Line */}
        <div className="absolute left-0 top-32 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent dashed" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400">Secure your digital ecosystem in three simple steps.</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -z-10" />

            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center group"
                >
                    <div className="relative mb-8">
                        <div className="w-24 h-24 rounded-full bg-background border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                            <step.icon className="w-10 h-10 text-slate-300 group-hover:text-primary transition-colors" />
                        </div>
                        {/* Pulse effect behind circle */}
                        <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
                        
                        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shadow-lg z-20">
                            {index + 1}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-xs">{step.description}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
