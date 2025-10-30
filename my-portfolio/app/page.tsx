import CardLink from "@/components/CardLink";

export default function HomePage() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center gap-12">
      <h1 className="text-6xl md:text-8xl font-semibold text-center">
        Fahri Can Genç
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <CardLink href="/about">About</CardLink>
        <CardLink href="/portfolio">Portfolio</CardLink>
        <CardLink href="/contact">Contact</CardLink>
      </div>
    </section>
  );
}
