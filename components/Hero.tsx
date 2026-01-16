"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Grid */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Status indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center justify-center gap-2 mb-8"
                >
                    <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse"></span>
                    <span className="text-neon-green/80 text-xs font-mono tracking-[0.2em] uppercase">
                        Sree Gokulam Arts and Science College Presents
                    </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl italic uppercase tracking-tighter text-white mb-4 leading-none"
                >
                    Zestoria <br />
                    <span className="text-neon-green">twenty six</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base font-mono tracking-widest mb-12 uppercase leading-relaxed"
                >
                    The Ultimate Tech Fest Experience — February 2026 <br />
                    Innovate. Compete. Conquer.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button className="group relative px-8 py-4 bg-transparent border border-neon-green hover:bg-neon-green/10 transition-all duration-300">
                        <span className="absolute inset-0 w-full h-full border border-neon-green blur-[2px] opacity-50 group-hover:opacity-100 transition-opacity"></span>
                        <span className="font-bold text-neon-green uppercase tracking-[0.1em] text-sm">Register Now</span>
                    </button>

                    <button className="group px-8 py-4 bg-transparent border border-white/20 hover:border-white/50 transition-all duration-300">
                        <span className="font-bold text-white uppercase tracking-[0.1em] text-sm group-hover:text-neon-green transition-colors">View Events</span>
                    </button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </section>
    );
}
