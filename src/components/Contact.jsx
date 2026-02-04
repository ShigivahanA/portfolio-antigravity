import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const titleRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const [submitState, setSubmitState] = useState("idle");
    const [result, setResult] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        setSubmitState("sending");

        const formData = new FormData(e.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                setSubmitState("success");
                e.target.reset();

                setTimeout(() => {
                    setSubmitState("idle");
                }, 3000);
            } else {
                setSubmitState("error");
                setTimeout(() => setSubmitState("idle"), 3000);
            }
        } catch {
            setSubmitState("error");
            setTimeout(() => setSubmitState("idle"), 3000);
        }
    };


    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Parallax & Reveal
            gsap.fromTo(titleRef.current.children,
                { y: 100, opacity: 0, rotate: 5 },
                {
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                }
            );

            // Form Stagger
            gsap.fromTo(formRef.current.children,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 70%",
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const copyEmail = async () => {
        const email = "shigivahan@gmail.com";
        try {
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(email);
                setCopied(true);
            } else {
                throw new Error("Clipboard API unavailable");
            }
        } catch (err) {
            // Fallback for mobile/older browsers
            const textArea = document.createElement("textarea");
            textArea.value = email;

            // Ensure element is not visible but part of DOM
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);

            textArea.focus();
            textArea.select();

            try {
                document.execCommand('copy');
                setCopied(true);
            } catch (e) {
                console.error("Copy failed", e);
            }

            document.body.removeChild(textArea);
        }

        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" ref={sectionRef} className="py-24 lg:py-40 bg-slate-900 text-retro-cream relative overflow-hidden">

            {/* Background Texture/Noise could go here */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-retro-red/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* LEFT: HEADING & INFO */}
                    <div className="flex flex-col justify-between">
                        <div ref={titleRef}>
                            <h2 className="text-[clamp(3.5rem,7vw,7rem)] leading-[0.85] font-serif font-black text-white mb-8 tracking-tighter">
                                LET’S BUILD<br />
                                <span className="text-outline-red">SOMETHING REAL.</span>
                            </h2>
                            <p className="text-xl text-slate-400 max-w-md leading-relaxed font-light mb-12">
                                I’m currently open to full-time roles and selective freelance projects.
                                <br /><br />
                                If you’re building a product that needs strong engineering, clean systems, and data-driven thinking, let’s talk.
                            </p>
                        </div>

                        {/* Email Magnetic Area */}
                        <div className="mb-12 lg:mb-0 group cursor-pointer" onClick={copyEmail}>
                            <p className="text-sm font-mono text-slate-500 mb-2 uppercase tracking-widest"> Preferred Channel_</p>
                            <div className="flex items-center gap-4 text-3xl md:text-5xl font-black font-sans hover:text-retro-red transition-colors duration-300">
                                <span>shigivahan@gmail.com</span>
                                <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: THE FORM */}
                    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-8 bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm relative">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-retro-red"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-retro-red"></div>

                        <div className="group">
                            <label className="block text-xs font-mono text-retro-red uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">01. What's your name?</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full bg-transparent border-b-2 border-slate-700 py-4 text-xl md:text-2xl font-serif text-white placeholder-slate-600 focus:outline-none focus:border-retro-red transition-colors"
                            />
                        </div>

                        <div className="group">
                            <label className="block text-xs font-mono text-retro-red uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">02. What's your email?</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="john@doe.com"
                                className="w-full bg-transparent border-b-2 border-slate-700 py-4 text-xl md:text-2xl font-serif text-white placeholder-slate-600 focus:outline-none focus:border-retro-red transition-colors"
                            />
                        </div>

                        <div className="group">
                            <label className="block text-xs font-mono text-retro-red uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors">03. tell me about your project</label>
                            <textarea
                                rows="4"
                                name="message"
                                required
                                placeholder="Tell me about your product, goals, or technical requirements..."
                                className="w-full bg-transparent border-b-2 border-slate-700 py-4 text-xl md:text-2xl font-serif text-white placeholder-slate-600 focus:outline-none focus:border-retro-red transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button type="submit" disabled={submitState === "sending"} className="mt-8 w-full group relative flex items-center justify-center gap-4 bg-retro-red text-white py-4 text-lg font-bold uppercase tracking-[0.2em] overflow-hidden border border-retro-red disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-retro-red/50">
                            <span className="relative z-10 flex items-center gap-3 group-hover:text-retro-red transition-colors duration-300">
                                {submitState === "sending" && (
                                    <span className="w-5 h-5 border-2 border-retro-red border-t-transparent rounded-full animate-spin"></span>
                                )}

                                {submitState === "idle" && "Initiate Contact"}
                                {submitState === "sending" && "Sending..."}
                                {submitState === "success" && "Message Sent!"}
                                {submitState === "error" && "Try Again"}
                            </span>
                            <FaPaperPlane className={`relative z-10 transition-all duration-300 group-hover:text-retro-red group-hover:translate-x-1 group-hover:-translate-y-1 ${submitState === "sending" ? "opacity-0" : "opacity-100"}`} />

                            {/* Hover Fill Effect */}
                            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                        </button>
                    </form>

                </div>
            </div>

            {/* Toast Notification */}
            <div className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-slate-900 px-6 py-3 rounded-full shadow-xl z-50 flex items-center gap-3 font-mono text-sm border border-retro-red/20 transition-all duration-300 whitespace-nowrap ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <FaCheck className="text-green-600" />
                <span>COPIED</span>
            </div>

        </section>
    );
};

export default Contact;
