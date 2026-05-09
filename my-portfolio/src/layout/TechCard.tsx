import type { techInfo } from "../components/config";

type TechCardProps = {
    skill: techInfo[];
    techType: string;
};

export default function TechCard({
    skill,
    techType,
}: TechCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gray-200 dark:bg-slate-900/70 p-5 md:p-7 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1">

            {/* Glow */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 mb-8">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
                    Skills
                </p>

                <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
                    {techType}
                </h2>

            </div>

            {/* Skills Grid */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3">

                {skill.map((item) => (
                    <div
                        key={item.name}
                        className="group/item flex flex-col justify-center items-center  animate-glow  rounded-2xl border border-slate-700 dark:bg-slate-800/70 p-2 text-center transition-all duration-300 hover:border-orange-500 dark:hover:bg-slate-800 hover:-translate-y-1"
                    >

                        {/* Icon Container */}
                        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl dark:bg-slate-900 bg-slate-100 border border-slate-700 transition duration-300 group-hover/item:border-orange-500">

                            <img
                                src={item.icon}
                                alt={item.name}
                                className="h-6 w-6 object-contain"
                            />

                        </div>

                        {/* Tech Name */}
                        <p className="text-sm font-medium dark:text-slate-200 text-gray-800 leading-tight">
                            {item.name}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
}