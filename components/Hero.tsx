"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) / 20;
            const moveY = (clientY - window.innerHeight / 2) / 20;
            mouseX.set(moveX);
            mouseY.set(moveY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Grid */}
            <motion.div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    x: springX,
                    y: springY
                }}
            ></motion.div>

            {/* Radial Gradient Overlay */}
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-cyber-black/50 to-cyber-black pointer-events-none"
                style={{
                    x: useSpring(mouseX, { stiffness: 50, damping: 20 }),
                    y: useSpring(mouseY, { stiffness: 50, damping: 20 }),
                    scale: 1.1
                }}
            ></motion.div>

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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center justify-center"
                >
                    <a
                        href="#events"
                        className="group relative px-8 py-4 bg-transparent border border-neon-green hover:bg-neon-green/10 transition-all duration-300"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="absolute inset-0 w-full h-full border border-neon-green blur-[2px] opacity-50 group-hover:opacity-100 transition-opacity"></span>
                        <span className="font-bold text-neon-green uppercase tracking-[0.1em] text-sm">View Events</span>
                    </a>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </section>
    );
}
