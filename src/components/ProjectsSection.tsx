import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard.tsx" 
import { projectData } from "../assets/data/config.ts";



const ProjectSection = () => {
  return (
    <section className="section-wrap section-rule bg-chalk">
      <SectionHeader number="03" title="OUR PROJECTS" />
      <div className="grid grid-cols-1 md:grid-cols-2 border border-ink mt-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            name={project.name}
            description={project.description}
            tags={project.tags}
            imgPath={project.imgPath}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;