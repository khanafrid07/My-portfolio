import TypingEffect from "./TypingEffect";
import pf from "../assets/pf.jpg"
export default function Hero() {
    return (
        <section id="home" className="min-h-screen pt-16 px-6 md:px-16  overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

                {/* LEFT CONTENT */}
                <div className="space-y-6">

                    <p className="text-blue-600 dark:text-blue-400 font-medium tracking-wide">
                        FULL STACK DEVELOPER
                    </p>

                    <h1 className="text-4xl md:text-7xl font-bold text-black dark:text-white leading-tight">
                        Hi, I'm <span className="text-orange-500">Afrid Khan</span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-slate-300 h-10">
                        <TypingEffect text="Full Stack Developer" />
                    </div>

                    <p className="text-gray-600 dark:text-slate-400 text-lg max-w-xl leading-relaxed">
                        I build scalable and modern web applications using
                        React, Node.js, MongoDB, Express, and TypeScript.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 pt-4">

                        <button className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white font-medium">
                            View Projects
                        </button>

                        <button className="px-6 py-3 rounded-xl border text-black dark:text-white border-slate-700 hover:border-orange-500 hover:text-orange-400 transition font-medium">
                            Contact Me
                        </button>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex justify-center order-first md:order-last">

                    <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 blur-3xl absolute"></div>

                    <div className="relative z-10 border-8 dark:border-gray-600 border-slate-400 rounded-md">
                        <img src={pf} alt="Hero" className=" sm:w-[400px] sm:h-[400px] w-[280px] h-[280px] object-cover" />

                    </div>

                </div>

            </div>
        </section>
    );
}