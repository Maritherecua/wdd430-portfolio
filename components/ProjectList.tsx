import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
    {
        title: "Project One",
        description: "A short description of this project goes here.",
    },
    {
        title: "Project Two",
        description: "A short description of this project goes here.",
    },
    {
        title: "Project Three",
        description: "A short description of this project goes here.",
    },
];

export default function ProjectList() {
    return (
        <div className="grid w-full gap-6 sm:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
            ))}
        </div>
    );
}
