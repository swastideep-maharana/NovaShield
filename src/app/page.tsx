import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full overflow-hidden bg-transparent selection:bg-primary/30 relative">
      
      {/* === FIXED COSMIC BACKGROUND START === */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
           
           {/* 0. Falling Meteors */}
           <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor opacity-0"
                        style={{
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                            animationDelay: Math.random() * 10 + "s",
                            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
                        }}
                    >
                        {/* Meteor Tail */}
                        <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
                    </div>
                ))}
           </div>

           {/* 1. Volumetric God Rays (Multi-Layered) */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[120vh] max-w-[1400px] pointer-events-none mix-blend-screen">
              
              {/* Layer A: Core Beam - Sharp & Defined "Drop Down" */}
              <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[120vh] opacity-40 blur-[50px] animate-pulse"
                   style={{ 
                       background: "conic-gradient(from 180deg at 50% 0%, transparent 0deg, transparent 172deg, #c4b5fd 176deg, #7c3aed 180deg, #db2777 184deg, transparent 188deg, transparent 360deg)",
                   }} 
              />
              
              {/* Layer A2: Secondary Searchlight Beam (Rotated) */}
              <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[120vh] opacity-20 blur-[60px] animate-pulse"
                   style={{ 
                       background: "conic-gradient(from 180deg at 50% 0%, transparent 0deg, transparent 170deg, #a78bfa 175deg, transparent 180deg, transparent 360deg)",
                       transform: "translateX(-15%) rotate(-5deg)",
                       animationDelay: "1s"
                   }} 
              />
              <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[120vh] opacity-20 blur-[60px] animate-pulse"
                   style={{ 
                       background: "conic-gradient(from 180deg at 50% 0%, transparent 0deg, transparent 170deg, #a78bfa 175deg, transparent 180deg, transparent 360deg)",
                       transform: "translateX(15%) rotate(5deg)",
                       animationDelay: "2s"
                   }} 
              />
              
              {/* Layer B: Ambient Field - Wide & Soft */}
              <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-full opacity-20 blur-[100px]"
                   style={{ 
                       background: "conic-gradient(from 180deg at 50% 0%, transparent 0deg, transparent 140deg, rgba(88, 28, 135, 0.5) 160deg, transparent 180deg, rgba(219, 39, 119, 0.5) 200deg, transparent 220deg, transparent 360deg)",
                   }} 
              />

              {/* Layer C: Floor Reflection Hint */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-primary/10 to-transparent blur-3xl opacity-30" />
           </div>

           {/* 2. Side Ambient Glows - Deep Space */}
           <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cosmic-500/10 blur-[120px] will-change-transform" />
           <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] will-change-transform" />
           
           {/* 3. Global Texture, Grid & Vignette */}
           <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
           <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030014_90%)]" />{/* Vignette */}
      </div>
      {/* === FIXED COSMIC BACKGROUND END === */}

      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
