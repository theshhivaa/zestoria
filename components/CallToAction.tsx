"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";

export function CallToAction() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden flex flex-col items-center justify-center text-center">

            {/* Background Graphic (Robot - Megatron) */}
            <motion.div
                className="absolute right-[-10%] md:right-[5%] bottom-0 w-full h-full md:w-[60%] z-0 opacity-80 pointer-events-none select-none"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <div className="relative w-full h-full brightness-150 contrast-110">
                    <Image
                        src="/images/megatron_new.png"
                        alt="Megatron Element"
                        fill
                        className="object-contain object-right-bottom mix-blend-screen"
                    />
                    {/* Masking gradients to blend the robot */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cyber-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent"></div>
                </div>
            </motion.div>


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
