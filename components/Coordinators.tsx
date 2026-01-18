"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import coordinatorsData from "@/data/coordinators.json";

interface Coordinator {
    id: string;
    name: string;
    role: string;
    image: string;
    objectPosition?: string;
}

const coordinators: Coordinator[] = coordinatorsData;

export function Coordinators() {
    // Ordering: UMA (Left), DINESH (Center), PALLAVI (Right)
    const orderedCoordinators = [
        coordinators.find(c => c.name.includes("UMA")),
        coordinators.find(c => c.name.includes("DINESH")),
        coordinators.find(c => c.name.includes("PALLAVI"))
    ].filter(Boolean) as Coordinator[];

    const [activeIndex, setActiveIndex] = useState(1); // Start with UMA in center

    const handleSwipe = (direction: 'left' | 'right') => {
        if (direction === 'left') {
            setActiveIndex((prev) => (prev + 1) % orderedCoordinators.length);
        } else {
            setActiveIndex((prev) => (prev - 1 + orderedCoordinators.length) % orderedCoordinators.length);
        }
    };

    const getPosition = (index: number) => {
        const diff = (index - activeIndex + orderedCoordinators.length) % orderedCoordinators.length;
        if (diff === 0) return "center";
        if (diff === 1) return "right";
        return "left";
    };

    return (
        <section id="coordinators" className="py-24 relative overflow-hidden bg-black pb-40">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-orbitron font-bold text-4xl md:text-6xl text-white italic uppercase mb-2 tracking-tighter">
                        Technical <span className="text-neon-green">Department</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-neon-green/30"></div>
                        <p className="font-mono text-gray-500 text-xs md:text-sm tracking-[0.4em] uppercase">
                            _Architects of Zestoria
                        </p>
                        <div className="h-px w-12 bg-neon-green/30"></div>
                    </div>
                </div>

                <div className="relative min-h-[500px] md:min-h-[700px] flex items-center justify-center">

                    {/* Advanced Sci-Fi Reactor Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">

                        {/* 1. Grid Removed */}

                        {/* 2. Massive Radar Sweep Gradient */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_90deg,rgba(204,255,0,0.1)_180deg,transparent_360deg)] mix-blend-screen"
                        />

                        {/* 3. Outer Mechanical Brackets (Clockwise) */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[600px] h-[600px] md:w-[950px] md:h-[950px]"
                        >
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(204,255,0,0.1)" strokeWidth="0.5" strokeDasharray="10 5" />
                                <path d="M50 1 A49 49 0 0 1 99 50" fill="none" stroke="rgba(204,255,0,0.4)" strokeWidth="1" />
                                <path d="M50 99 A49 49 0 0 1 1 50" fill="none" stroke="rgba(204,255,0,0.4)" strokeWidth="1" />
                            </svg>
                        </motion.div>

                        {/* 4. Inner Tech Rings (Counter-Clockwise) */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] border border-neon-green/20 rounded-full border-dashed"
                        />

                        <motion.div
                            animate={{ rotate: 180 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] border-2 border-transparent border-t-neon-green/40 border-b-neon-green/40 rounded-full"
                        />

                        {/* 5. Orbiting Data Particles */}
                        <div className="absolute w-[700px] h-[700px] animate-spin-slow">
                            <div className="absolute top-0 left-1/2 w-4 h-4 bg-neon-green/80 rounded-full blur-[2px] shadow-[0_0_15px_#ccff00]"></div>
                            <div className="absolute bottom-1/4 remaining-right w-2 h-2 bg-white rounded-full blur-[1px]"></div>
                        </div>

                        {/* 6. Central Intense Glow */}
                        <div className="absolute w-[300px] h-[300px] bg-neon-green/10 blur-[80px] rounded-full animate-pulse"></div>
                    </div>

                    {/* Mobile Static View (Vertical Stack) */}
                    <div className="md:hidden flex flex-col items-center justify-center gap-16 py-10 w-full z-20">
                        {orderedCoordinators.map((person) => (
                            <div key={person.id} className="flex flex-col items-center w-full max-w-sm relative group">
                                <div className={`relative w-56 h-56 rounded-full border-4 border-neon-green p-2 bg-black shadow-[0_0_50px_rgba(204,255,0,0.2)] overflow-hidden transition-all duration-500 mx-auto`}>
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className={`object-cover transition-all duration-700`}
                                            style={{ objectPosition: person.objectPosition || 'top' }}
                                        />
                                    </div>
                                </div>

                                <div className={`mt-6 text-center transition-all duration-500 opacity-100 translate-y-0`}>
                                    <div className="bg-black/80 backdrop-blur-xl border border-neon-green/40 w-72 min-h-[100px] flex flex-col justify-center items-center px-4 py-4 rounded-none relative overflow-hidden shadow-[0_0_30px_rgba(204,255,0,0.1)] mx-auto">
                                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-green"></div>
                                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-green"></div>
                                        <h4 className="font-orbitron font-black text-xl text-white tracking-tighter uppercase mb-2">
                                            {person.name}
                                        </h4>
                                        <p className="font-mono text-neon-green text-xs uppercase tracking-[0.3em] font-bold">
                                            {person.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Swipable Container */}
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.x < -50) handleSwipe('left');
                            else if (info.offset.x > 50) handleSwipe('right');
                        }}
                        className="hidden md:flex relative w-full h-full items-center justify-center cursor-grab active:cursor-grabbing"
                    >
                        {orderedCoordinators.map((person, index) => {
                            const pos = getPosition(index);
                            const isCenter = pos === "center";

                            return (
                                <motion.div
                                    key={person.id}
                                    initial={false}
                                    animate={{
                                        x: pos === "center" ? 0 : pos === "left" ? "-100%" : "100%",
                                        scale: 1, // Uniform size
                                        opacity: 1, // Uniform visibility
                                        zIndex: isCenter ? 40 : 20,
                                    }}
                                    transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                                    className="absolute flex flex-col items-center w-full max-w-sm"
                                >
                                    <div className="relative group">
                                        {/* Outer Scifi elements for center person */}


                                        <div className={`relative w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-neon-green p-2 bg-black shadow-[0_0_50px_rgba(204,255,0,0.2)] overflow-hidden transition-all duration-500 mx-auto`}>
                                            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                                                <Image
                                                    src={person.image}
                                                    alt={person.name}
                                                    fill
                                                    className={`object-cover transition-all duration-700`}
                                                    style={{ objectPosition: person.objectPosition || 'top' }}
                                                />
                                            </div>
                                        </div>

                                        <div className={`mt-6 md:mt-10 text-center transition-all duration-500 opacity-100 translate-y-0`}>
                                            <div className="bg-black/80 backdrop-blur-xl border border-neon-green/40 w-72 md:w-80 min-h-[100px] md:min-h-[130px] flex flex-col justify-center items-center px-4 py-4 md:px-4 md:py-6 rounded-none relative overflow-hidden shadow-[0_0_30px_rgba(204,255,0,0.1)] mx-auto">
                                                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-neon-green"></div>
                                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-neon-green"></div>
                                                <h4 className="font-orbitron font-black text-xl md:text-2xl text-white tracking-tighter uppercase mb-2">
                                                    {person.name}
                                                </h4>
                                                <p className="font-mono text-neon-green text-xs md:text-sm uppercase tracking-[0.3em] font-bold">
                                                    {person.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* Bottom scanned line decorative element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </section>
    );
}
