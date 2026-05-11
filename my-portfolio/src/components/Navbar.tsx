import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
    handleTheme: () => void;
    theme: string;
}

export default function Navbar({
    handleTheme,
    theme,
}: NavbarProps) {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className="
                sticky top-0 z-[999]
                w-full
                border-b border-slate-200/10
                bg-white/80 dark:bg-slate-950/80
                backdrop-blur-xl
                shadow-sm
            "
        >

            <div
                className="
                    max-w-7xl mx-auto
                    flex items-center justify-between
                    px-4 sm:px-6 lg:px-8
                    py-4
                "
            >

                {/* LOGO */}
                <a
                    href="#home"
                    className="
                        text-2xl font-bold
                        text-black dark:text-white
                        tracking-wide
                    "
                >
                    Afrid
                    <span className="text-orange-500">
                        .
                    </span>
                </a>

                {/* DESKTOP NAV */}
                <ul
                    className="
                        hidden md:flex
                        items-center gap-8
                        text-sm font-medium
                        text-slate-700 dark:text-slate-300
                    "
                >

                    {navLinks.map((item) => (
                        <li key={item.name}>

                            <a
                                href={item.href}
                                className="
                                    relative
                                    hover:text-orange-500
                                    transition duration-300
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:h-[2px]
                                    after:w-0
                                    after:bg-orange-500
                                    after:transition-all
                                    hover:after:w-full
                                "
                            >
                                {item.name}
                            </a>

                        </li>
                    ))}

                </ul>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">

                    {/* RESUME BUTTON */}
                    <a
                        href="/Resume.pdf"
                        target="_blank"
                        download="Resume.pdf"
                        className="
                            hidden sm:flex
                            items-center gap-2
                            px-4 py-2
                            rounded-xl
                            bg-orange-500
                            text-black
                            font-medium
                            cursor-pointer
                            hover:bg-orange-400
                            transition duration-300
                        "
                    >

                        <Download size={18} />

                        Resume

                    </a>

                    {/* THEME BUTTON */}
                    <button
                        onClick={handleTheme}
                        className="
                            flex items-center justify-center
                            w-11 h-11
                            rounded-full
                            border border-slate-300 dark:border-slate-700
                            bg-white dark:bg-slate-900
                            hover:border-orange-500
                            transition duration-300
                            cursor-pointer
                        "
                    >

                        {theme === "dark" ? (
                            <Sun
                                size={19}
                                className="text-yellow-400"
                            />
                        ) : (
                            <Moon
                                size={19}
                                className="text-slate-800"
                            />
                        )}

                    </button>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setOpenMenu(!openMenu)}
                        className="
                            md:hidden
                            flex items-center justify-center
                            w-11 h-11
                            rounded-full
                            border border-slate-300 dark:border-slate-700
                            bg-white dark:bg-slate-900
                            text-black dark:text-white
                            transition duration-300
                        "
                    >

                        {openMenu ? <X size={22} /> : <Menu size={22} />}

                    </button>

                </div>

            </div>

            {/* MOBILE MENU */}
            <div
                className={`
                    md:hidden
                    overflow-hidden
                    transition-all duration-300
                    bg-white dark:bg-slate-950
                    border-t border-slate-200/10
                    ${openMenu ? "max-h-[500px]" : "max-h-0"}
                `}
            >

                <ul
                    className="
                        flex flex-col
                        gap-6
                        px-6 py-6
                        text-slate-700 dark:text-slate-300
                        font-medium
                    "
                >

                    {navLinks.map((item) => (
                        <li key={item.name}>

                            <a
                                href={item.href}
                                onClick={() => setOpenMenu(false)}
                                className="
                                    block
                                    hover:text-orange-500
                                    transition duration-300
                                "
                            >
                                {item.name}
                            </a>

                        </li>
                    ))}

                    {/* MOBILE RESUME BUTTON */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="
                            flex items-center justify-center gap-2
                            rounded-xl
                            bg-orange-500
                            py-3
                            text-black
                            font-semibold
                            hover:bg-orange-400
                            transition duration-300
                        "
                    >

                        <Download size={18} />

                        Download Resume

                    </a>

                </ul>

            </div>

        </nav>
    );
}