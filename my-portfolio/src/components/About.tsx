export default function About() {
    return (
        <section id="about" className="min-h-screen px-6 md:px-16 pb-12 py-4 dark:bg-slate-950 bg-white text-black dark:text-white">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div className="relative flex justify-center">

                    {/* Glow Effect */}
                    <div className="absolute w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

                    <div className="relative z-10 dark:bg-slate-900 bg-gray-200 border dark:border-slate-800 border-slate-200 rounded-3xl p-8 w-full max-w-md shadow-2xl">

                        <div className="space-y-4 mt-8">

                            <p className="text-orange-500 font-semibold tracking-widest uppercase">
                                Developer
                            </p>

                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold">
                                    Afrid Khan
                                </h3>

                                <p className="dark:text-slate-400 text-gray-600">
                                    Full Stack MERN Developer
                                </p>
                            </div>

                            <div className="pt-4  space-y-3 text-black dark:text-slate-300">

                                <div className="flex justify-between border-b border-slate-800 pb-2">
                                    <span>Frontend</span>
                                    <span>React / TypeScript</span>
                                </div>

                                <div className="flex justify-between border-b border-slate-800 pb-2">
                                    <span>Backend</span>
                                    <span>Node / Express</span>
                                </div>

                                <div className="flex justify-between border-b border-slate-800 pb-2">
                                    <span>Database</span>
                                    <span>MongoDB / MySQL</span>

                                </div>

                                <div className="flex justify-between">
                                    <span>Location</span>
                                    <span>Kathmandu, Nepal</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div>

                    <p className="text-orange-500 text-xl font-semibold tracking-[0.3em] uppercase mb-4">
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Passionate About Building Modern Web Applications
                    </h2>

                    <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed mb-8">
                        I’m a self-taught Full Stack Developer focused on building
                        scalable and modern web applications using the MERN stack
                        and TypeScript. I enjoy creating clean user experiences,
                        solving real-world problems, and continuously improving my
                        skills through practical projects.
                    </p>

                    {/* INFO CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        <div className="dark:bg-slate-900 bg-gray-200 border border-slate-800 rounded-2xl p-5 hover:border-orange-500 transition">
                            <h4 className="text-2xl font-bold text-orange-500">
                                MERN
                            </h4>
                            <p className="dark:text-slate-400 text-gray-600 mt-2">
                                Full Stack Development
                            </p>
                        </div>

                        <div className="dark:bg-slate-900 bg-gray-200 border border-slate-800 rounded-2xl p-5 hover:border-orange-500 transition">
                            <h4 className="text-2xl font-bold text-orange-500">
                                TypeScript
                            </h4>
                            <p className="dark:text-slate-400 text-gray-600 mt-2">
                                Learning Modern Scalable Apps
                            </p>
                        </div>

                        <div className="dark:bg-slate-900 bg-gray-200 border border-slate-800 rounded-2xl p-5 hover:border-orange-500 transition">
                            <h4 className="text-2xl font-bold text-orange-500">
                                UI/UX
                            </h4>
                            <p className="dark:text-slate-400 text-gray-600 mt-2">
                                Responsive & Clean Interfaces
                            </p>
                        </div>

                        <div className="dark:bg-slate-900 bg-gray-200 border border-slate-800 rounded-2xl p-5 hover:border-orange-500 transition">
                            <h4 className="text-2xl font-bold text-orange-500">
                                Projects
                            </h4>
                            <p className="dark:text-slate-400 text-gray-600 mt-2">
                                Real World Full Stack Applications
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}