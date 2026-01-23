"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, Cpu, Shield, Code, Zap, Database, LucideIcon, ArrowUpRight, Crosshair } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import eventsData from "@/data/events.json";
import { useRef } from "react";

// Icon map to resolve string icon names to components
const iconMap: Record<string, LucideIcon> = {
    Terminal,
    Cpu,
    Shield,
    Code,
    Zap,
    Database,
    Crosshair
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
    objectPosition?: string;
    registrationFee?: string;
    prizePool?: {
        first: string;
        second: string;
    };
}

// Separate component for individual event banner to keep things clean
const EventBanner = ({ event, index }: { event: EventData; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full h-[35vh] min-h-[300px] flex items-center overflow-hidden mb-12 border border-white/10 group"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectPosition: event.objectPosition || 'center' }}
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
                {/* Sidebar Number / Decorative element */}
                <div className={`absolute ${isEven ? 'left-0' : 'right-0'} top-0 bottom-0 w-12 md:w-20 bg-black/50 backdrop-blur-sm border-r border-white/10 flex flex-col items-center justify-center z-20`}>
                    <span className="font-orbitron font-bold text-lg md:text-xl text-white/50 -rotate-90 whitespace-nowrap tracking-widest">
                        {String(index + 1).padStart(2, '0')} / EXPERIENTIA
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-2xl ${isEven ? 'pl-12 md:pl-24' : 'pr-12 md:pr-24 text-right'} flex flex-col ${isEven ? 'items-start' : 'items-end'}`}>

                    {/* Title */}
                    <h3 className="font-orbitron font-black text-3xl md:text-5xl text-white mb-2 uppercase leading-none tracking-tighter">
                        {event.title.split(' ')[0]}
                        {event.title.split(' ').length > 1 && (
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-500">
                                {event.title.split(' ').slice(1).join(' ')}
                            </span>
                        )}
                    </h3>

                    {/* Description */}
                    <p className="font-mono text-gray-300 text-xs md:text-sm mb-4 max-w-lg leading-relaxed mix-blend-screen">
                        {event.description}
                    </p>

                    {/* Meta Info (Fee, Prize) */}
                    {(event.registrationFee || event.prizePool) && (
                        <div className={`flex flex-wrap gap-6 mb-6 ${isEven ? 'justify-start' : 'justify-end'}`}>
                            {event.prizePool && (
                                <div className="flex flex-col">
                                    <span className="font-mono text-[10px] text-neon-green uppercase tracking-wider block mb-1">Prize Pool</span>
                                    <div className="flex gap-4">
                                        <div>
                                            <span className="text-[10px] text-gray-400 block">1st</span>
                                            <span className="font-orbitron text-lg text-white">{event.prizePool.first}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400 block">2nd</span>
                                            <span className="font-orbitron text-lg text-white">{event.prizePool.second}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {event.registrationFee && (
                                <div>
                                    <span className="font-mono text-[10px] text-neon-green uppercase tracking-wider block mb-1">Entry</span>
                                    <span className="font-orbitron text-lg text-white">{event.registrationFee}</span>
                                </div>
                            )}
                        </div>
                    )}



                    {/* Link */}
                    <Link
                        href={event.registrationLink}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2 bg-neon-green/10 border border-neon-green/50 hover:bg-neon-green hover:text-black transition-all duration-300"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest font-bold text-neon-green group-hover/btn:text-black">
                            Register Now
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-neon-green group-hover/btn:text-black" />
                    </Link>
                </div>
            </div>

            {/* Decorative Scanline */}
            <div className="absolute inset-0 pointer-events-none bg-[url('/scanline.png')] opacity-10" />
        </motion.div>
    );
};

export function Events() {
    return (
        <section className="relative bg-black py-20" id="events">

            <div className="relative z-10 mb-20 text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    className="font-orbitron font-black text-5xl md:text-7xl text-white uppercase tracking-tighter"
                >
                    Featured <span className="text-neon-green">Events</span>
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ margin: "-100px" }}
                    className="max-w-xs mx-auto h-1 bg-neon-green mt-4 transform origin-center"
                />
            </div>

            <div className="flex flex-col">
                {(eventsData as EventData[]).map((event, index) => (
                    <EventBanner key={event.id} event={event} index={index} />
                ))}
            </div>
        </section>
    );
}
