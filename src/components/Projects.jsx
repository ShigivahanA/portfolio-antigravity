import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { data } from "../data/data";

gsap.registerPlugin(ScrollTrigger);



const Projects = () => {
    const sectionRef = useRef(null);
    const desktopContainerRef = useRef(null);
    const [activeProject, setActiveProject] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // DESKTOP LOGIC (Sticky Scroll)
            mm.add("(min-width: 1024px)", () => {
                ScrollTrigger.create({
                    trigger: desktopContainerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    pin: ".image-column",
                    scrub: true,
                });

                data.forEach((project, index) => {
                    ScrollTrigger.create({
                        trigger: `#project-text-${index}`,
                        start: "top center",
                        end: "bottom center",
                        onToggle: (self) => {
                            if (self.isActive) setActiveProject(index);
                        }
                    });
                });
            });

            // MOBILE LOGIC (Card Reveal)
            mm.add("(max-width: 1023px)", () => {
                const cards = gsap.utils.toArray(".mobile-project-card");
                cards.forEach((card) => {
                    gsap.fromTo(card,
                        { y: 50, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                            }
                        }
                    );
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="bg-retro-cream relative pt-20 lg:pt-24 lg:pb-0 overflow-hidden">

            {/* Shared Header */}
            <div className="container mx-auto px-6 mb-12 lg:mb-20 text-center">
                <h2 className="text-[clamp(3rem,8vw,6rem)] leading-[0.9] font-serif font-black text-slate-900 tracking-tighter">
                    FEATURED <br className="md:hidden" /> <span className="text-outline-red">WORKS.</span>
                </h2>
            </div>

            {/* =========================================
                MOBILE VIEW: Retro Card Stack
                "Completely Reinvented" - No shrinking
               ========================================= */}
            <div className="lg:hidden container mx-auto px-6 pb-24 flex flex-col gap-12">
                {data.map((project, index) => (
                    <div key={index} className="mobile-project-card relative">
                        {/* The "File Folder" Tab */}
                        <div className="absolute -top-8 left-0 bg-slate-900 text-retro-cream px-4 py-2 font-mono font-bold text-sm rounded-t-lg z-0">
                            PROJECT_ID_#{project.id}
                        </div>

                        {/* Card Container */}
                        <div className="bg-white border-2 border-slate-900 shadow-[8px_8px_0px_#1e293b] rounded-tr-lg rounded-b-lg overflow-hidden relative z-10">

                            {/* Image Area */}
                            <div className="relative aspect-[4/3] border-b-2 border-slate-900 overflow-hidden group">
                                <div className="absolute inset-0 bg-retro-red/10 mix-blend-multiply opacity-30 z-10 pointer-events-none"></div>
                                <img
                                    src={project.images.hero}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale contrast-125"
                                />
                                {/* Overlay Category */}
                                <div className="absolute top-4 right-4 bg-retro-cream/90 text-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-widest border border-slate-900 shadow-sm z-20">
                                    {project.category}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6">
                                <h3 className="text-3xl font-black font-sans uppercase text-slate-900 mb-3 leading-none">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="flex items-center gap-1 text-[10px] font-mono border border-slate-300 px-2 py-1 rounded-full text-slate-500">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-lg text-slate-700 font-serif leading-relaxed mb-6">
                                    {project.desc}
                                </p>

                                <Link to={`/project/${project.id}`} className="block w-full bg-slate-900 text-retro-cream text-center font-bold uppercase tracking-widest py-3 hover:bg-retro-red transition-colors duration-300">
                                    View Project
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* =========================================
                DESKTOP VIEW: God Mode Sticky Layout
                "The Original Design"
               ========================================= */}
            <div ref={desktopContainerRef} className="hidden lg:grid container mx-auto px-4 md:px-8 grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16">

                {/* Scrollable Text Column */}
                <div className="flex flex-col pb-24">
                    {data.map((project, index) => (
                        <div
                            id={`project-text-${index}`}
                            key={index}
                            className="min-h-[90vh] flex flex-col justify-center py-20"
                        >
                            <div className="border-l-4 border-slate-900 pl-8 relative ml-0">
                                <span className={`absolute -left-[3rem] top-0 text-6xl font-black font-mono transition-colors duration-500 ${activeProject === index ? 'text-retro-red opacity-100' : 'text-slate-900/10'}`}>
                                    {project.id}
                                </span>
                                <h3 className="text-5xl font-black font-sans uppercase text-slate-900 mb-4 tracking-tight leading-tight">
                                    {project.title}
                                </h3>
                                <span className="inline-block bg-retro-red text-retro-cream text-xs font-bold px-3 py-1 mb-6 uppercase tracking-widest rounded-full">
                                    {project.category}
                                </span>
                                <p className="text-xl text-slate-700 font-serif leading-relaxed mb-6 max-w-md">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-4 mb-8">
                                    {project.tech.map((t, i) => (
                                        <div key={i} className="flex items-center gap-2 text-slate-600 font-mono text-sm border border-slate-300 px-3 py-1 rounded-sm bg-white">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                                <Link to={`/project/${project.id}`} className="inline-flex items-center gap-2 text-retro-red font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all hover:gap-4 text-base">
                                    View Project <FaExternalLinkAlt />
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className="h-[20vh]"></div>
                </div>

                {/* Sticky Image Column */}
                <div className="image-column hidden lg:flex h-screen sticky top-0 flex-col justify-center items-center py-24">
                    <div className="relative w-full aspect-[4/3] max-w-xl">
                        {data.map((project, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${activeProject === index
                                    ? "opacity-100 translate-y-0 rotate-0 z-20"
                                    : "opacity-0 translate-y-12 rotate-3 z-10"
                                    }`}
                            >
                                <div className="w-full h-full bg-slate-200 border-4 border-slate-900 p-2 shadow-[20px_20px_0px_#DC143C]">
                                    <div className="w-full h-full overflow-hidden grayscale contrast-125 relative group">
                                        <div className="absolute inset-0 bg-retro-red/10 mix-blend-multiply opacity-50"></div>
                                        <img
                                            src={project.images.hero}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-4 left-[-20px] w-32 h-8 bg-retro-cream/90 rotate-[-45deg] shadow-sm z-30"></div>
                                        <div className="absolute bottom-4 right-[-20px] w-32 h-8 bg-retro-cream/90 rotate-[-45deg] shadow-sm z-30"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
