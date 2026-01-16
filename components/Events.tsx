"use client";

import { motion } from "framer-motion";
import { Terminal, Cpu, Shield, Code, Zap, Database, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import eventsData from "@/data/events.json";

// Icon map to resolve string icon names to components
const iconMap: Record<string, LucideIcon> = {
    Terminal,
    Cpu,
    Shield,
    Code,
    Zap,
    Database
};

interface EventData {
    id: string;
    title: string;
    icon: string;
    description: string;
    tags: string[];
    status: string;
    image: string;
    registrationLink: string;
}

export function Events() {
    return (
        <section className="py-24 relative overflow-hidden bg-black" id="events">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4 tracking-wider">
                        FEATURED <span className="text-neon-green">EVENTS</span>
                    </h2>
                    <p className="font-mono text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        Choose your arena. Showcase your skills. Compete with the best.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {(eventsData as EventData[]).map((event, index) => {
                        const IconComponent = iconMap[event.icon] || Terminal;
                        return (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white/5 border border-white/10 hover:border-neon-green/50 overflow-hidden transition-all duration-300 hover:bg-white/10 flex flex-col"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div className="absolute top-0 right-0 p-3 bg-black/50 backdrop-blur-sm border-l border-b border-neon-green/30">
                                        <IconComponent className="w-6 h-6 text-neon-green" />
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-neon-green transition-colors">
                                            {event.title}
                                        </h3>
                                        <div className="h-0.5 w-12 bg-neon-green/50 group-hover:w-full transition-all duration-300"></div>
                                    </div>

                                    <p className="font-mono text-gray-400 text-sm mb-6 leading-relaxed flex-1">
                                        {event.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {event.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-mono uppercase px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={event.registrationLink}
                                        className="w-full block text-center py-3 bg-transparent border border-neon-green/30 text-neon-green font-mono text-xs uppercase tracking-widest hover:bg-neon-green hover:text-black transition-all duration-300 group-hover:border-neon-green"
                                    >
                                        Initiate_Registration
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
