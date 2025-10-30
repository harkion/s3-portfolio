export type Project = {
slug: string;
title: string;
role: string;
year: string;
summary: string;
  cover?: string; // e.g. "/images/gahageek.jpg"
};

export const projects: Project[] = [
{
    slug: "gaha-geek",
    title: "Gaha Geek",
    role: "Web Design",
    year: "2024–2025",
    summary: "A game asset store website for students to access and upload free assets.",
    cover: "/images/gahageek.jpg",},

{
    slug: "osfast",
    title: "Osfast",
    role: "Brand Identity",
    year: "2025",
    summary: "A real client project creating a full rebrand for a tech-focused personal brand.",
    cover: "/images/osfast.jpg",},

{
    slug: "belco",
    title: "Belco",
    role: "UI/UX Design",
    year: "2025",
    summary: "Redesigning a university student exchange platform with modern functionality.",
    cover: "/images/belco.jpg",},

{
    slug: "zone-in",
    title: "Zone In",
    role: "Web-based Game",
    year: "2025",
    summary: "An ADHD-friendly reaction game built with HTML, CSS, and JavaScript.",
    cover: "/images/zonein.jpg",},
];
