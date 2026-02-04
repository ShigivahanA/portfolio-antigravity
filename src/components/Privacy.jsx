import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";
import Footer from "./Footer";

const Privacy = () => {
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
                        <FaShieldAlt className="text-2xl" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em]">Classified_Document // P-01</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-sans uppercase tracking-tighter reveal-text">
                        Privacy Protocol.
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Sidebar Meta */}
                    <div className="md:col-span-4 space-y-8 reveal-text">
                        <div className="bg-slate-900 text-retro-cream p-6">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-retro-red mb-4">Status</h3>
                            <p className="font-bold text-lg">Active & Enforced</p>
                        </div>
                        <div>
                            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">Last Updated</h3>
                            <p className="font-mono text-sm border-b border-slate-300 pb-2 inline-block">
                                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-8 prose prose-lg prose-slate max-w-none reveal-text leading-relaxed">
                        <p className="font-bold text-xl">
                            By entering this digital domain, you acknowledge that your data is processed with the precision of a compiler and the discretion of a cold-storage vault.
                        </p>

                        <h3>1. Data Collection</h3>
                        <p>
                            We collect minimal data necessary for inter-system communication. This typically includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-retro-red">
                            <li>Device telemetry (Screen size, Browser agent) to optimize the visual matrix.</li>
                            <li>Communication logs (Form submissions) sent via encrypted channels.</li>
                        </ul>

                        <h3>2. Cookies & Tracking</h3>
                        <p>
                            This portfolio uses "Local Storage" and transient "Session Cookies" to maintain state coherence (e.g., scroll positions, animation timing). We do not use invasive third-party trackers. We respect the <code>Do Not Track</code> header signal.
                        </p>

                        <h3>3. External Uplinks</h3>
                        <p>
                            This terminal contains uplinks (links) to external networks such as GitHub, LinkedIn, and Twitter. We are not responsible for the data protocols of those foreign entities. Proceed with caution.
                        </p>

                        <div className="mt-12 p-6 border-2 border-slate-900/10 bg-slate-50">
                            <p className="text-sm font-mono text-slate-500 text-center">
                                * End of Protocol *
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Privacy;
