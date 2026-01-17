"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroAnimation() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 1 : 100));
        }, 20);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center font-mono overflow-hidden"
                >
                    {/* Background scanning line */}
                    <motion.div
                        className="absolute inset-0 w-full h-[2px] bg-neon-green/20 backdrop-blur-sm shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                        animate={{
                            top: ["0%", "100%", "0%"]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    <div className="relative z-10 text-center space-y-8 px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-2"
                        >
                            <h1 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-widest uppercase">
                                Zestoria <span className="text-neon-green">Protocol</span>
                            </h1>
                            <p className="text-neon-green/60 text-xs md:text-sm tracking-[0.5em] uppercase">
                                System Initialization in Progress
                            </p>
                        </motion.div>

                        <div className="max-w-md mx-auto w-full space-y-4">
                            {/* Loading Bar */}
                            <div className="h-1 w-full bg-white/5 border border-white/10 relative">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-neon-green shadow-[0_0_10px_rgba(57,255,20,0.8)]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Status Messages */}
                            <div className="h-4 overflow-hidden text-[10px] md:text-xs text-neon-green/80 flex flex-col items-center">
                                <motion.p
                                    animate={{ y: progress < 30 ? 0 : progress < 60 ? -16 : progress < 90 ? -32 : -48 }}
                                    className="transition-all duration-300"
                                >
                                    AUTHENTICATING CORE MODULES...<br />
                                    SYNCING NEURAL INTERFACE...<br />
                                    ESTABLISHING ENCRYPTED LINK...<br />
                                    ACCESS GRANTED. WELCOME AGENT.
                                </motion.p>
                            </div>
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
