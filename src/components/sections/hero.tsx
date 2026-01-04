"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Activity, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-transparent selection:bg-primary/30">
      <div className="container mx-auto flex flex-col items-center text-center z-10 relative">
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
            <button className="bg-white/5 backdrop-blur-sm group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 text-white inline-block border border-white/10 hover:border-primary/50 transition-colors">
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-background/50 py-1 px-4">
                    <span className="text-secondary">v4.2</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span>NovaShield Enterprise</span>
                    <ChevronRight className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                </div>
            </button>
        </motion.div>

        {/* Main Headline - Liquid Metal Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-white will-change-transform max-w-4xl"
        >
          One-click protection for<br />
          <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,theme(colors.purple.400),theme(colors.purple.100),theme(colors.pink.300),theme(colors.purple.400))] bg-[length:200%_auto] animate-gradient">
            Modern SaaS & Digital Assets
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mb-12 leading-relaxed font-light will-change-transform"
        >
          Secure, monitor, and manage your digital infrastructure with a single unified platform built for <span className="text-zinc-100 font-medium">startups and growing teams</span>.
        </motion.p>

        {/* CTA Buttons - Premium Polish */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 relative">
             {/* Hand-drawn Arrow Annotation */}
             <div className="absolute -left-[140px] top-1/2 -translate-y-1/2 hidden md:block">
                  <div className="relative">
                      <span className="absolute -top-6 left-0 -rotate-12 text-sm text-zinc-400 font-handwriting whitespace-nowrap opacity-80">
                          Deploy in seconds
                      </span>
                      <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className="text-zinc-600 opacity-60">
                           <path d="M10,20 Q50,5 90,20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                           <path d="M90,20 L80,15 M90,20 L82,25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                  </div>
             </div>

             {/* Primary Button: Shimmering Violet */}
             <button className="relative group px-10 py-5 rounded-full bg-primary text-white font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)]">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                 <div className="relative flex items-center gap-2 text-lg">
                    Get Early Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </div>
             </button>

             {/* Secondary Button: Glass with Border Shine */}
             <button className="group relative px-10 py-5 rounded-full text-zinc-300 font-semibold bg-white/5 border border-white/10 overflow-hidden transition-colors hover:text-white hover:border-white/20">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                 <span className="relative flex items-center gap-2 text-lg">
                    Request Demo
                 </span>
             </button>
          </div>

          {/* New Trust Signals Logo Strip */}
          <div className="w-full flex flex-col items-center gap-8">
              <p className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold">
                  Trusted by early-stage startups & indie founders
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="flex items-center gap-2">
                       <Shield className="w-5 h-5 text-zinc-400" />
                       <span className="text-lg font-bold tracking-tight text-zinc-300">NovaTech</span>
                  </div>
                  <div className="flex items-center gap-2">
                       <Activity className="w-5 h-5 text-zinc-400" />
                       <span className="text-lg font-bold tracking-tight text-zinc-300">AlphaLabs</span>
                  </div>
                  <div className="flex items-center gap-2">
                       <div className="w-5 h-5 rounded-sm bg-zinc-400" />
                       <span className="text-lg font-bold tracking-tight text-zinc-300">Cloudify</span>
                  </div>
                  <div className="flex items-center gap-2">
                       <div className="w-2 h-5 rounded-full bg-zinc-400" />
                       <span className="text-lg font-bold tracking-tight text-zinc-300">SecureX</span>
                  </div>
              </div>
          </div>
        </motion.div>

        {/* Dashboard Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 40 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
           className="mt-20 relative w-full max-w-5xl will-change-transform"
        >
            <div className="relative w-full rounded-xl border border-white/[0.08] bg-[#0f0529]/80 backdrop-blur-xl shadow-2xl overflow-hidden group">
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                
                {/* Header */}
                <div className="h-12 border-b border-white/[0.05] flex items-center justify-between px-6 bg-white/[0.01]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                        <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="col-span-2 space-y-6">
                        {/* Top Analytics Row */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: "Requests/s", value: "842k", color: "text-white" },
                                { label: "Bandwidth", value: "12Gb", color: "text-white" },
                                { label: "Threats", value: "48", color: "text-rose-500" },
                            ].map((stat, i) => (
                                <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
                                    <div className="text-[10px] text-zinc-500 uppercase font-mono mb-1">{stat.label}</div>
                                    <div className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="relative group overflow-hidden rounded-lg bg-white/[0.03] border border-white/[0.05] p-1">
                             {/* Scanning Light Effect */}
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                             
                             <div className="flex items-center gap-4 p-3 relative z-10">
                                 <div className="p-2 bg-primary/10 rounded-md ring-1 ring-primary/20 relative">
                                     <Shield className="w-6 h-6 text-primary" />
                                     <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                                 </div>
                                 <div className="flex-1 min-w-0">
                                     <div className="flex items-center justify-between mb-1">
                                         <div className="text-xs text-zinc-400 font-mono">SYSTEM_STATUS</div>
                                         <div className="text-emerald-400 text-xs font-mono font-bold tracking-wider">ONLINE</div>
                                     </div>
                                     <div className="text-white font-medium text-sm truncate relative">
                                        All systems operational
                                     </div>
                                     
                                     {/* Mini Sparkline */}
                                     <div className="h-6 w-full mt-2 relative overflow-hidden opacity-50">
                                        <svg className="w-full h-full" preserveAspectRatio="none">
                                            <path d="M0,10 L10,10 L20,5 L30,10 L40,8 L50,15 L60,5 L70,12 L80,10 L90,10 L100,2" 
                                                  fill="none" 
                                                  stroke="#10b981" 
                                                  strokeWidth="1.5" 
                                                  vectorEffect="non-scaling-stroke"
                                            />
                                        </svg>
                                     </div>
                                 </div>
                                 <div className="text-right">
                                     <div className="text-primary text-lg font-mono font-bold">99.9%</div>
                                     <div className="text-[10px] text-zinc-600">UPTIME</div>
                                 </div>
                             </div>
                        </div>

                        <div className="h-40 relative border-l border-b border-white/[0.05]">
                             {/* Optimized Faux graph - simplified paths */}
                            <svg className="absolute inset-0 w-full h-full p-2" preserveAspectRatio="none">
                                <path d="M0,100 C150,80 300,120 450,50 S600,40 750,20" stroke="url(#gradient)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#db2777" stopOpacity="0.8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                     </div>
                     
                     <div className="col-span-1 space-y-4">
                         {[
                             { label: "US-EAST", lat: "12ms", w: "w-16", c: "bg-emerald-500" }, 
                             { label: "EU-WEST", lat: "24ms", w: "w-10", c: "bg-emerald-500" }, 
                             { label: "AP-SOUTH", lat: "45ms", w: "w-24", c: "bg-amber-500" }
                         ].map((item, i) => (
                             <div key={i} className="flex items-center justify-between p-3 rounded bg-white/[0.02] border border-transparent hover:border-white/10 transition-colors group">
                                 <div className="flex items-center gap-3">
                                     <Activity className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400" />
                                     <div className="flex flex-col gap-1">
                                         <span className="text-[10px] font-mono text-zinc-500">{item.label}</span>
                                         <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                             <div className={`h-full ${item.w} ${item.c} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />
                                         </div>
                                     </div>
                                 </div>
                                 <div className="text-xs text-zinc-400 font-mono group-hover:text-white transition-colors">{item.lat}</div>
                             </div>
                         ))}
                     </div>
                </div>
            </div>
            
            {/* Subtle Gloss Reflection behind */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[50%] h-[200px] bg-primary/10 blur-[80px] rounded-full opacity-50 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
