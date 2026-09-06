interface ProjectCardProps  {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
};

export default function ProjectCard({ title, description, technologies, link }: Project) {
    return (
        <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                {title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {description}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Technologies: {technologies.join(", ")}
            </p>
            {link && (
                <a
                    href={link}
                    className="mt-4 inline-block text-sm font-medium text-zinc-950 underline dark:text-zinc-50"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View project
                </a>
            )}
        </div>
    );
}
