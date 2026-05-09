export default function Footer() {
    return (
        <footer className="dark:bg-slate-950 text-black dark:text-white bg-gray-200 border-t border-slate-800 mt-20">

            <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div>
                        <h2 className="text-2xl font-bold dark:text-white">
                            Afrid Khan
                        </h2>

                        <p className="dark:text-slate-400 text-gray-600 mt-3 leading-relaxed">
                            Full Stack Developer focused on building modern,
                            scalable and user-friendly web applications.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 md:flex justify-between md:w-full w-full">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-orange-500">
                                Quick Links
                            </h3>

                            <ul className="space-y-2 dark:text-slate-400 text-gray-600">

                                <li>
                                    <a href="#home" className="hover:text-orange-400 transition">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#skills" className="hover:text-orange-400 transition">
                                        Skills
                                    </a>
                                </li>

                                <li>
                                    <a href="#projects" className="hover:text-orange-400 transition">
                                        Projects
                                    </a>
                                </li>

                                <li>
                                    <a href="#contact" className="hover:text-orange-400 transition">
                                        Contact
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-orange-500">
                                Connect
                            </h3>

                            <ul className="space-y-2 dark:text-slate-400 text-gray-600">

                                <li>
                                    <a
                                        href="https://github.com/khanafrid07"
                                        target="_blank"
                                        className="hover:text-orange-400 transition"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/afrid-khan08"
                                        className="hover:text-orange-400 transition"
                                    >
                                        LinkedIn
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="mailto:youremail@gmail.com"
                                        className="hover:text-orange-400 transition"
                                    >
                                        Email Me
                                    </a>
                                </li>

                            </ul>
                        </div>






                    </div>




                </div>


                <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Afrid Khan. All rights reserved.
                    </p>

                    <p className="text-slate-600 text-sm">
                        Built with React + TypeScript ⚡
                    </p>

                </div>

            </div>
        </footer>
    );
}