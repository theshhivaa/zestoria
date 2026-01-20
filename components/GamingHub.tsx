"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Gamepad2, Gauge, Users, Glasses } from "lucide-react";
import { useState } from "react";

const features = [
    {
        icon: Gamepad2,
        title: "PS5 Experience",
        description: "Experience next-gen gaming on the latest PlayStation 5 consoles with 4K visuals and haptic feedback.",
        backgroundImage: "/images/ps4-console-8k.png"
    },
    {
        icon: Gauge,
        title: "Driving Simulator",
        description: "Feel the adrenaline with our realistic driving simulator. Experience the thrill of professional racing.",
        backgroundImage: "/images/driving-simulator-8k.png"
    },

    {
        icon: Glasses,
        title: "Virtual Reality",
        description: "Step beyond the screen. Dive into immersive worlds with our premium VR stations and experience gaming in a whole new dimension.",
        backgroundImage: "/images/vr-headset-8k.png"
    }
];

export function GamingHub() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <section id="gaming-hub" className="py-24 relative overflow-hidden bg-cyber-black border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Main Visual Section */}
                <div className="relative flex flex-col items-center justify-center mb-20">

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
                        className="relative z-10 w-72 h-72 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mb-8"
                    >
                        <Image
                            src="/images/aegis-logo.jpg"
                            alt="Aegis Arena Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_50px_rgba(204,255,0,0.3)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <h1 className="font-orbitron font-black text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter text-center">
                            GAMING <span className="text-neon-green">HUB</span>
                        </h1>
                    </motion.div>


                    <p className="text-gray-400 text-center text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16">
                        Step into the future of collegiate gaming. The Aegis Arena is a dedicated space
                        designed for gamers, by gamers.
                    </p>
                </div>

                {/* Sci-Fi Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative w-full max-w-[280px] md:max-w-sm group cursor-pointer"
                            onClick={() => setActiveCard(activeCard === index ? null : index)}
                        >
                            {/* Card Container with custom clip-path shape */}
                            <div
                                className="relative bg-black/40 border-2 border-neon-green/60 h-[380px] md:h-[500px] flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 shadow-[0_0_15px_rgba(57,255,20,0.15)] hover:shadow-[0_0_25px_rgba(57,255,20,0.3)]"
                                style={{
                                    clipPath: "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)"
                                }}
                            >
                                {/* Glow Border Effect Layer */}
                                <div className="absolute inset-0 bg-gradient-to-b from-neon-green/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"></div>

                                {/* Header */}
                                <div className="relative z-10 pt-8 pb-4 text-center border-b border-white/10 mx-2">
                                    <h3 className="font-orbitron font-bold text-xl text-white uppercase tracking-wider">
                                        {feature.title}
                                    </h3>
                                    <div className="absolute -left-2 top-10 w-1 h-8 bg-neon-green/50"></div>
                                </div>

                                {/* Main Image Area */}
                                <div className="relative flex-grow mx-2 my-2 min-h-[200px] overflow-hidden border border-white/5 bg-black/50">
                                    {feature.backgroundImage ? (
                                        <Image
                                            src={feature.backgroundImage}
                                            alt={feature.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-gray-600">
                                            <feature.icon className="w-16 h-16 opacity-50" />
                                        </div>
                                    )}

                                    {/* Overlay Description on Hover */}
                                    <div className={`absolute inset-0 bg-black/80 flex items-center justify-center p-6 transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                        <p className="font-mono text-neon-green text-sm text-center">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer / Actions */}
                                <div className="relative z-10 p-4 mt-auto">
                                    {/* Bottom Decorative Bar */}
                                    <div className="mt-4 flex items-center justify-between text-[10px] text-gray-500 font-mono uppercase">
                                        <span>Status: Online</span>
                                        <div className="h-1 w-12 bg-purple-600"></div>
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-green/30 rounded-tr-lg pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-600/30 rounded-bl-lg pointer-events-none"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
