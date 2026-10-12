import type { MetadataRoute } from "next";
import { teams } from "./data/teaminfo";

// TODO: set NEXT_PUBLIC_SITE_URL to the production domain (e.g. https://www.example.com) in the hosting env.
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/careers", "/careers/apply"];
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    // every team / service page, including COBOL Development (team-010) and Actuarial Sciences (team-011)
    ...teams.map((team) => ({ url: `${siteUrl}/teams/${team.id}`, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
