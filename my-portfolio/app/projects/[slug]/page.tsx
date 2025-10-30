import { projects } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article>
      <div className="mb-6">
        <Link href="/portfolio" className="text-zinc-400 text-sm hover:text-zinc-200">
          ← Back to Portfolio
        </Link>
      </div>

      <h1 className="text-5xl font-semibold">{project.title}</h1>
      <p className="text-zinc-400 mt-2">{project.role}</p>

      <div className="grid md:grid-cols-3 gap-4 text-sm text-zinc-400 mt-6">
        <div className="card">Year: {project.year}</div>
        <div className="card">Role: {project.role}</div>
        <div className="card">Team: Fahri Can Genç & collaborators</div>
      </div>

      <div className="card mt-6 h-72 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900" />

      <section className="mt-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Explore the full story</h2>
          <h3 className="font-semibold mb-2">Overview</h3>
          <p className="text-zinc-300">
            {project.summary}
          </p>

          <h3 className="font-semibold mt-6 mb-2">The Challenge</h3>
          <p className="text-zinc-300">
            Briefly explain the problem, audience, constraints, and success criteria.
          </p>

          <h3 className="font-semibold mt-6 mb-2">Solution</h3>
          <p className="text-zinc-300">
            Summarize your approach, key decisions, and the final outcome.
          </p>
        </div>

        <div className="space-y-6">
          <div className="card h-48" />
          <div className="card h-48" />
        </div>
      </section>

      <div className="flex items-center justify-between mt-12 text-sm text-zinc-400">
        <Link href="/projects/gaha-geek">‹ Prev</Link>
        <span>GENCF.C</span>
        <Link href="/projects/osfast">Next ›</Link>
      </div>
    </article>
  );
}
