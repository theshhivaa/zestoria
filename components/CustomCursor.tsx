"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible]);

    // Hide on touch devices or if not moved yet
    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
            {/* Main Dot */}
            <motion.div
                className="absolute w-3 h-3 bg-neon-green rounded-full shadow-[0_0_10px_2px_rgba(57,255,20,0.8)]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="absolute border border-neon-green rounded-full"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    width: isHovering ? 60 : 40,
                    height: isHovering ? 60 : 40,
                    opacity: isHovering ? 1 : 0.5,
                    backgroundColor: isHovering ? "rgba(57, 255, 20, 0.1)" : "transparent",
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8,
                }}
            />
        </div>
    );
}
