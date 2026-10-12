import type { Metadata } from "next";
import { teams } from "@/app/data/teaminfo";

// Pre-render every team page at build time (new teams are picked up automatically from data/teaminfo.ts).
export function generateStaticParams() {
  return teams.map((team) => ({ id: team.id }));
}

// Per-team <title> and description (the page itself is a client component, so its metadata lives here).
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const team = teams.find((t) => t.id === id);
  if (!team) return {};
  const title = `${team.name.trim()} | Sudhanand Business Solutions`;
  return {
    title,
    description: team.description,
    openGraph: { title, description: team.description, type: "website" },
  };
}

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
