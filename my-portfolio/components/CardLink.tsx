import Link from "next/link";
import { ReactNode } from "react";

export default function CardLink({
href,
children,
}: { href: string; children: ReactNode }) {
return (
    <Link href={href} className="card h-48 flex items-end">
    <div className="w-full flex items-center justify-between">
        <span className="text-zinc-200">{children}</span>
        <span className="text-zinc-500">↗</span>
    </div>
    </Link>
);
}
