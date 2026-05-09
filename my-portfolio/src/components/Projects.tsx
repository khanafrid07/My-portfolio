import picDesktop from "../assets/pic1.png";
import picDesktop2 from "../assets/pic2.png";
import picDesktop3 from "../assets/pic3.png";
import picDesktop4 from "../assets/pic4.png";
import picDesktop5 from "../assets/pic5.png";
import picDesktop6 from "../assets/pic6.png";

// Mobile Images
import picMobile from "../assets/mb1.jpeg";
import picMobile2 from "../assets/mob2.jpeg";
import picMobile3 from "../assets/mob3.jpeg";
import picMobile4 from "../assets/mob-4.jpeg";
import picMobile5 from "../assets/mob-5.jpeg";
import picMobile6 from "../assets/mob6.png";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {

    const [idx, setIdx] = useState(0);

    const desktopImgs = [
        picDesktop,
        picDesktop2,
        picDesktop3,
        picDesktop4,
        picDesktop5,
        picDesktop6
    ];

    const mobileImgs = [
        picMobile,
        picMobile2,
        picMobile3,
        picMobile4,
        picMobile5,
        picMobile6
    ];

    // Auto Slider
    useEffect(() => {

        const interval = setInterval(() => {
            setIdx((prev) => (prev + 1) % desktopImgs.length);
        }, 3000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section id="projects" className="px-4 sm:px-6 md:px-16 py-16 bg-white dark:bg-slate-950">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">

                    <p className="text-orange-500 tracking-[0.3em] uppercase text-xl animate-glow font-medium">
                        Projects
                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        ShopSmart Ecommerce
                    </h2>

                </div>

                {/* Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT SIDE */}
                    <div className="relative flex justify-center">

                        {/* Desktop Mockup */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="
                                w-full
                                rounded-3xl
                                overflow-hidden
                                border border-slate-800
                                bg-slate-900
                                shadow-2xl
                            "
                        >

                            {/* Browser Bar */}
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900">

                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                                <div className="ml-3 text-xs text-slate-400">
                                    shopsmart.vercel.app
                                </div>

                            </div>

                            {/* Desktop Image */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">

                                <AnimatePresence mode="wait">

                                    <motion.img
                                        key={idx}
                                        src={desktopImgs[idx]}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />

                                </AnimatePresence>

                            </div>

                            {/* Dots */}
                            <div className="flex justify-center gap-2 py-4 bg-slate-900">

                                {desktopImgs.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`
                                            transition-all duration-300 rounded-full
                                            ${idx === i
                                                ? "w-6 h-2 bg-orange-500"
                                                : "w-2 h-2 bg-slate-600"}
                                        `}
                                    />
                                ))}

                            </div>

                        </motion.div>

                        {/* Mobile Mockup */}
                        <motion.div
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="
                                absolute
                                -bottom-10
                                right-2
                                sm:right-4
                                w-[110px]
                                sm:w-[140px]
                                rounded-[1rem]
                                border border-slate-800
                                bg-black
                                shadow-2xl
                                
                                overflow-hidden
                            "
                        >

                            {/* Phone Notch */}
                            <div className="flex justify-center py-2 bg-black">

                                <div className="w-16 h-0 rounded-xl bg-slate-700"></div>

                            </div>

                            {/* Mobile Image */}
                            <div className="relative  aspect-[9/19] overflow-hidden bg-slate-950">

                                <AnimatePresence mode="wait">

                                    <motion.img
                                        key={idx}
                                        src={mobileImgs[idx]}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 w-full h-full object-contain"
                                    />

                                </AnimatePresence>

                            </div>

                        </motion.div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">

                        {/* Title */}
                        <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                            Full Stack Ecommerce Platform
                        </h3>

                        {/* Description */}
                        <p className="text-slate-400 leading-relaxed text-base md:text-lg">
                            A production-ready ecommerce platform built with the MERN stack.
                            Features include authentication, Stripe payment integration,
                            admin dashboard, product management, responsive layouts,
                            Redux Toolkit state management, and secure backend APIs.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 pt-2">

                            <div>
                                <p className="text-2xl font-bold text-orange-500">
                                    20+
                                </p>

                                <p className="text-sm text-slate-400">
                                    Components
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-orange-500">
                                    Full Stack
                                </p>

                                <p className="text-sm text-slate-400">
                                    Architecture
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-orange-500">
                                    Responsive
                                </p>

                                <p className="text-sm text-slate-400">
                                    Mobile First
                                </p>
                            </div>

                        </div>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 pt-2">

                            {[
                                "JWT Auth",
                                "Stripe",
                                "Admin Dashboard",
                                "Cart System",
                                "Redux Toolkit",
                                "Responsive UI",
                                "REST APIs",
                                "Google OAuth"
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="
                                        text-xs
                                        px-3 py-1.5
                                        rounded-full
                                        bg-slate-800
                                        border border-slate-700
                                        text-slate-300
                                    "
                                >
                                    {item}
                                </span>
                            ))}

                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">

                            <a
                                href="https://shopsmart-by-afrid.vercel.app/"
                                target="_blank"
                                className="
                                    px-6 py-3
                                    rounded-xl
                                    bg-orange-500
                                    text-black
                                    font-semibold
                                    hover:bg-orange-400
                                    transition duration-300
                                "
                            >
                                Live Demo
                            </a>

                            <a
                                href="https://github.com/khanafrid07/SHOPSMART-WEB"
                                target="_blank"
                                className="
                                    px-6 py-3
                                    rounded-xl
                                    border border-slate-700
                                    hover:border-orange-500
                                    hover:text-orange-400
                                    transition duration-300
                                "
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}