import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "NovaShield | Next-Gen Cyber Defense",
  description: "Advanced AI-powered security for modern infrastructure.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${grotesk.variable} ${jakarta.variable} font-body antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
