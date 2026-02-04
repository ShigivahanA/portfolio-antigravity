import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFileDownload, FaBriefcase, FaGraduationCap } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const downloadBtnRef = useRef(null);
    const decorationRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.to(decorationRef.current, {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: true,
                }
            });

            // Content Reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            tl.fromTo(contentRef.current.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
            );

            // Button Attention Animation
            gsap.fromTo(downloadBtnRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "elastic.out(1, 0.5)",
                    delay: 0.5
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const vitals = [
        { label: "Experience", value: "0-1 Years", icon: <FaBriefcase /> },
        { label: "Education", value: "B.Tech CS", icon: <FaGraduationCap /> },
    ];

    return (
        <section id="resume" ref={sectionRef} className="py-32 bg-slate-900 relative overflow-hidden text-retro-cream">
            {/* Decorative Background Text */}
            <div ref={decorationRef} className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-[0.03] pointer-events-none select-none">
                <span className="text-[20vw] font-black font-sans uppercase leading-none">CV•RESUME</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div ref={contentRef} className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Header Ppill */}
                    <div className="inline-block mb-6 px-4 py-1 rounded-full border border-retro-red/30 bg-retro-red/10 animate-pulse">
                        <span className="text-retro-red font-mono text-xs tracking-widest uppercase">● Professional Dossier</span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-serif font-black mb-8 tracking-tight text-white flex flex-col md:flex-row items-center justify-center gap-4">
                        THE
                        <span className="relative group cursor-help">
                            <span className="text-outline-red">DOSSIER.</span>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-retro-cream text-slate-900 text-xs font-mono p-4 rounded-sm border-2 border-retro-red shadow-[4px_4px_0px_#DC143C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 text-left leading-relaxed">
                                <span className="font-bold block mb-1 text-retro-red">[dos-si-er] • noun</span>
                                A collection of documents about a particular person, event, or subject.
                                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-retro-cream border-r-2 border-b-2 border-retro-red transform rotate-45"></div>
                            </div>
                        </span>
                    </h2>

                    <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed">
                        A concise overview of my experience in full-stack engineering and data-driven systems,
                        including projects, research, and technical capabilities.
                        Currently open to <span className="text-retro-cream font-bold underline decoration-retro-red underline-offset-4">full-stack & data roles</span>.
                    </p>

                    {/* Quick Vitals */}
                    <div className="grid grid-cols-2 bg-white/5 backdrop-blur-sm border border-white/10 p-1 md:p-2 rounded-2xl mb-12 transform gap-1 md:gap-4">
                        {vitals.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl bg-slate-900 border border-white/5 min-w-[140px] md:min-w-[180px]">
                                <div className="text-retro-red text-xl md:text-2xl mb-2">{item.icon}</div>
                                <div className="font-bold text-xl md:text-2xl">{item.value}</div>
                                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">{item.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Download Button */}
                    <div ref={downloadBtnRef}>
                        <a
                            href="/resume.pdf"
                            download="Resume_Portfolio.pdf"
                            className="group relative inline-flex items-center gap-4 px-8 py-4 md:px-12 md:py-6 bg-retro-red text-retro-cream font-bold text-lg md:text-xl uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,20,60,0.6)] hover:-translate-y-1"
                        >
                            {/* Sliding Background */}
                            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out mix-blend-difference"></div>

                            <FaFileDownload className="relative z-10 text-2xl group-hover:scale-125 transition-transform duration-300" />
                            <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-300">Download Resume</span>
                        </a>
                        <p className="mt-4 text-xs font-mono text-slate-200">
                            *Last Updated: Feb 2026
                        </p>
                    </div>

                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute bottom-10 left-10 w-24 h-[2px] bg-retro-red/20 hidden md:block"></div>
            <div className="absolute bottom-10 left-10 w-[2px] h-24 bg-retro-red/20 hidden md:block"></div>
            <div className="absolute top-10 right-10 w-24 h-[2px] bg-retro-red/20 hidden md:block"></div>
            <div className="absolute top-10 right-10 w-[2px] h-24 bg-retro-red/20 hidden md:block"></div>
        </section>
    );
};

export default Resume;
