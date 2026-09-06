export default function About() {
    return (
        <div className="flex flex-1 flex-col items-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex w-full max-w-3xl flex-1 flex-col gap-6 py-32 px-16">
                <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
                    About Me
                </h1>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    Write a short bio here describing your background, skills, and
                    interests.
                </p>
            </main>
        </div>
    );
}
