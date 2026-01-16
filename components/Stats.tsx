"use client";

import { motion } from "framer-motion";
import statsData from "@/data/stats.json";

interface StatItem {
    label: string;
    value: string;
}



export function Stats() {
    return (
        <section className="py-12 bg-cyber-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {(statsData as StatItem[]).map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center relative group"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-neon-green/50 transition-colors duration-500"></div>
                            <h3 className="font-orbitron font-bold text-4xl md:text-5xl text-neon-green mb-2">
                                {stat.value}
                            </h3>
                            <p className="font-mono text-gray-500 text-xs tracking-widest uppercase">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
