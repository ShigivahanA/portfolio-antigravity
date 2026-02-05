import { FaAndroid, FaBrain, FaPython, FaReact, FaNode } from "react-icons/fa";
import { SiFlutter, SiMongodb, SiTensorflow, SiStreamlit, SiExpress, SiVite, SiPuppeteer } from "react-icons/si";
import { RiOpenaiFill, RiTailwindCssFill } from "react-icons/ri";
import { DiDart } from "react-icons/di";
import { LuSpeech } from "react-icons/lu";
import { TbBrandKotlin, TbBrandReactNative } from "react-icons/tb";

export const data = [

    {
        id: "01",
        title: "Glioma Grading",
        category: "Deep Learning",
        tagline: "AI-Assisted Tumor Classification.",
        desc: "Multi-model deep learning pipeline using ResNet50 and EfficientNet to classify MRI scans into HGG and LGG tumor grades with enhanced accuracy through feature fusion.",
        challenge: "Handling noisy, imbalanced medical datasets and ensuring generalization across MRI sources.",
        solution: "Applied transfer learning, data augmentation, and deep feature fusion to improve robustness and classification accuracy.",
        tech: [<FaPython />, <SiTensorflow />, "ResNet50", "EfficientNet"],
        images: {
            hero: "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116477/glio_fjacqy.webp",
            secondary: [
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116479/glio3_rptuv9.webp", // mobile / UI
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116478/glio2_yutjhz.webp"  // dashboard / logic
            ]
        },
        link: "",
        github: "https://github.com/ShigivahanA/Gliomagrading",
        client: "Capstone Project",
        role: "Full Stack Dev",
        year: "2025"
    },


    {
        id: "02",
        title: "LevyLoom",
        category: "FinTech & AI",
        tagline: "Tax Calculations, Simplified.",
        desc: "Cross-platform tax calculator built in 36 hours for Android, iOS, and web. Streamlines tax computation and integrates ChatGPT for instant, conversational assistance with a smooth, responsive user experience.",
        challenge: "Delivering real-time AI assistance while ensuring performance and platform consistency within a tight hackathon timeline.",
        solution: "Built a Flutter-based frontend with optimized API handling and seamless ChatGPT integration to maintain low latency across devices.",
        tech: [<SiFlutter />, <DiDart />, <TbBrandKotlin />, <RiOpenaiFill />],
        images: {
            hero: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
            secondary: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // mobile / UI
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"  // dashboard / logic
            ]
        },
        link: "",
        github: "",
        client: "Hackathon",
        role: "Flutter Developer",
        year: "2024"
    },

    {
        id: "03",
        title: "Flavor Forecast",
        category: "Machine Learning",
        tagline: "Demand Forecasting for FMCG.",
        desc: "Time-series forecasting system for FMCG supply chains using SARIMAX and Random Forest models to predict demand and optimize production planning.",
        challenge: "Managing seasonality, sudden demand spikes, and overfitting in early model iterations.",
        solution: "Adopted a hybrid modeling approach combining statistical and machine learning methods for improved prediction stability.",
        tech: [<FaPython />, "SARIMAX", "Random Forest", <SiStreamlit />],
        images: {
            hero: "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116476/flav11_tmaw5t.png",
            secondary: [
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116475/flav3_ik3icu.png", // mobile / UI
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116475/flav2_esioky.png"  // dashboard / logic
            ]
        },
        link: "",
        github: "https://github.com/JaiAnandaKrishnaa/Flavour_Forecast",
        client: "Project",
        role: "Predictive Analyst",
        year: "2023"
    },

    {
        id: "04",
        title: "Price Elasticity",
        category: "Data Science",
        tagline: "Smarter Pricing Through Data.",
        desc: "Machine learning and OLS regression-based analysis to optimize commodity pricing strategies for Quick Service Restaurants.",
        challenge: "Balancing profitability with customer retention using real-world pricing data.",
        solution: "Applied regression modeling and elasticity analysis to identify optimal pricing ranges.",
        tech: [<FaPython />, "OLS Regression", "Machine Learning"],
        images: {
            hero: "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116473/dva4_x2d8ji.png",
            secondary: [
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116472/dva1_rrqlew.png", // mobile / UI
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116472/dva_pyll29.png"  // dashboard / logic
            ]
        },
        link: "",
        github: "",
        client: "Case Study",
        role: "Data Analyst",
        year: "2024"
    },

    {
        id: "05",
        title: "Hecademy",
        category: "Full-Stack & Data",
        tagline: "Adaptive Learning Systems.",
        desc: "Full-stack recommendation platform built with Python and Streamlit, featuring secure user profiles, admin dashboards, and personalized content delivery.",
        challenge: "Designing personalized recommendations with limited initial user data.",
        solution: "Implemented content-based filtering supported by structured metadata and real-time dashboards.",
        tech: [<FaPython />, <FaReact />, <SiStreamlit />, "Data Analytics"],
        images: {
            hero: "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116480/hecademy_yggg5w.webp",
            secondary: [
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116481/hecademy2_ofkyrh.webp", // mobile / UI
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770116485/hecademy8_mou9ab.webp"  // dashboard / logic
            ]
        },
        link: "https://hecademy.vercel.app/",
        github: "https://github.com/ShigivahanA/testing-hecademy",
        client: "Project",
        role: "Lead Developer",
        year: "2024-2025"
    },

    {
        id: "06",
        title: "Mayile",
        category: "E-commerce",
        tagline: "Fashion, Tailored.",
        desc: "A fashion-focused e-commerce web application for ready-made apparel and custom design orders, built with a clean UI and complete shopping workflow.",
        challenge: "Handling custom design requirements alongside standard e-commerce flows while maintaining performance and usability.",
        solution: "Implemented a scalable e-commerce architecture with product management, custom order handling, secure checkout, and responsive design.",
        tech: [<FaReact />, <RiTailwindCssFill />, <SiVite />, <FaNode />, <SiExpress />, <SiMongodb />],
        images: {
            hero: "https://res.cloudinary.com/dax0gizdq/image/upload/v1770199932/image1_mve5j0.jpg",
            secondary: [
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770199932/image_kfxlwg.jpg",
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770199932/830F8381-FAF4-4EC7-B2D9-69EEF9F3BE7E_ssxaau.png"
            ]
        },
        link: "https://ecomm-user-ten.vercel.app/",
        github: "https://github.com/ShigivahanA/A-Ecomm-Website",
        client: "Personal Project",
        role: "Full Stack Dev",
        year: "2026"
    },
    {
        id: "07",
        title: "Threadly",
        category: "Web & Mobile App",
        tagline: "Your Digital Wardrobe.",
        desc: "A digital wardrobe platform that allows users to catalog clothing items, create outfit combinations, and save looks for future reference across web and mobile.",
        challenge: "Designing an intuitive outfit-building experience while managing user-generated wardrobe data across platforms.",
        solution: "Built a React-based application with structured state management, reusable UI components, and a shared backend supporting web and mobile clients.",
        tech: [<FaReact />, <RiTailwindCssFill />, <SiVite />, <FaNode />, <SiExpress />, <SiMongodb />, <TbBrandReactNative />],
        images: {
            hero: "https://res.cloudinary.com/dax0gizdq/image/upload/v1770199932/image2_dp3q42.jpg",
            secondary: [
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770199933/image3_fvntj6.jpg",
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770199933/image4_ifzakn.jpg"
            ]
        },
        link: "https://threadly-dw-frontend.vercel.app/",
        github: "https://github.com/ShigivahanA/Threadly-DW",
        client: "Personal Project",
        role: "Full Stack Dev",
        year: "2026"
    },
    {
        id: "08",
        title: "Threadly-Landing",
        category: "Marketing Website",
        tagline: "From Clutter to Curation.",
        desc: "A high-impact landing page designed to introduce Threadly, communicate its core value proposition, and convert visitors into users through a focused, minimal interface.",
        challenge: "Presenting the product’s concept clearly within seconds while balancing aesthetics, performance, and conversion-focused design.",
        solution: "Designed and built a responsive landing experience with clear visual hierarchy, motion-enhanced sections, and concise messaging to guide users from discovery to action.",
        tech: [<FaReact />, <RiTailwindCssFill />, <SiVite />,"gsap"],
        images: {
            hero: "https://res.cloudinary.com/dax0gizdq/image/upload/v1770307896/Screenshot_30_lpnwpz.png",
            secondary: [
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770307896/Screenshot_32_my4vnh.png",
                "https://res.cloudinary.com/dax0gizdq/image/upload/v1770307897/Screenshot_31_wucyqx.png"
            ]
        },
        link: "https://threadlyy.vercel.app/",
        github: "https://github.com/ShigivahanA/Threadly-landing",
        client: "Personal Project",
        role: "Developer",
        year: "2026"
    },
    {
        id: "09",
        title: "Web Scraping Engine",
        category: "Automation",
        tagline: "Reliable Data Extraction at Scale.",
        desc: "Automated web scraping system using Puppeteer to extract and process articles from Medium, handling dynamic content and edge cases reliably.",
        challenge: "Managing dynamic page rendering and preventing script failures during large-scale scraping.",
        solution: "Implemented robust error handling and DOM-aware scraping logic to ensure consistent data extraction.",
        tech: [<SiPuppeteer />, <FaReact />, <FaNode />],
        images: {
            hero: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
            secondary: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // mobile / UI
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"  // dashboard / logic
            ]
        },
        link: "",
        github: "https://github.com/ShigivahanA/MEDIUMWEBSCRAPPING",
        client: "Freelance",
        role: "Python Dev",
        year: "2023"
    },

    {
        id: "10",
        title: "Speech Analytics",
        category: "NLP",
        tagline: "Voice to Insight.",
        desc: "Speech transcription and sentiment analysis system using Google Web Speech API and VADER, supported by preprocessing pipelines and visual analytics.",
        challenge: "Improving transcription accuracy and extracting reliable sentiment from raw audio data.",
        solution: "Applied audio preprocessing and structured NLP pipelines with visualization for clearer sentiment insights.",
        tech: [<FaPython />, <LuSpeech />, "NLTK", "Matplotlib"],
        images: {
            hero: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
            secondary: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", // mobile / UI
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"  // dashboard / logic
            ]
        },
        link: "",
        github: "",
        client: "Freelance",
        role: "Python Dev",
        year: "2023"
    },
];
