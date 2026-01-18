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
                            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                                <Image
                                    src="/images/zestoria-logo.png"
                                    alt="Zestoria Logo"
                                    fill
                                    className="object-contain scale-110"
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
                                onClick={() => setIsHubOpen(true)}
                                className="group relative px-4 py-1.5 overflow-hidden border border-neon-green/30 active:border-neon-green transition-all duration-300"
                            >
                                <span className="absolute inset-0 w-full h-full bg-neon-green/5"></span>
                                <span className="relative font-orbitron font-bold text-neon-green text-xs tracking-[0.2em] uppercase">
                                    Menu
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Circular Navigation Hub Modal */}
            <CircularMenu
                isOpen={isHubOpen}
                onClose={() => setIsHubOpen(false)}
            />
        </>
    );
}
