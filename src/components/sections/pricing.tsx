"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: { monthly: "$0", annual: "$0" },
    description: "Essential protection for personal projects.",
    features: ["1 Project", "Basic Firewall", "Community Support", "Email Alerts"],
    missing: ["AI Threat Detection", "Custom Rules", "Dedicated Support"]
  },
  {
    name: "Pro",
    price: { monthly: "$49", annual: "$39" },
    scale: 1.05,
    highlight: true,
    description: "Advanced defense for growing businesses.",
    features: ["10 Projects", "AI Threat Detection", "Priority Support", "Real-time Analytics", "Custom Rules", "API Access"],
    missing: ["Dedicated Hardware", "SLA Guarantee"]
  },
  {
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    description: "Tailored security for large-scale infrastructure.",
    features: ["Unlimited Projects", "Dedicated Hardware", "24/7 Phone Support", "Audit Logs", "SLA Guarantee", "On-premise Option"],
    missing: []
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-32 px-6 relative bg-transparent">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-zinc-400 text-lg mb-8">Choose the perfect shield for your needs.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
              <span className={cn("text-sm font-medium transition-colors", !annual ? "text-white" : "text-zinc-500")}>Monthly</span>
              <button 
                onClick={() => setAnnual(!annual)}
                className="w-14 h-8 rounded-full bg-white/10 border border-white/5 p-1 relative transition-colors hover:bg-white/20"
              >
                  <motion.div 
                    animate={{ x: annual ? 24 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-6 h-6 rounded-full bg-white shadow-lg" 
                  />
              </button>
              <span className={cn("text-sm font-medium transition-colors flex items-center gap-2", annual ? "text-white" : "text-zinc-500")}>
                  Yearly
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/20">SAVE 20%</span>
              </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start font-sans">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                  "relative p-8 rounded-3xl border flex flex-col transition-all duration-300 backdrop-blur-md",
                  plan.highlight 
                    ? "bg-primary/10 border-primary/50 shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)] z-10 scale-105" 
                    : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
              )}
            >
              {plan.highlight && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20">
                     Most Popular
                 </div>
              )}
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-bold text-white">
                        {annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== "Custom" && <span className="text-zinc-500">/mo</span>}
                </div>
                <p className="text-zinc-400 text-sm mb-8 h-10">{plan.description}</p>
                <div className="w-full h-px bg-white/10 mb-8" />
                
                <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                            <div className={cn("p-0.5 rounded-full", plan.highlight ? "bg-primary text-white" : "bg-white/10 text-zinc-400")}>
                                <Check className="w-3 h-3" />
                            </div>
                            {feature}
                        </li>
                    ))}
                    {plan.missing?.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-zinc-600 text-sm">
                            <div className="p-0.5 rounded-full bg-transparent text-zinc-700">
                                <X className="w-3 h-3" />
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>
              </div>

              <button
                className={cn(
                    "w-full py-4 rounded-xl font-bold transition-all mt-auto",
                    plan.highlight
                      ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/5"
                )}
              >
                {plan.name === "Enterprise" ? "Request Demo" : "Get Early Access"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
