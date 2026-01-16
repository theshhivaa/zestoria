"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Radio, Database } from "lucide-react";

const domains = [
    {
        title: "Coding & Development",
        description: "Test your programming skills in hackathons, debugging challenges, and coding competitions.",
        icon: Shield,
        link: "Explore Events >",
    },
    {
        title: "AI & Machine Learning",
        description: "Explore the frontier of artificial intelligence and build intelligent solutions.",
        icon: Brain,
        link: "Learn More >",
    },
    {
        title: "Cybersecurity",
        description: "Master the art of ethical hacking and network security through CTF challenges.",
        icon: Radio,
        link: "Join Challenge >",
    },
    {
        title: "Robotics & Hardware",
        description: "Design, build, and battle in the ultimate robotics arena showdown.",
        icon: Database,
        link: "View Details >",
    },
];

export function Domains() {
    return (
        <section id="events" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-white italic uppercase mb-2">
                        Event <span className="text-neon-green">Tracks <span className="inline-block w-8 h-1 bg-neon-green ml-2 animate-pulse"></span></span>
                    </h2>
                    <p className="font-mono text-gray-500 text-sm tracking-widest">
                        CHOOSE YOUR SPECIALIZATION
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {domains.map((domain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-cyber-dark-gray/50 border border-white/10 p-8 hover:border-neon-green/50 transition-colors duration-300"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <domain.icon className="w-24 h-24 text-neon-green" />
                            </div>

                            <domain.icon className="w-8 h-8 text-neon-green mb-6" />

                            <h3 className="font-orbitron font-bold text-2xl text-white mb-4 uppercase group-hover:text-neon-green transition-colors">
                                {domain.title}
                            </h3>

                            <p className="font-mono text-gray-400 text-sm mb-8 leading-relaxed max-w-sm">
                                {domain.description}
                            </p>

                            <button className="text-xs font-bold font-mono text-neon-green tracking-widest uppercase hover:underline">
                                {domain.link}
                            </button>

                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
