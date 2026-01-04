"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center text-center overflow-hidden">
      


      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="p-1 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent w-fit mx-auto mb-8"
        >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">Join the revolution</span>
            </div>
        </motion.div>
        
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8"
        >
            Ready to secure <br/> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-primary animate-gradient bg-[length:200%_auto]">future?</span>
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto"
        >
            Secure your digital infrastructure in minutes. Built for modern teams that prioritize speed and security.
        </motion.p>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <button className="relative group px-12 py-6 rounded-full bg-white text-black font-bold text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.5)]">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                 <span className="relative flex items-center gap-3">
                    Launch Securely
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                 </span>
            </button>
        </motion.div>
      </div>
    </section>
  );
}
