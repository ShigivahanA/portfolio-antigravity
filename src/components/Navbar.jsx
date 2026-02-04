import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    // Initial Appearance
    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
        );
    }, []);

    const navLinks = [
        { title: "Home", href: "#home" },
        { title: "About", href: "#about" },
        { title: "Portfolio", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    const handleMouseEnter = (e) => {
        gsap.to(e.target, { color: "#DC143C", scale: 1.05, duration: 0.3, ease: "power2.out" });
        // Underline animation
        gsap.to(e.target.querySelector('.underline-bar'), { width: "100%", duration: 0.3, ease: "power2.out" });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.target, { color: "#1e293b", scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(e.target.querySelector('.underline-bar'), { width: "0%", duration: 0.3, ease: "power2.out" });
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-center">
            <nav
                ref={navRef}
                className="bg-white/80 backdrop-blur-md border border-retro-red/20 shadow-xl rounded-2xl px-8 py-4 flex items-center justify-between w-full max-w-6xl transition-all duration-300 hover:shadow-2xl hover:border-retro-red/40"
            >
                {/* Retro Logo */}
                <a href="#" className="font-serif text-2xl font-bold tracking-tighter text-retro-red italic relative group">
                    <span className="relative z-10">Mellifluous.</span>
                    <span className="absolute left-0 bottom-0 w-full h-2 bg-retro-soft/50 -z-0 transform -skew-x-12 group-hover:h-full transition-all duration-500 ease-in-out"></span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="relative text-slate-800 font-medium text-sm tracking-widest uppercase hover:text-retro-red transition-colors"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {link.title}
                            <span className="underline-bar absolute left-0 -bottom-1 h-[2px] w-0 bg-retro-red"></span>
                        </a>
                    ))}
                </div>

                {/* Connect Button */}
                <a
                    href="#contact"
                    className="hidden md:block px-6 py-2 bg-retro-red text-retro-cream font-bold rounded-full text-sm hover:bg-retro-rose transition-all shadow-[4px_4px_0px_#1e293b] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#1e293b] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                >
                    Let's Connect
                </a>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-retro-red text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            {/* Full Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-retro-cream z-40 flex flex-col items-center justify-center space-y-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="font-serif text-4xl text-retro-red hover:text-retro-rose transition-colors italic"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.title}
                        </a>
                    ))}
                    <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-3xl text-retro-red">
                        <FaTimes />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
