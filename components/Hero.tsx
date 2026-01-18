"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { CircularMenu } from "./CircularMenu";

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const ref = useRef(null);
    const { scrollY } = useScroll();
    const robotY = useTransform(scrollY, [0, 500], [0, 150]);
    const gridY = useTransform(scrollY, [0, 500], [0, 50]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
            {/* Background Grid - Subtle dot pattern for a cleaner feel */}
            <motion.div
                className="absolute inset-0 z-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    x: springX,
                    y: gridY,
                }}
            ></motion.div>

            {/* Radial Gradient Overlay - Smoother blending */}
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-cyber-black pointer-events-none"
                style={{
                    x: useSpring(mouseX, { stiffness: 50, damping: 20 }),
                    y: useSpring(mouseY, { stiffness: 50, damping: 20 }),
                    scale: 1.2
                }}
            ></motion.div>

            {/* Graphical Robot Element */}
            <motion.div
                className="absolute right-0 bottom-0 w-full h-[80%] md:w-[65%] md:h-full z-0 opacity-40 pointer-events-none select-none"
                style={{
                    x: useSpring(mouseX, { stiffness: 40, damping: 25 }),
                    y: robotY,
                    scale: 1.1
                }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.4, x: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/images/optimus-prime.png"
                        alt="Graphical Robot Element"
                        fill
                        priority
                        className="object-contain object-right-bottom mix-blend-screen brightness-125 contrast-125 hover:brightness-150 transition-all duration-700"
                    />
                </div>
                {/* Advanced multi-layer masking to eliminate boxy edges and improve blending */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyber-black/20 to-cyber-black pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_bottom,transparent_0%,#050505_85%)] pointer-events-none"></div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="flex-1">
                    {/* Status indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center lg:justify-start gap-2 mb-8"
                    >
                        <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse"></span>
                        <span className="text-neon-green/80 text-xs font-mono tracking-[0.2em] uppercase">
                            Sree Gokulam Arts and Science College Presents
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            textShadow: [
                                "0 0 0px rgba(255,255,255,0)",
                                "0 0 8px rgba(255,255,255,0.4)",
                                "0 0 0px rgba(255,255,255,0)"
                            ]
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            textShadow: {
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }
                        }}
                        className="font-orbitron font-black text-6xl md:text-8xl lg:text-9xl italic uppercase tracking-tighter text-white mb-4 leading-none"
                    >
                        Zestoria <br />
                        <motion.span
                            animate={{
                                textShadow: [
                                    "0 0 0px rgba(204,255,0,0)",
                                    "0 0 10px rgba(204,255,0,0.6)",
                                    "0 0 0px rgba(204,255,0,0)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                            className="text-neon-green"
                        >
                            twenty six
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl text-gray-400 text-sm md:text-base font-mono tracking-widest mb-12 uppercase leading-relaxed"
                    >
                        The Ultimate Tech Fest Experience — February 2026 <br />
                        Innovate. Compete. Conquer.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex items-center justify-center lg:justify-start"
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
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </section>
    );
}
