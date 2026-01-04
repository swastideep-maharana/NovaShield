"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Shield, Zap, Lock, Globe, MousePointer2 } from "lucide-react";
import { MouseEvent, useRef } from "react";

// --- Components for Inner Card Visuals ---
const PulseLine = () => (
    <div className="absolute inset-x-0 bottom-0 h-16 opacity-50 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
            <motion.path 
                d="M0 64 L20 60 L40 64 L60 40 L80 64 L100 64 L120 20 L140 64 L200 64"
                fill="none"
                stroke="url(#pulse-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <defs>
                <linearGradient id="pulse-gradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

const ScanningGrid = () => (
    <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <motion.div 
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

// --- 3D Card Component ---
const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(yPct * -10); // Tilt intensity
        y.set(xPct * 10);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d", transform }}
            className="relative group h-full"
        >
            <div className="glass-card rounded-3xl p-8 h-full flex flex-col relative overflow-hidden transition-all duration-300 group-hover:bg-white/[0.03]">
                
                {/* Visuals based on ID */}
                {index === 0 && <PulseLine />}
                {index === 2 && <ScanningGrid />}

                {/* Content */}
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 relative z-10">
                    <feature.icon className="w-8 h-8 text-zinc-300 group-hover:text-primary transition-colors" />
                </div>

                <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-zinc-400 leading-relaxed font-light">{feature.description}</p>
                </div>

                {/* Hover Gradient Bloom */}
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </motion.div>
    );
}

const features = [
  {
    icon: Zap,
    title: "10ms Latency",
    description: "Our edge network processes requests faster than the blink of an eye. Zero bottlenecks.",
  },
  {
    icon: Shield,
    title: "AI Sentinel",
    description: "Heuristic models that adapt to new attack vectors in real-time, learning from every blocked threat.",
  },
  {
    icon: Globe,
    title: "Global Mesh",
    description: "Distributed filtering across 140+ data centers ensures your users are always close to the shield.",
  },
  {
    icon: Lock,
    title: "Zero Knowledge",
    description: "We inspect headers, not payloads. Your customer data remains encrypted and private.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-40 px-6 w-full bg-transparent overflow-hidden perspective-1000">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-end">
            <div>
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6"
                >
                    Built for <br/> <span className="text-gradient-cosmic">Performance.</span>
                </motion.h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
                Traditional firewalls slow you down. NovaShield accelerates your secure traffic while obliterating threats instantly.
            </p>
        </div>

        {/* 3D Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
            ))}
        </div>

      </div>
    </section>
  );
}
