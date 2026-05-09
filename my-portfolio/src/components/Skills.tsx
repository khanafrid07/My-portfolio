import TechCard from "../layout/TechCard";
import { frontendSkill, BackendSkills, DevTools } from "./config";

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen px-6 md:px-16 py-8 sm:py-24 bg-white dark:bg-slate-950">

            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADING */}
                <div className=" mb-16">

                    <p className="text-orange-500 uppercase tracking-[0.3em] font-semibold mb-4">
                        My Skills
                    </p>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Technologies I Work With
                    </h1>

                    <p className="max-w-2xl  dark:text-slate-400 text-gray-600 text-sm sm:text-lg leading-relaxed">
                        I build scalable and modern full-stack applications
                        using modern frontend technologies, backend systems,
                        APIs, databases, and developer tools.
                    </p>

                </div>

                {/* SKILL CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    <TechCard
                        techType="Frontend"
                        skill={frontendSkill}
                    />

                    <TechCard
                        techType="Backend"
                        skill={BackendSkills}
                    />

                    <TechCard
                        techType="Dev Tools"
                        skill={DevTools}
                    />

                </div>

            </div>
        </section>
    );
}