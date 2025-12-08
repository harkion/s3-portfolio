export default function AboutPage() {
return (
    <article className="prose prose-invert max-w-none">
    <h2 className="text-4xl font-semibold mb-6">
        I am Fahri Can, a 25 year old ICT & Media student at Fontys University in
        Eindhoven.
    </h2>

    <p className="text-zinc-300 text-lg leading-8">
        Originally from Turkey, I moved to the Netherlands in 2018 after
        beginning my studies in Scotland. I have a background in IT and Database
        Programming and currently work part-time as an ICT Helpdesk Assistant at
        the Municipality of Venlo.
    </p>

    <p className="text-zinc-300 text-lg leading-8">
        Outside of work and study, I am passionate about creativity—painting,
        music, theatre—and I enjoy staying active through sports, gaming, and
        movies.
    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="card">
        <h3 className="font-semibold mb-2">Expertise</h3>
        <ul className="text-zinc-400 text-sm space-y-1">
            <li>Web Design</li>
            <li>UI/UX Design</li>
            <li>Brand Identity</li>
            <li>Prototype</li>
        </ul>
        </div>
        <div className="card">
        <h3 className="font-semibold mb-2">Tools</h3>
        <ul className="text-zinc-400 text-sm space-y-1">
            <li>Figma</li>
            <li>Adobe CC</li>
            <li>Framer</li>
            <li>Canva</li>
        </ul>
        </div>
        <div className="card">
        <h3 className="font-semibold mb-2">Current</h3>
        <ul className="text-zinc-400 text-sm space-y-1">
            <li>ICT & Media Student</li>
            <li>ICT Helpdesk Assistant</li>
            <li>Municipality of Venlo</li>
            <li>Fontys University</li>
        </ul>
        </div>
    </div>
    </article>
);
}
