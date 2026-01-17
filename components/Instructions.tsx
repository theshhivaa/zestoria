"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, AlertCircle } from "lucide-react";
import instructionsData from "@/data/instructions.json";
import eventsData from "@/data/events.json";

export function Instructions() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="instructions" className="py-24 relative overflow-hidden bg-cyber-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-orbitron font-black text-4xl md:text-5xl text-white mb-4 tracking-tighter uppercase top-heading-shadow">
                        Protocol <span className="text-neon-green text-shadow-neon">Guidelines</span>
                    </h2>
                    <p className="font-mono text-neon-green/80 text-lg tracking-widest uppercase">
                        // Rules of Engagement
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {instructionsData.map((instruction, index) => {
                        const event = eventsData.find(e => e.id === instruction.eventId);
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={instruction.eventId}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm hover:border-neon-green/50 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded bg-white/5 text-neon-green group-hover:bg-neon-green group-hover:text-black transition-colors duration-300`}>
                                            <AlertCircle className="w-5 h-5" />
                                        </div>
                                        <samp className="font-orbitron font-bold text-lg text-white group-hover:text-neon-green transition-colors">
                                            {event?.title || instruction.eventId}
                                        </samp>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-neon-green" : ""}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden bg-black/20"
                                        >
                                            <div className="p-6 pt-0 border-t border-white/5">
                                                <ul className="space-y-3 mt-4">
                                                    {instruction.rules.map((rule, ruleIndex) => (
                                                        <li key={ruleIndex} className="flex items-start gap-3 text-gray-300 text-sm md:text-base font-mono">
                                                            <span className="text-neon-green mt-1">➜</span>
                                                            {rule}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
