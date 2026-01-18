"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    Zap,
    Calendar,
    Gamepad2,
    ScrollText,
    Users,
    Mail,
    Hexagon,
    X
} from "lucide-react";
import { useState, useEffect } from "react";

const menuItems = [
    { id: "hero", label: "HOME", icon: Home, roman: "I" },
    { id: "events", label: "EVENTS", icon: Zap, roman: "II" },
    { id: "schedule", label: "SCHEDULE", icon: Calendar, roman: "III" },
    { id: "gaming-hub", label: "GAMING HUB", icon: Gamepad2, roman: "IV" },
    { id: "protocols", label: "RULES", icon: ScrollText, roman: "V" },
    { id: "coordinators", label: "TEAM", icon: Users, roman: "VI" },
    { id: "contact", label: "CONTACT", icon: Mail, roman: "VII" },
];

interface CircularMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function CircularMenu({ isOpen, onClose }: CircularMenuProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Prevent scrolling when the hub is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleNavigation = (id: string) => {
        onClose();
        // Small delay to allow portal to close before scrolling
        setTimeout(() => {
            if (id === "hero") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cyber-black/95 backdrop-blur-xl h-screen w-screen"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 p-4 text-neon-green hover:text-white transition-colors group z-[110]"
                    >
                        <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
                        <span className="sr-only">Close Hub</span>
                    </button>

                    {/* Background Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/10 rounded-full blur-[150px] pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 text-center mb-16"
                    >
                        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4">
                            COMMAND <span className="text-neon-green">CENTER</span>
                        </h2>
                        <p className="font-mono text-gray-500 text-sm tracking-widest uppercase">
                            _Interface_Initialized
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="relative w-[320px] h-[320px] md:w-[600px] md:h-[600px] flex items-center justify-center"
                    >
                        {/* Outer Ring with Roman Numerals */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-neon-green/10 rounded-full"
                        >
                            {menuItems.map((item, index) => {
                                const angle = (index * (360 / menuItems.length));
                                return (
                                    <div
                                        key={`roman-${index}`}
                                        className="absolute top-0 left-1/2 -translate-x-1/2 h-full py-4 text-neon-green/30 font-orbitron text-sm md:text-xl"
                                        style={{ transform: `rotate(${angle}deg)` }}
                                    >
                                        {item.roman}
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Middle Rotating Grid Ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[15%] border-2 border-dashed border-neon-green/10 rounded-full"
                        ></motion.div>

                        {/* Main Interactive Items Ring */}
                        <div className="absolute inset-[25%] rounded-full z-20">
                            {menuItems.map((item, index) => {
                                const angle = (index * (360 / menuItems.length)) - 90;
                                const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 120 : 220;
                                const x = radius * Math.cos(angle * (Math.PI / 180));
                                const y = radius * Math.sin(angle * (Math.PI / 180));

                                return (
                                    <motion.button
                                        key={item.id}
                                        onClick={() => handleNavigation(item.id)}
                                        onHoverStart={() => setHoveredIndex(index)}
                                        onHoverEnd={() => setHoveredIndex(null)}
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
                                        animate={{ x, y }}
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <div className="relative">
                                            {/* Icon Container */}
                                            <div className={`p-4 md:p-6 rounded-full border-2 transition-all duration-300 ${hoveredIndex === index
                                                ? "bg-neon-green border-neon-green text-black shadow-[0_0_30px_rgba(204,255,0,0.5)]"
                                                : "bg-black/80 border-white/10 text-neon-green group-hover:border-neon-green/50"
                                                }`}>
                                                <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                                            </div>

                                            {/* Label - visible on hover (desktop) or always (mobile) */}
                                            <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap">
                                                <span className="font-orbitron font-bold text-neon-green text-[8px] tracking-widest uppercase">
                                                    {item.label}
                                                </span>
                                            </div>

                                            <AnimatePresence>
                                                {hoveredIndex === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                                                        className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 mt-4 whitespace-nowrap"
                                                    >
                                                        <span className="font-orbitron font-bold text-neon-green text-xs md:text-sm tracking-widest bg-black/90 px-3 py-1 border border-neon-green/20">
                                                            {item.label}
                                                        </span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Central Core */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 90, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-24 h-24 md:w-40 md:h-40 bg-black border-4 border-neon-green/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(204,255,0,0.1)] z-10"
                        >
                            <div className="absolute inset-2 border border-neon-green/10 rounded-full animate-ping"></div>
                            <Hexagon className="w-12 h-12 md:w-20 md:h-20 text-neon-green animate-pulse" />
                        </motion.div>
                    </motion.div>

                    {/* Footer Legend */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[10px] text-gray-600 tracking-[0.3em] uppercase opacity-50">
                        Zestoria Protocol // Nav_Interface_v1.0
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
