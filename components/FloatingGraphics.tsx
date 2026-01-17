"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function FloatingGraphics() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Floating Square 1 */}
            <motion.div
                style={{ y: y1, rotate }}
                className="absolute top-[20%] left-[10%] w-32 h-32 border border-neon-green/10 rounded-lg"
            />

            {/* Floating Square 2 */}
            <motion.div
                style={{ y: y2, rotate: -rotate }}
                className="absolute top-[60%] right-[15%] w-48 h-48 border border-neon-green/5 rounded-full"
            />

            {/* Floating Square 3 */}
            <motion.div
                style={{ y: y3, rotate: rotate }}
                className="absolute top-[80%] left-[20%] w-24 h-24 border border-neon-green/10 rotate-45"
            />

            {/* Circuit Line 1 */}
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute top-0 right-[10%] w-px h-full bg-gradient-to-b from-transparent via-neon-green/20 to-transparent origin-top"
            />

            {/* Circuit Line 2 */}
            <motion.div
                style={{ scaleY: scrollYProgress }}
                className="absolute top-0 left-[5%] w-px h-full bg-gradient-to-b from-transparent via-neon-green/10 to-transparent origin-top"
            />

            {/* Background Grain/Noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        </div>
    );
}
