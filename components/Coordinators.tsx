"use client";

import Image from "next/image";
import coordinatorsData from "@/data/coordinators.json";

interface Coordinator {
    id: string;
    name: string;
    role: string;
    image: string;
    objectPosition?: string;
}

const coordinators: Coordinator[] = coordinatorsData;

export function Coordinators() {
    return (
        <section id="coordinators" className="py-24 relative overflow-hidden bg-black pb-40">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-orbitron font-bold text-4xl md:text-6xl text-white italic uppercase mb-2 tracking-tighter">
                        Technical <span className="text-neon-green">Department</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-neon-green/30"></div>
                        <p className="font-mono text-gray-500 text-xs md:text-sm tracking-[0.4em] uppercase">
                            _Architects of Zestoria
                        </p>
                        <div className="h-px w-12 bg-neon-green/30"></div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                    {coordinators.map((person) => (
                        <div key={person.id} className="group relative w-full max-w-[280px]">
                            {/* The Box Container */}
                            <div className="relative overflow-hidden border border-neon-green/30 bg-black/50 backdrop-blur-sm p-4 transition-all duration-300 hover:border-neon-green hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] hover:-translate-y-2">

                                {/* Decorative Corner Accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green/50 group-hover:border-neon-green transition-colors duration-300"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green/50 group-hover:border-neon-green transition-colors duration-300"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green/50 group-hover:border-neon-green transition-colors duration-300 opacity-0 group-hover:opacity-100"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green/50 group-hover:border-neon-green transition-colors duration-300 opacity-0 group-hover:opacity-100"></div>

                                {/* Image Container */}
                                <div className="relative aspect-square w-full overflow-hidden mb-4 border border-white/5 bg-white/5 mx-auto">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        fill
                                        className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                        style={{ objectPosition: person.objectPosition || 'top' }}
                                    />

                                </div>

                                {/* Text Content */}
                                <div className="text-center relative z-10">
                                    <h3 className="font-orbitron font-bold text-lg text-white mb-2 tracking-wide uppercase group-hover:text-neon-green transition-colors duration-300">
                                        {person.name}
                                    </h3>
                                    <div className="h-px w-8 bg-neon-green/50 mx-auto my-2 group-hover:w-16 transition-all duration-300"></div>
                                    <p className="font-mono text-neon-green/80 text-[10px] tracking-widest uppercase font-bold">
                                        {person.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom scanned line decorative element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
        </section>
    );
}
