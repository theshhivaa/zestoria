"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import speakersData from "@/data/speakers.json";

interface Speaker {
    id: string;
    name: string;
    topic: string;
    image: string;
}

const speakers: Speaker[] = speakersData;

export function Speakers() {
    return (
        <section id="speakers" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white italic uppercase mb-2">
                        Featured <span className="text-neon-green">Speakers <span className="inline-block w-8 h-1 bg-neon-green ml-2 animate-pulse"></span></span>
                    </h2>
                    <p className="font-mono text-gray-500 text-sm tracking-widest">
                        MEET THE VISIONARIES
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-cyber-dark-gray/50 border border-white/10 overflow-hidden hover:border-neon-green/50 transition-all duration-300"
                        >
                            {/* Speaker Image with Monochrome Effect */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark-gray via-transparent to-transparent opacity-80"></div>

                                {/* Neon border effect on hover */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-green/30 transition-colors duration-300"></div>
                            </div>

                            {/* Speaker Info */}
                            <div className="p-6 relative">
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-neon-green/20 group-hover:border-neon-green/50 transition-colors duration-300"></div>

                                <h3 className="font-orbitron font-bold text-xl text-white mb-2 uppercase group-hover:text-neon-green transition-colors duration-300">
                                    {speaker.name}
                                </h3>

                                <p className="font-mono text-gray-400 text-sm leading-relaxed">
                                    {speaker.topic}
                                </p>

                                {/* Animated underline */}
                                <div className="mt-4 h-0.5 bg-neon-green/30 w-0 group-hover:w-full transition-all duration-500"></div>
                            </div>

                            {/* Bottom border animation */}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
