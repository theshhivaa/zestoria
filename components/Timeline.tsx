"use client";

import { motion } from "framer-motion";

const schedule = [
    {
        time: "09:00",
        event: "Opening Ceremony",
        location: "Main Auditorium",
        status: "CONFIRMED",
    },
    {
        time: "11:00",
        event: "Keynote: Future of Technology",
        location: "Main Auditorium",
        status: "CONFIRMED",
    },
    {
        time: "14:00",
        event: "Technical Workshop",
        location: "Computer Lab",
        status: "OPEN",
    },
];

export function Timeline() {
    return (
        <section id="schedule" className="py-24 bg-cyber-dark-gray/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white italic uppercase mb-2">
                            Event <span className="text-white">Schedule <span className="inline-block w-8 h-1 bg-neon-green ml-2"></span></span>
                        </h2>
                        <p className="font-mono text-gray-500 text-sm tracking-widest uppercase">
                            Plan Your Day at Zestoria
                        </p>
                    </div>

                    <div className="flex gap-2">
                        <button className="px-6 py-2 bg-neon-green text-black font-bold text-xs uppercase tracking-widest">Day 1</button>
                        <button className="px-6 py-2 bg-transparent border border-white/20 text-gray-400 font-bold text-xs uppercase tracking-widest hover:border-white/50 transition-colors">Day 2</button>
                    </div>
                </div>

                <div className="space-y-4">
                    {schedule.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-center border border-white/10 bg-black/40 p-6 hover:border-neon-green/30 transition-colors group"
                        >
                            <div className="flex items-center gap-4 w-full md:w-1/4 mb-4 md:mb-0">
                                <span className="text-gray-500 font-mono text-xs">EVENT_ID_{index + 10}</span>
                                <span className="font-orbitron font-bold text-3xl text-neon-green">{item.time}</span>
                            </div>

                            <div className="w-full md:w-1/2">
                                <h3 className="font-orbitron font-bold text-xl text-white uppercase mb-1 group-hover:text-neon-green transition-colors">
                                    {item.event}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green"></div>
                                    <span className="font-mono text-gray-400 text-xs uppercase">{item.location}</span>
                                </div>
                            </div>

                            <div className="w-full md:w-1/4 flex justify-start md:justify-end mt-4 md:mt-0">
                                <span className="border border-white/20 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                                    {item.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
