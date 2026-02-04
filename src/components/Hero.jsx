import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const nameRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const imageContainerRef = useRef(null);
    const imageRef = useRef(null);
    const marqueeRef = useRef(null);
    const circleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // 1. Initial Set states for smooth entry [Pre-animation state]
            gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], { yPercent: 120, rotate: 3 });
            gsap.set(nameRef.current, { opacity: 0, x: -20 });
            gsap.set(imageContainerRef.current, { scale: 0.8, opacity: 0, rotate: -5 });
            gsap.set(contentRef.current, { opacity: 0, y: 20 });
            gsap.set(containerRef.current, { opacity: 1 }); // Make visible immediately to start anim

            // 2. The Sequence
            tl
                // Name Reveal
                .to(nameRef.current, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, 0.1)

                // Text Reveals with "Masked" effect (sliding up from hidden)
                .to(line1Ref.current, { yPercent: 0, rotate: 0, duration: 1.5, stagger: 0.1 }, 0.2)
                .to(line2Ref.current, { yPercent: 0, rotate: 0, duration: 1.5 }, 0.4)
                .to(line3Ref.current, { yPercent: 0, rotate: 0, duration: 1.5 }, 0.6)

                // Image Reveal: Scale up with a slight overshoot for "pop" but kept elegant
                .to(imageContainerRef.current, {
                    scale: 1,
                    opacity: 1,
                    rotate: 2,
                    duration: 1.8,
                    ease: "elastic.out(1, 0.6)"
                }, 0.5)

                // Subtitle content fade in
                .to(contentRef.current, { opacity: 1, y: 0, duration: 1 }, 1)

                // Marquee slide in from bottom
                .fromTo(marqueeRef.current,
                    { yPercent: 100 },
                    { yPercent: 0, duration: 1, ease: "power3.out" },
                    0.8
                );

            // 3. Continuous "Floating" Ambient Animations
            gsap.to(imageContainerRef.current, {
                y: 15,
                rotation: 4,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            gsap.to(circleRef.current, {
                scale: 1.2,
                opacity: 0.6,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // 4. Interactive Parallax (Smoother via QuickTo)
            const xTo = gsap.quickTo(imageRef.current, "x", { duration: 0.8, ease: "power3" });
            const yTo = gsap.quickTo(imageRef.current, "y", { duration: 0.8, ease: "power3" });
            const circleXTo = gsap.quickTo(circleRef.current, "x", { duration: 1.5, ease: "power3" });
            const circleYTo = gsap.quickTo(circleRef.current, "y", { duration: 1.5, ease: "power3" });

            const handleMouseMove = (e) => {
                const { clientX, clientY, innerWidth, innerHeight } = window;
                const x = (clientX / innerWidth - 0.5) * 30; // Movement range
                const y = (clientY / innerHeight - 0.5) * 30;

                xTo(x);
                yTo(y);
                circleXTo(-x * 2); // Reverse direction for depth
                circleYTo(-y * 2);
            };

            window.addEventListener("mousemove", handleMouseMove);

            // 5. Infinite Marquee ticker
            gsap.to(marqueeRef.current.children, {
                xPercent: -50,
                repeat: -1,
                duration: 25,
                ease: "linear",
            });

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-screen relative flex flex-col justify-center overflow-hidden bg-retro-cream opacity-0 pt-10 md:pt-16 pb-40 lg:py-0"
        >
            {/* Ambient Background Elements */}
            <div
                ref={circleRef}
                className="absolute top-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-retro-rose/40 to-retro-soft/30 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"
            ></div>

            {/* Retro Grain Overlay */}
            <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}>
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                {/* Text Column */}
                <div className="lg:col-span-7 flex flex-col justify-center z-20 text-center lg:text-left pt-8 lg:pt-0">

                    {/* Name Label */}
                    <div ref={nameRef} className="mb-4 lg:mb-6 pl-1">
                        <h2 className="font-mono text-sm md:text-base text-retro-red font-bold tracking-[0.2em] uppercase flex items-center justify-center lg:justify-start gap-4">
                            <span className="w-8 h-[2px] bg-retro-red inline-block"></span>
                            Hello, I'm Shigivahan
                        </h2>
                    </div>

                    {/* Masked Text Wrapper 1 */}
                    <div className="overflow-hidden mb-1 lg:mb-2">
                        <h1 ref={line1Ref} className="text-[clamp(3.5rem,8vw,8.5rem)] leading-[0.9] font-serif font-light italic text-slate-800 origin-bottom-left">
                            Full-Stack
                        </h1>
                    </div>

                    {/* Masked Text Wrapper 2 */}
                    <div className="overflow-hidden mb-1 lg:mb-2">
                        <h1 ref={line2Ref} className="text-[clamp(4rem,10vw,11rem)] leading-[0.85] font-sans font-black text-retro-red tracking-tighter uppercase pl-0 lg:pl-12 origin-bottom-left">
                            Engineer
                        </h1>
                    </div>

                    {/* Masked Text Wrapper 3 */}
                    <div className="overflow-hidden">
                        <h1 ref={line3Ref} className="whitespace-nowrap text-[clamp(3rem,7vw,7.5rem)] leading-[0.9] font-serif font-light text-slate-800 text-center lg:text-right pr-0 lg:pr-24 origin-bottom-right">
                            & Data Builder
                        </h1>
                    </div>

                    <div ref={contentRef} className="mt-12 flex flex-col md:flex-row items-center lg:items-start gap-6 lg:pl-12">
                        <p className="text-lg md:text-xl text-slate-700 max-w-lg font-medium border-l-0 md:border-l-4 border-retro-red md:pl-6 text-center md:text-left">
                            I design and build AI-powered products — blending machine learning, data platforms, and full-stack engineering for real-world impact.
                        </p>
                    </div>
                </div>

                {/* Hero Image Column */}
                <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center perspective-1000">
                    <div
                        ref={imageContainerRef}
                        className="relative z-10 w-full max-w-sm aspect-[4/5] group"
                    >
                        {/* Layer 1: Solid Architectural Block (Back) */}
                        <div className="absolute inset-0 bg-slate-900 w-full h-full transform translate-x-6 translate-y-6 z-0 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4"></div>

                        {/* Layer 2: Outline Frame (Middle) */}
                        <div className="absolute inset-0 border-2 border-retro-red/60 w-full h-full transform -translate-x-4 -translate-y-4 z-10 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>

                        {/* Layer 3: Main Image Wrapper (Front) */}
                        <div className="relative z-20 w-full h-full bg-slate-200 overflow-hidden shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                            <img
                                ref={imageRef}
                                src="https://res.cloudinary.com/dax0gizdq/image/upload/v1770103582/IMG_5912_vmguep.jpg"
                                alt="Shigivahan Portrait"
                                className="w-[110%] h-[110%] object-cover transition-transform duration-1000 transform -translate-x-[5%] -translate-y-[5%] scale-100 group-hover:scale-105"
                            />

                            {/* Texture Overlay on Image */}
                            <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply pointer-events-none"></div>
                        </div>

                        {/* Magnetic Badge */}
                        <div className="absolute -bottom-10 -left-6 z-30 bg-retro-cream text-slate-900 p-1 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-slate-900/10 animate-[spin_10s_linear_infinite]">
                            <svg className="w-24 h-24 md:w-28 md:h-28" viewBox="0 0 100 100">
                                <path id="curve" d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" fill="transparent" />
                                <text className="text-[11px] font-bold uppercase tracking-widest fill-current">
                                    <textPath href="#curve">
                                        • Scroll for more • View Work
                                    </textPath>
                                </text>
                            </svg>
                            <FaArrowDown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg text-retro-red" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Infinite Footer */}
            <div ref={marqueeRef} className="absolute bottom-0 left-0 w-full bg-retro-red text-retro-cream py-3 lg:py-4 overflow-hidden border-t-2 border-slate-900 z-30">
                <div className="flex whitespace-nowrap min-w-full">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center">
                            <span className="text-2xl md:text-4xl font-bold uppercase italic mx-6 tracking-widest">Data</span>
                            <span className="w-3 h-3 bg-slate-900 rotate-45"></span>
                            <span className="text-2xl md:text-4xl font-bold uppercase italic mx-6 tracking-widest">System</span>
                            <span className="w-3 h-3 bg-slate-900 rotate-45"></span>
                            <span className="text-2xl md:text-4xl font-bold uppercase italic mx-6 tracking-widest">Development</span>
                            <span className="w-3 h-3 bg-slate-900 rotate-45"></span>
                            <span className="text-2xl md:text-4xl font-bold uppercase italic mx-6 tracking-widest">Engineering</span>
                            <span className="w-3 h-3 bg-slate-900 rotate-45"></span>
                            <span className="text-2xl md:text-4xl font-bold uppercase italic mx-6 tracking-widest">Machine&nbsp;Learning</span>
                            <span className="w-3 h-3 bg-slate-900 rotate-45"></span>
                            <span className="text-2xl md:text-4xl font-bold uppercase italic mx-6 tracking-widest">Data&nbsp;Science</span>
                            <span className="w-3 h-3 bg-slate-900 rotate-45"></span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
