"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { CircularMenu } from "./CircularMenu";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHubOpen, setIsHubOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 flex items-center gap-2 group cursor-pointer" onClick={(e) => {
                            if (!isHubOpen) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
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
                                <button
                                    onClick={() => setIsHubOpen(true)}
                                    className="group relative px-6 py-2 overflow-hidden border border-neon-green/30 hover:border-neon-green transition-all duration-300"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-neon-green/0 group-hover:bg-neon-green/10 transition-colors"></span>
                                    <span className="relative font-orbitron font-bold text-gray-300 group-hover:text-neon-green text-sm tracking-[0.2em] uppercase">
                                        Menu
                                    </span>
                                </button>
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
                        <div className="px-4 pt-4 pb-8 space-y-4 text-center">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setIsHubOpen(true);
                                }}
                                className="block w-full font-orbitron font-bold text-2xl text-neon-green tracking-widest uppercase py-4 border-y border-white/5"
                            >
                                Menu
                            </button>
                            <button className="w-full bg-neon-green/10 border border-neon-green text-neon-green px-4 py-3 text-sm font-bold uppercase tracking-widest">
                                Initiate Protocol
                            </button>
                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Circular Navigation Hub Modal */}
            <CircularMenu
                isOpen={isHubOpen}
                onClose={() => setIsHubOpen(false)}
            />
        </>
    );
}
