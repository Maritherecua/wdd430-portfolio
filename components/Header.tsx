import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-zinc-200 dark:border-zinc-800">
            <nav className="mx-auto flex max-w-3xl items-center justify-between px-16 py-4">
                <Link href="/" className="text-lg font-semibold">
                    My Portfolio
                </Link>
                <div className="flex gap-6 text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </header>
    );
}
