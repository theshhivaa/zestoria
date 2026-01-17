"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}>
                        <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/zestoria-logo.png"
                                alt="Zestoria Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-orbitron font-bold text-2xl tracking-wider text-white group-hover:text-neon-green transition-colors duration-300">
                            ZESTORIA
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {["Events", "Gaming Hub", "Protocols", "Coordinators", "Schedule", "Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                                    className="text-gray-300 hover:text-neon-green px-3 py-2 text-sm font-medium tracking-widest uppercase transition-colors duration-300"
                                >
                                    {item}
                                </Link>
                            ))}

                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-cyber-black border-b border-neon-green/20"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {["Events", "Gaming Hub", "Protocols", "Coordinators", "Schedule", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className="text-gray-300 hover:text-neon-green block px-3 py-2 text-base font-medium uppercase tracking-wider"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full text-left mt-4 bg-neon-green/10 border border-neon-green text-neon-green px-4 py-3 text-sm font-bold uppercase tracking-widest">
                            Initiate Protocol
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
