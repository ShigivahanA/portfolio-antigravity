import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const footerRef = useRef(null);
    const marqueeRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Auto-update year
    const year = new Date().getFullYear();

    return (
        <footer ref={footerRef} className="bg-retro-cream text-slate-900 pt-20 lg:pt-32 pb-8 relative overflow-hidden text-center md:text-left">

            {/* Top Grid Layer */}
            <div className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-900/10 pb-12">

                    {/* Brand / Manifesto */}
                    <div className="md:col-span-4 flex flex-col justify-between h-full items-center md:items-start">
                        <div>
                            <h3 className="text-3xl font-black font-sans uppercase mb-6 tracking-tighter">
                                Code <br /> & Systems.
                            </h3>
                            <p className="text-slate-600 font-serif max-w-xs leading-relaxed">
                                Building full-stack applications and data-driven products with clarity, performance, and intent.
                                Based in India.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-2">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-retro-red mb-6">Navigation</h4>
                        <ul className="space-y-3 font-bold uppercase tracking-wide text-sm">
                            {['About', 'Resume', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`/#${item.toLowerCase()}`} className="hover:text-retro-red hover:pl-2 transition-all duration-300 block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="md:col-span-2">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-retro-red mb-6">Connect</h4>
                        <ul className="space-y-3 font-bold uppercase tracking-wide text-sm text-slate-900">
                            <li><a href="https://github.com/shigivahanA" className="hover:text-retro-red transition-colors flex items-center justify-center md:justify-start gap-2"><FaGithub /> GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/shigivahan/" className="hover:text-retro-red transition-colors flex items-center justify-center md:justify-start gap-2"><FaLinkedin /> LinkedIn</a></li>
                            <li><a href="https://x.com/Shigi_07" className="hover:text-retro-red transition-colors flex items-center justify-center md:justify-start gap-2 opacity-50 cursor-not-allowed pointer-events-none"><FaTwitter /> Twitter</a></li>
                            <li><a href="https://www.instagram.com/shigivahan/" className="hover:text-retro-red transition-colors flex items-center justify-center md:justify-start gap-2 opacity-50 cursor-not-allowed pointer-events-none"><FaInstagram /> Instagram</a></li>
                        </ul>
                    </div>

                    {/* Meta / Time */}
                    <div className="md:col-span-4 flex flex-col items-center md:items-end justify-between">
                        <div className="text-center md:text-right hidden md:block">
                            <p className="font-mono text-xs text-slate-500 mb-1">LOCAL TIME — IST</p>
                            <p className="font-mono text-xl text-slate-900 font-black">
                                {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })}
                            </p>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-retro-red transition-colors mt-8 md:mt-0"
                        >
                            Scroll to Top
                            <span className="p-2 border border-slate-900/20 rounded-full group-hover:bg-retro-red group-hover:border-retro-red group-hover:text-white transition-all">
                                <FaArrowUp />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Massive Marquee / Watermark */}
            <div className="w-full overflow-hidden select-none pointer-events-none opacity-10">
                <div ref={marqueeRef} className="whitespace-nowrap">
                    <h1 className="text-[15vw] leading-[0.8] font-black font-sans text-transparent text-outline-red tracking-tighter">
                        PORTFOLIO ©{year} — ENGINEERED & BUILT.
                    </h1>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-6 mt-12 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 uppercase tracking-widest">
                <p>Engineered & built from scratch.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link to="/privacy" className="hover:text-retro-red transition-colors">Privacy</Link>
                    <Link to="/legal" className="hover:text-retro-red transition-colors">Legal</Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
