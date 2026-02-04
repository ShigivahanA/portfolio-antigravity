import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { data } from "../data/data";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { id } = useParams();
    // Logic to find project and determine previous/next (for navigation)
    const projectIndex = data.findIndex((p) => p.id === id);
    const project = data[projectIndex];
    const nextProject = data[(projectIndex + 1) % data.length];

    const containerRef = useRef(null);
    const heroImageRef = useRef(null);
    const textRef = useRef(null);
    const detailsRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {

            // HERO: Parallax Image
            gsap.to(heroImageRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // HERO: Text Reveal
            gsap.fromTo(textRef.current.children,
                { y: 100, opacity: 0, rotate: 2 },
                {
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: "power4.out",
                    delay: 0.2
                }
            );

            // CONTENT: Stagger Reveal
            gsap.fromTo(detailsRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: detailsRef.current,
                        start: "top 80%",
                    }
                }
            );

            // NEXT PROJECT: Slide Up
            gsap.fromTo(navRef.current,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: navRef.current,
                        start: "top 90%",
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, [id]);

    if (!project) return <div className="min-h-screen flex items-center justify-center bg-retro-cream text-slate-900 font-serif text-3xl">Project Not Found.</div>;

    return (
        <div ref={containerRef} className="bg-retro-cream text-slate-900 overflow-x-hidden">

            {/* =======================
                HERO SECTION 
               ======================= */}
            <div className="relative w-full h-[60vh] lg:h-[85vh] overflow-hidden flex items-end pb-12 lg:pb-24">
                {/* Background Image Parallax Layer */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
                    <img
                        ref={heroImageRef}
                        src={project.images.secondary[0]}
                        alt={project.title}
                        className="w-full h-[120%] object-cover object-center grayscale contrast-125"
                    />
                </div>

                {/* Hero Text */}
                <div ref={textRef} className="container mx-auto px-6 relative z-20 text-retro-cream">
                    <Link to="/" className="inline-flex items-center gap-2 text-retro-cream/80 hover:text-retro-red uppercase tracking-widest text-xs font-mono font-bold mb-6 transition-colors">
                        <FaArrowLeft /> INDEX_Back
                    </Link>
                    <div className="border-l-4 border-retro-red pl-6 lg:pl-10">
                        <h1 className="text-5xl md:text-[12vw] leading-[0.85] font-black font-sans uppercase tracking-tighter mb-4 text-retro-cream">
                            {project.title}
                        </h1>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-lg md:text-2xl font-serif italic text-retro-cream/90">
                            <span>— {project.category}</span>
                            <span className="hidden md:inline">•</span>
                            <span>{project.year}</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* =======================
                DETAILS SECTION (Magazine Layout)
               ======================= */}
            <div className="container mx-auto px-6 py-20 lg:py-32 relative z-10 bg-retro-cream">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* LEFT SIDEBAR (Sticky) */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 space-y-12">

                            {/* Spec Sheet Table */}
                            <div className="border-t-2 border-slate-900 pt-6">
                                <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-6">Specifications</h3>
                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex justify-between border-b border-slate-300 pb-2">
                                        <span className="text-slate-500">CLIENT/EVENT</span>
                                        <span className="font-bold uppercase text-right">{project.client}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-300 pb-2">
                                        <span className="text-slate-500">ROLE</span>
                                        <span className="font-bold uppercase text-right">{project.role}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-300 pb-2">
                                        <span className="text-slate-500">YEAR</span>
                                        <span className="font-bold text-right">{project.year}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Chips */}
                            <div>
                                <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-6">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="bg-slate-900 text-retro-cream px-3 py-1 font-mono text-xs font-bold uppercase rounded-full border border-slate-900 hover:bg-white hover:text-slate-900 transition-colors cursor-default">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-4">
                                {project.link && project.link !== "#" && (
                                    <a href={project.link} className="flex items-center justify-between bg-retro-red text-white p-5 font-bold uppercase tracking-widest hover:bg-slate-900 transition-all shadow-[6px_6px_0px_#1e293b] hover:shadow-[2px_2px_0px_#1e293b] hover:translate-x-[2px] hover:translate-y-[2px]">
                                        Live Site <FaExternalLinkAlt />
                                    </a>
                                )}
                                {project.github && project.github !== "" && (
                                    <a href={project.github} className="flex items-center justify-between border-2 border-slate-900 text-slate-900 p-5 font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-retro-cream transition-colors">
                                        Github <FaGithub />
                                    </a>
                                )}
                            </div>

                        </div>
                    </div>


                    {/* RIGHT CONTENT (Narrative) */}
                    <div ref={detailsRef} className="lg:col-span-8 space-y-20">
                        {/* Intro Statement */}
                        <div className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                            "{project.tagline}"
                        </div>

                        {/* Main Body */}
                        <div className="prose prose-xl prose-slate font-serif text-slate-600 max-w-none">
                            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-retro-red first-letter:float-left first-letter:mr-6 first-letter:mt-[-10px]">
                                {project.desc}
                            </p>
                        </div>

                        {/* Challenge / Solution Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white border-2 border-slate-900 p-8 md:p-12 shadow-[12px_12px_0px_#fca5a5]">
                            <div>
                                <h4 className="flex items-center gap-3 font-black font-sans uppercase text-retro-red mb-4 text-xl">
                                    <span className="w-3 h-3 bg-retro-red rounded-full"></span> The Challenge
                                </h4>
                                <p className="text-slate-700 leading-relaxed">{project.challenge}</p>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-3 font-black font-sans uppercase text-green-700 mb-4 text-xl">
                                    <span className="w-3 h-3 bg-green-700 rounded-full"></span> The Solution
                                </h4>
                                <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="space-y-8">
                            <div className="w-full bg-slate-200 border-2 border-slate-900 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:opacity-0 transition-opacity duration-500"></div>
                                <img src={project.images.hero} alt="Detail view" className="w-full h-auto block" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-slate-100 border-2 border-slate-900 flex items-center justify-center font-mono text-xs text-slate-400">
                                    <img
                                        src={project.images.secondary[0]}
                                        alt="Mobile view"
                                        className="w-full h-auto block grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="bg-slate-100 border-2 border-slate-900 flex items-center justify-center font-mono text-xs text-slate-400">
                                    <img
                                        src={project.images.secondary[1]}
                                        alt="Dashboard view"
                                        className="w-full h-auto block grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* =======================
                NEXT PROJECT NAVIGATOR
               ======================= */}
            <div ref={navRef} className="border-t border-slate-900/10">
                <Link to={`/project/${nextProject.id}`} className="block group relative overflow-hidden bg-slate-900 text-retro-cream h-[40vh] flex flex-col justify-center items-center text-center">

                    {/* Hover Image Reveal */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay">
                        <img src={nextProject.image} alt={nextProject.title} className="w-full h-full object-cover grayscale" />
                    </div>

                    <div className="relative z-10 space-y-2">
                        <span className="font-mono text-xs tracking-[0.3em] text-retro-red uppercase">Next Case File</span>
                        <h2 className="text-4xl md:text-8xl font-black font-sans uppercase tracking-tighter group-hover:scale-110 transition-transform duration-700 ease-in-out text-retro-cream">
                            {nextProject.title}
                        </h2>
                        <div className="flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 text-xl font-serif italic text-retro-red">
                            View Project <FaArrowRight />
                        </div>
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
