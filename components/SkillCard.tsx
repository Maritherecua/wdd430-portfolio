interface SkillCardProps {
    name: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    description: string;
}

export default function SkillCard({ name, level, description }: SkillCardProps) {
    return (
        <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                    {name}
                </h3>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    {level}
                </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {description}
            </p>
        </div>
    );
}
