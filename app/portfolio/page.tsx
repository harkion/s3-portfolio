import Link from "next/link";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
return (
    <section>
    <h2 className="text-4xl font-semibold mb-8">
        Dive into a few projects that represent my most fulfilling design experiences
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
        <Link key={p.slug} href={`/projects/${p.slug}`} className="card block">
            <div className="h-52 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-4" />
            <div className="flex items-center justify-between">
            <div>
                <h3 className="text-xl">{p.title}</h3>
                <p className="text-xs text-zinc-400 mt-1">{p.summary}</p>
            </div>
            <span className="text-xs text-zinc-500">{p.role}</span>
            </div>
        </Link>
        ))}
    </div>
    </section>
);
}
