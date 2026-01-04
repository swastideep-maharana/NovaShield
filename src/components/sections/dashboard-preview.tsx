"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUpRight, MoreHorizontal, ShieldCheck, Bell, Activity, Globe, Wifi } from "lucide-react";
import { useState, useEffect } from "react";

const initialData = [
  { name: '00:00', threats: 120, secured: 245 },
  { name: '04:00', threats: 150, secured: 352 },
  { name: '08:00', threats: 235, secured: 548 },
  { name: '12:00', threats: 412, secured: 761 },
  { name: '16:00', threats: 318, secured: 655 },
  { name: '20:00', threats: 225, secured: 567 },
  { name: '23:59', threats: 150, secured: 370 },
];

const StatCard = ({ label, value, trend, positive }: { label: string, value: string, trend: string, positive: boolean }) => (
    <div className="bg-zinc-900/50 p-4 rounded-xl border border-white/5 relative overflow-hidden group">
         <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="text-zinc-500 text-xs font-mono mb-1 uppercase tracking-wider">{label}</div>
        <div className="text-2xl font-bold text-white mb-2 font-mono tracking-tight">{value}</div>
        <div className={`text-xs font-medium flex items-center gap-1 ${positive ? 'text-emerald-400' : 'text-rose-400'}`}>
            <ArrowUpRight className="w-3 h-3" />
            {trend}
        </div>
    </div>
);

const IncidentRow = ({ ip, type, location, time }: { ip: string, type: string, location: string, time: string }) => (
    <div className="flex items-center justify-between py-3 border-b border-white/5 text-xs font-mono">
        <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
             <span className="text-zinc-300">{ip}</span>
        </div>
        <span className="text-rose-400">{type}</span>
        <span className="text-zinc-500 hidden sm:block">{location}</span>
        <span className="text-zinc-600">{time}</span>
    </div>
)

export function DashboardPreview() {
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState('traffic');

  // Simulate Live Data
  useEffect(() => {
    const interval = setInterval(() => {
        setData(prev => prev.map(item => ({
            ...item,
            threats: Math.max(10, item.threats + (Math.random() - 0.5) * 50),
            secured: Math.max(100, item.secured + (Math.random() - 0.5) * 80)
        })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="analytics" className="relative py-32 px-6 w-full flex flex-col items-center bg-transparent overflow-hidden">
        
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Live System Status</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                        Complete Visibility. <br />
                        <span className="text-zinc-500">Zero Latency.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        Visualize threats as they happen in milliseconds. Our heuristic engine processes 12M+ requests per second, giving you a panoramic view of your security posture.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                            <div className="p-2 rounded-lg bg-blue-500/10">
                                <Globe className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Global Coverage</h4>
                                <p className="text-sm text-zinc-500">140+ Edge Locations</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                            <div className="p-2 rounded-lg bg-purple-500/10">
                                <Wifi className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium mb-1">Low Latency</h4>
                                <p className="text-sm text-zinc-500">&lt;24ms Response Time</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Dashboard Mockup - The "Active" Part */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 perspective-1000"
                >
                    <div className="relative w-full rounded-xl bg-[#09090b] border border-white/10 shadow-2xl overflow-hidden group">
                         {/* Reflection */}
                         <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

                        {/* Simulated Browser Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-[10px] font-mono text-zinc-600 bg-white/5 px-2 py-0.5 rounded">LIVE_FEED_V2</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-4">
                                    <button 
                                        onClick={() => setActiveTab('traffic')}
                                        className={`text-sm font-medium transition-colors ${activeTab === 'traffic' ? 'text-white' : 'text-zinc-500'}`}
                                    >Traffic</button>
                                     <button 
                                        onClick={() => setActiveTab('threats')}
                                        className={`text-sm font-medium transition-colors ${activeTab === 'threats' ? 'text-white' : 'text-zinc-500'}`}
                                    >Threats</button>
                                </div>
                                <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <StatCard label="Req/Sec" value="842.5k" trend="+6.2%" positive={true} />
                                <StatCard label="Blocked" value="14.2k" trend="+2.1%" positive={true} />
                                <StatCard label="Success" value="99.9%" trend="+0.1%" positive={true} />
                            </div>

                            <div className="h-[250px] w-full mb-8">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorSecured" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4}/>
                                                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                            </linearGradient>
                                            <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4}/>
                                                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                                            </linearGradient>
                                            <filter id="glow" height="130%">
                                                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                                                <feOffset dx="0" dy="0" result="offsetblur" />
                                                <feComponentTransfer>
                                                    <feFuncA type="linear" slope="2.5" />
                                                </feComponentTransfer>
                                                <feMerge>
                                                    <feMergeNode />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                        <XAxis 
                                            dataKey="name" 
                                            axisLine={false} 
                                            tickLine={false} 
                                            tick={{fill: '#71717a', fontSize: 10, fontFamily: 'monospace'}} 
                                            dy={10} 
                                        />
                                        <YAxis 
                                            axisLine={false} 
                                            tickLine={false} 
                                            tick={{fill: '#71717a', fontSize: 10, fontFamily: 'monospace'}} 
                                        />
                                        <Tooltip 
                                            contentStyle={{
                                                backgroundColor: 'rgba(9, 9, 11, 0.9)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '8px',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                                            }}
                                            itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                                            labelStyle={{ color: '#a1a1aa', marginBottom: '4px' }}
                                            cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 1, strokeDasharray: '4 4' }}
                                        />
                                        <Area 
                                            type="monotone" 
                                            dataKey="secured" 
                                            stroke="#8b5cf6" 
                                            strokeWidth={3} 
                                            fill="url(#colorSecured)" 
                                            animationDuration={1000}
                                            filter="url(#glow)"
                                        />
                                        <Area 
                                            type="monotone" 
                                            dataKey="threats" 
                                            stroke="#f43f5e" 
                                            strokeWidth={3} 
                                            fill="url(#colorThreats)" 
                                            animationDuration={1500}
                                            filter="url(#glow)"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Active Log Feed */}
                            <div className="border-t border-white/5 pt-4">
                                <div className="text-xs font-mono text-zinc-500 mb-2 uppercase">Recent Interceptions</div>
                                <div className="space-y-0">
                                    <IncidentRow ip="192.168.42.11" type="SQL Injection" location="Seattle, US" time="Just now" />
                                    <IncidentRow ip="10.20.1.55" type="DDoS Attempt" location="Frankfurt, DE" time="2s ago" />
                                    <IncidentRow ip="172.16.0.4" type="XSS Attack" location="Tokyo, JP" time="5s ago" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
}
