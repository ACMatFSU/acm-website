import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    slug: "NOLENAV",
    name: "NoleNav",
    description: "Indoor nav for the FSU campus, crowdsourced classroom POIs.",
    tags: ["REACT NATIVE", "POSTGIS"],
  },
  {
    slug: "CLASSROAST.FYI",
    name: "ClassRoast.fyi",
    description: "Anonymous, logged course reviews — built in a weekend.",
    tags: ["NEXT.JS", "SUPABASE"],
  },
  {
    slug: "ACM-BOT",
    name: "ACM-Bot",
    description:
      "Discord bot for events, role assignment, and meeting reminders.",
    tags: ["TYPESCRIPT", "DISCORD.JS"],
  },
  {
    slug: "NOLEHACKS SITE",
    name: "NoleHacks Site",
    description: "Yearly hackathon landing + applications platform.",
    tags: ["ASTRO", "CLOUDFLARE"],
  },
];

export default function ProjectSection() {
  return (
    <section className="section-wrap section-rule">
      <SectionHeader number="05" title="OUR PROJECTS" />
      <div className="grid grid-cols-2 border border-ink mt-6">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.slug}
            slug={proj.slug}
            name={proj.name}
            description={proj.description}
            tags={proj.tags}
          />
        ))}
      </div>
    </section>
  );
}
