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
                    READY FOR <br />
                    <span className="text-neon-green">UPGRADE?</span>
                </h2>

                <p className="font-mono text-gray-400 text-sm max-w-md mx-auto mb-12 uppercase tracking-widest">
                    Warning: Signal interference expected. Final registration window is closing.
                </p>

                <form className="max-w-md mx-auto px-4 w-full">
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="CONNECT_STRING@UID.NET"
                            className="w-full bg-cyber-dark-gray border border-white/10 px-6 py-4 text-white font-mono text-xs focus:outline-none focus:border-neon-green transition-colors text-center"
                        />

                        <button className="w-full bg-transparent border border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold uppercase py-4 tracking-[0.2em] transition-all duration-300 clip-path-slant">
                            Secure Grid Identity &gt;
                        </button>
                    </div>
                </form>
            </motion.div>
        </section>
    );
}
