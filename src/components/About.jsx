import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaPaintBrush, FaRocket, FaTerminal, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const bioRef = useRef(null);
    const gridRef = useRef(null);
    const borderRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Header Reveal
            gsap.fromTo(headerRef.current.children,
                { y: 100, opacity: 0, rotate: 3 },
                {
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    }
                }
            );

            // 2. Border Expansion
            gsap.fromTo(borderRef.current,
                { width: 0 },
                {
                    width: "100%",
                    duration: 1.5,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "bottom 80%",
                    }
                }
            );

            // 3. Grid Reveal
            gsap.fromTo(gridRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 75%",
                    }
                }
            );

            // 4. Bio Reveal
            gsap.fromTo(bioRef.current,
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%"
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            icon: <FaLaptopCode />,
            title: "Full-Stack Systems",
            desc: "End-to-end web applications with clean architecture, secure APIs, and scalable backend logic."
        },
        {
            icon: <FaTerminal />,
            title: "Data & Analytics",
            desc: "Data pipelines, analysis, and ML-driven insights built to support real-world decisions."
        },
        {
            icon: <FaCode />,
            title: "Frontend Engineering",
            desc: "Modern, maintainable UI built with performance, accessibility, and structure in mind."
        },
        {
            icon: <FaRocket />,
            title: "Performance & Scale",
            desc: "Optimized applications designed for speed, reliability, and long-term growth."
        },
    ];


    return (
        <section id="about" ref={sectionRef} className="py-24 lg:py-40 bg-retro-cream text-slate-900 relative">

            <div className="container mx-auto px-6 md:px-12">

                {/* Massive Typographic Header */}
                <div ref={headerRef} className="flex flex-col items-center justify-center text-center mb-12">
                    <h2 className="text-[clamp(3rem,8vw,9rem)] leading-[0.8] font-serif font-black tracking-tighter mix-blend-multiply">
                        THE <span className="text-retro-red italic font-light">CRAFT.</span>
                    </h2>
                    <h2 className="text-[clamp(3rem,8vw,9rem)] leading-[0.8] font-sans font-black uppercase text-slate-900 tracking-tighter">
                        THE <span className="text-outline-red">CODE.</span>
                    </h2>
                </div>

                {/* Decorative Divider */}
                <div className="w-full flex justify-center mb-16">
                    <div ref={borderRef} className="h-1 bg-slate-900 w-full max-w-4xl relative">
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-retro-red rounded-full"></div>
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-4 h-4 bg-retro-red rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Column 1: Manifesto / Bio */}
                    <div className="lg:col-span-4 flex flex-col justify-start">
                        <div ref={bioRef}>
                            <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-6 text-retro-red flex items-center gap-2">
                                <div className="w-8 h-[2px] bg-retro-red"></div>
                                Manifesto
                            </h3>
                            <p className="text-xl md:text-2xl font-serif leading-relaxed text-slate-800">
                                "I believe software should be <span className="italic font-bold">intentional</span>.
                                Not just functional — but thoughtfully engineered."
                            </p>
                            <p className="mt-6 text-slate-600 font-medium leading-relaxed">
                                I build full-stack systems and data-driven applications with a strong focus on
                                clarity, performance, and scalability. From backend logic and APIs to analytics
                                and intelligent workflows, my work is designed to solve real problems — cleanly
                                and efficiently.
                            </p>

                            <div className="mt-10 p-6 bg-slate-900 text-retro-cream skew-x-[-3deg] inline-block shadow-[8px_8px_0px_#dc143c]">
                                <p className="font-mono text-sm">
                                    &gt; Current Status: <br />
                                    <span className="text-green-400 animate-pulse">● Open to Full-Stack & Data Roles</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Service Grid (Tactile Retro Cards) */}
                    <div className="lg:col-span-8">
                        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="group relative bg-white border-2 border-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#DC143C]">
                                    {/* Number Badge */}
                                    <div className="absolute top-0 right-0 bg-slate-900 text-retro-cream font-mono text-xs px-3 py-1 border-l-2 border-b-2 border-white">
                                        0{index + 1}
                                    </div>

                                    {/* Icon Area */}
                                    <div className="text-4xl text-retro-red mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-black font-sans uppercase tracking-tighter text-slate-900 mb-3 group-hover:text-retro-red transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed group-hover:text-slate-900">
                                        {service.desc}
                                    </p>

                                    {/* Bottom Decorative Bar */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-retro-red group-hover:w-full transition-all duration-500 ease-in-out"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
