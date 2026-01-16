"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function CallToAction() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden flex flex-col items-center justify-center text-center">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
            >
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full border border-neon-green/30 bg-black">
                        <Zap className="w-8 h-8 text-neon-green" />
                    </div>
                </div>

                <h2 className="font-orbitron font-black text-5xl md:text-7xl skew-y-[-2deg] mb-6">
                    READY TO <br />
                    <span className="text-neon-green">COMPETE?</span>
                </h2>

                <p className="font-mono text-gray-400 text-sm max-w-md mx-auto uppercase tracking-widest">
                    Join us at Zestoria 2026 for an unforgettable tech fest experience.
                </p>
            </motion.div>
        </section>
    );
}
