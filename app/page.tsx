import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Coordinators } from "@/components/Coordinators";
import { Events } from "@/components/Events";
import { GamingHub } from "@/components/GamingHub";
import { Timeline } from "@/components/Timeline";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cyber-black min-h-screen text-white overflow-x-hidden selection:bg-neon-green selection:text-black">
      <Navbar />
      <Hero />
      <Stats />
      <Events />
      <GamingHub />
      <Coordinators />
      <Timeline />
      <CallToAction />
      <Footer />
    </main>
  );
}

