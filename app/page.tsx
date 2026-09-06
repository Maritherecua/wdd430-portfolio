import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "SleepOutside",
    description:
      "An e-commerce storefront for outdoor gear, built with a product listing page, cart, and checkout flow, using Vite for bundling and ESLint/Prettier for code quality.",
    technologies: ["JavaScript", "Vite", "HTML", "CSS"],
    link: "https://github.com/Maritherecua/wdd330-sleepoutside",
  },
  {
    title: "Chamber of Commerce Site",
    description:
      "A multi-page community chamber of commerce website featuring a dynamic weather widget powered by a public API, a member directory, and responsive layouts.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/Maritherecua/wdd231",
  },
  {
    title: "Playlist Generator",
    description:
      "A web application that generates playlists based on user mood, utilizing APIs for music data and providing a seamless user experience.",
    technologies: ["JavaScript", "React", "Next.js", "CSS", "Spotify API"],
    link: "https://playlist-generator-main.onrender.com",
  }
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col gap-8 py-32 px-16">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          My Projects
        </h1>
        <ProjectList projects={projects} />
      </main>
    </div>
  );
}

