import contactData from "@/data/contact.json";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* About Section */}
                    <div>
                        <h3 className="font-orbitron font-bold text-xl tracking-wider text-white mb-4">
                            ZESTORIA <span className="text-neon-green">TWENTY SIX</span>
                        </h3>
                        <p className="font-mono text-gray-500 text-xs leading-relaxed mb-6">
                            {contactData.tagline}
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Contact Us</h4>
                        <ul className="space-y-4 font-mono text-xs text-gray-400">
                            <li>
                                <span className="text-neon-green">Email:</span>{" "}
                                <a href={`mailto:${contactData.contact.email}`} className="hover:text-neon-green transition-colors">
                                    {contactData.contact.email}
                                </a>
                            </li>
                            <li>
                                <span className="text-neon-green">Phone:</span>{" "}
                                <a href={`tel:${contactData.contact.phone}`} className="hover:text-neon-green transition-colors">
                                    {contactData.contact.phone}
                                </a>
                            </li>
                            <li>
                                <span className="text-neon-green">Alt Phone:</span>{" "}
                                <a href={`tel:${contactData.contact.alternatePhone}`} className="hover:text-neon-green transition-colors">
                                    {contactData.contact.alternatePhone}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Address</h4>
                        <address className="font-mono text-xs text-gray-400 not-italic leading-relaxed">
                            <p>{contactData.address.street}</p>
                            <p>{contactData.address.area}</p>
                            <p>{contactData.address.city}, {contactData.address.state}</p>
                            <p>{contactData.address.pincode}</p>
                            <p>{contactData.address.country}</p>
                            <a
                                href={contactData.address.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 mt-4 text-neon-green hover:underline decoration-neon-green/30 underline-offset-4 transition-all"
                            >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                View on Google Maps
                            </a>
                        </address>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Follow Us</h4>
                        <ul className="space-y-4 font-mono text-xs text-gray-400">
                            <li>
                                <a
                                    href={contactData.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 hover:text-neon-green transition-colors"
                                >
                                    <span className="text-neon-green">Instagram:</span> @codingclubsgasc
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="border-t border-white/5 pt-8 mb-8">
                    <div className="flex flex-wrap justify-center gap-8">
                        {contactData.quickLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.href}
                                className="font-mono text-xs text-gray-400 hover:text-neon-green transition-colors uppercase tracking-widest"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-mono text-gray-600 text-[10px] uppercase">
                        {contactData.copyright}
                    </p>
                    <p className="font-mono text-gray-600 text-[10px] uppercase">
                        {contactData.collegeName}
                    </p>
                </div>
            </div>
        </footer>
    );
}
