"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Gamepad2, Car, Users, Glasses } from "lucide-react";

const features = [
    {
        icon: Gamepad2,
        title: "PS5 Experience",
        description: "Experience next-gen gaming on the latest PlayStation 5 consoles with 4K visuals and haptic feedback."
    },
    {
        icon: Car,
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

            {/* Digital Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-green/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.5, 0],
                            scale: [1, 2, 1],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden border border-neon-green/30 bg-black/40 backdrop-blur-sm p-8 md:p-12 lg:p-16"
                >
                    {/* Glowing corners */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-green rounded-tl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-green rounded-br-2xl"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="mb-6 relative w-32 h-32 md:w-40 md:h-40">
                                    <Image
                                        src="/images/aegis-logo.jpg"
                                        alt="Aegis Arena Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white mb-2 tracking-tighter uppercase top-heading-shadow mt-4">
                                    Aegis <span className="text-neon-green text-shadow-neon">Arena</span>
                                </h2>
                                <p className="font-mono text-neon-green/80 text-lg mb-6 tracking-widest uppercase">
                                    // The Ultimate Gaming Sanctuary
                                </p>
                                <p className="text-gray-400 mb-8 leading-relaxed max-w-xl">
                                    Step into the future of collegiate gaming. The Aegis Arena is a dedicated space
                                    designed for gamers, by gamers. Whether you're a competitive esports athlete
                                    or a casual player, our hub offers the perfect environment to play, connect, and win.
                                </p>


                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-neon-green/50 hover:bg-white/10 transition-colors group"
                                >
                                    <feature.icon className="w-8 h-8 text-neon-green mb-4 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="font-orbitron font-bold text-lg text-white mb-2 uppercase group-hover:text-neon-green transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
