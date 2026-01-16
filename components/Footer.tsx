import { Cpu, Twitter, Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Cpu className="h-6 w-6 text-neon-green" />
                            <span className="font-orbitron font-bold text-xl tracking-wider text-white">
                                NEURAL<span className="text-neon-green">OVERLOAD</span>
                            </span>
                        </div>
                        <p className="font-mono text-gray-500 text-xs leading-relaxed max-w-xs">
                            A Global Convergence of Intelligence, Technology, and Innovation.
                            Live level protocols. Secure your humanity now.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Subroutines</h4>
                        <ul className="space-y-4 font-mono text-xs text-gray-400">
                            <li><a href="#" className="hover:text-neon-green transition-colors">Hackathons_2026</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Paper_Presentation</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Robo_Wars</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Data</h4>
                        <ul className="space-y-4 font-mono text-xs text-gray-400">
                            <li><a href="#" className="hover:text-neon-green transition-colors">Frequently_Asked</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">Security_Policy</a></li>
                            <li><a href="#" className="hover:text-neon-green transition-colors">System_Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Uplink</h4>
                        <div className="flex gap-4">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-black hover:bg-neon-green hover:border-transparent transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-mono text-gray-600 text-[10px] uppercase">
                        © 2026 Neural Overload. All Systems Operational.
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="font-mono text-[10px] uppercase">Server Status: Online</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
