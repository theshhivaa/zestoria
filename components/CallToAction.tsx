"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function CallToAction() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0]);

    return (
        <section ref={ref} id="contact" className="py-48 relative overflow-hidden flex flex-col items-center justify-center text-center">

            {/* Graphical Robot Element (Bumblebee) */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
            >
                <div className="relative w-full h-[200%] max-w-7xl translate-y-[20%] overflow-hidden">
                    <Image
                        src="/images/bumblebee.png"
                        alt="Bumblebee Graphic"
                        fill
                        className="object-contain object-top opacity-90 scale-125 translate-y-[-10%]"
                    />
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
                <div className="flex justify-center mb-10">
                    <div className="p-5 rounded-full border border-neon-green/30 bg-black shadow-[0_0_20px_rgba(57,255,20,0.2)]">
                        <Zap className="w-10 h-10 text-neon-green" />
                    </div>
                </div>

                <h2 className="font-orbitron font-black text-6xl md:text-8xl skew-y-[-2deg] mb-8 leading-tight">
                    READY TO <br />
                    <span className="text-neon-green text-shadow-neon">COMPETE?</span>
                </h2>

                <p className="font-mono text-gray-400 text-sm md:text-base max-w-lg mx-auto uppercase tracking-[0.3em] leading-relaxed">
                    Join us at Zestoria 2026 for an <br />
                    unforgettable tech fest experience.
                </p>
            </motion.div>
        </section>
    );
}
