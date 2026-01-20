"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Gamepad2, Gauge, Users, Glasses } from "lucide-react";

const features = [
    {
        icon: Gamepad2,
        title: "PS5 Experience",
        description: "Experience next-gen gaming on the latest PlayStation 5 consoles with 4K visuals and haptic feedback."
    },
    {
        icon: Gauge,
        title: "Driving Simulator",
        description: "Feel the adrenaline with our realistic driving simulator. Experience the thrill of professional racing."
    },
    {
        icon: Users,
        title: "Community Hub",
        description: "Connect with fellow gamers, form squads, and participate in daily scrims and tournaments."
    },
    {
        icon: Glasses,
        title: "Virtual Reality",
        description: "Step beyond the screen. Dive into immersive worlds with our premium VR stations and experience gaming in a whole new dimension."
    }
];

export function GamingHub() {
    return (
        <section id="gaming-hub" className="py-24 relative overflow-hidden bg-cyber-black border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Main Visual Section */}
                <div className="relative flex flex-col items-center justify-center mb-20">

                    {/* Massive Background Text - Top Half */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none">
                        <h1 className="font-orbitron font-black text-[12vw] sm:text-[15vw] leading-none text-center text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter whitespace-nowrap opacity-50">
                            GAMING HUB
                        </h1>
                    </div>

                    {/* Central Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            duration: 0.8
                        }}
                        className="relative z-10 w-80 h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]"
                    >
                        <Image
                            src="/images/aegis-logo.jpg"
                            alt="Aegis Arena Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(204,255,0,0.3)]"
                        />
                    </motion.div>

                    {/* Foreground Text Overlay - "GAMING HUB" splits or overlays? 
                        Let's put the main title below or overlapping for the 'Robowars' feel. 
                        Actually, the user asked for "underneath the logo I want a gaming hub written" 
                    */}

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative z-20 mt-4 text-center"
                    >
                        <h2 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-widest uppercase mb-4 text-shadow-neon">
                            GAMING <span className="text-neon-green">HUB</span>
                        </h2>
                        <div className="h-1 w-32 bg-neon-green mx-auto mb-8"></div>

                        <p className="font-mono text-neon-green/80 text-lg md:text-xl tracking-widest uppercase mb-6">
                            // The Ultimate Gaming Sanctuary
                        </p>

                        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                            Step into the future of collegiate gaming. The Aegis Arena is a dedicated space
                            designed for gamers, by gamers. Whether you're a competitive esports athlete
                            or a casual player, our hub offers the perfect environment to play, connect, and win.
                        </p>
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.1 }}
                            transition={{ delay: 0.4 + (index * 0.1) }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-neon-green/50 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <feature.icon className="w-10 h-10 text-neon-green mb-6 group-hover:scale-110 transition-transform duration-300 shadow-neon" />
                            <h3 className="font-orbitron font-bold text-lg text-white mb-3 uppercase group-hover:text-neon-green transition-colors">
                                {feature.title}
                            </h3>
                            <p className="font-mono text-gray-400 text-xs leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
