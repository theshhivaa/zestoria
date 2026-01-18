import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

import { Coordinators } from "@/components/Coordinators";
import { Events } from "@/components/Events";
import { GamingHub } from "@/components/GamingHub";
import { Instructions } from "@/components/Instructions";
import { Timeline } from "@/components/Timeline";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { FloatingGraphics } from "@/components/FloatingGraphics";

export default function Home() {
  return (
    <main className="bg-cyber-black min-h-screen text-white overflow-x-hidden selection:bg-neon-green selection:text-black">
      <ScrollProgressBar />
      <FloatingGraphics />
      <Navbar />
      <Hero />

      <Events />
      <GamingHub />
      <Instructions />
      <Coordinators />
      <Timeline />
      <CallToAction />
      <Footer />
    </main>
  );
}

