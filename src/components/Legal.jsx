import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaArrowLeft, FaGavel } from "react-icons/fa";
import Footer from "./Footer";

const Legal = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.fromTo(".reveal-text",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: "power2.out" }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-retro-cream text-slate-900 font-serif">

            {/* Header / Nav */}
            <div className="container mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-retro-red transition-colors font-mono text-xs uppercase tracking-widest mb-12">
                    <FaArrowLeft /> Return to Base
                </Link>

                <div className="border-b-4 border-slate-900 pb-8 mb-12">
                    <div className="flex items-center gap-4 text-retro-red mb-4">
                        <FaGavel className="text-2xl" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em]">Legal_Notice // L-02</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-sans uppercase tracking-tighter reveal-text">
                        Terms of Service.
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Sidebar Meta */}
                    <div className="md:col-span-4 space-y-8 reveal-text">
                        <div className="bg-slate-900 text-retro-cream p-6">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-retro-red mb-4">Jurisdiction</h3>
                            <p className="font-bold text-lg">Global / Internet</p>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">Effective Date</h3>
                            <p className="font-mono text-sm border-b border-slate-300 pb-2 inline-block">
                                {new Date().getFullYear()}.01.01
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-8 prose prose-lg prose-slate max-w-none reveal-text leading-relaxed">

                        <h3>1. Intellectual Property</h3>
                        <p>
                            All code, design, and creative assets housed within this digital portfolio are the intellectual property of the Developer, unless otherwise stated (e.g., open-source libraries or Unsplash imagery).
                        </p>
                        <p>
                            <strong>You may:</strong> View, inspect, and learn from the publicly visible source code.<br />
                            <strong>You may NOT:</strong> Clone, resell, or claim this specific portfolio design as your own work without explicit permission.
                        </p>

                        <h3>2. Limitation of Liability</h3>
                        <p>
                            This website is provided "as is". While we strive for 99.9% uptime and pixel-perfect rendering, we cannot be held liable for any browser crashes, GPU overheating caused by excessive shaders, or existential dread induced by the profoundness of the design.
                        </p>

                        <h3>3. Freelance Engagement</h3>
                        <p>
                            Any work agreements initiated through the "Contact" terminal will be subject to a separate, mutually signed contract detailing scope, deliverables, and payment terms. This website serves as a showcase, not a binding offer of service.
                        </p>

                        <div className="mt-12 p-6 border-2 border-slate-900/10 bg-slate-50">
                            <p className="text-sm font-mono text-slate-500 text-center uppercase tracking-widest">
                                * Governed by the Laws of Code *
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Legal;
