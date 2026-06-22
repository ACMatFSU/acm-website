import TechTag from "./TechTag";

interface ProjectCardProps {
  slug: string; // e.g. 'NOLENAV'
  name: string; // e.g. 'NoleNav'
  description: string; // short description
  tags: string[]; // e.g. ['REACT NATIVE', 'POSTGIS']
  imgPath?: string; // optional path to image
  link?: string; // optional link to project page or repo
}

const ProjectCard = (props: ProjectCardProps) => {
  const Wrapper = props.link ? 'a' : 'div';
  return (
    <Wrapper
      className="card-brutal p-4 flex gap-4"
      {...(props.link ? { href: props.link, target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {props.imgPath ? (
        <div className="border-dashed border-2 border-ink/40 flex items-center justify-center w-32 h-32 shrink-0">
          <img src={props.imgPath} alt={props.name} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="border-dashed border-2 border-ink/40 flex items-center justify-center w-32 h-32 shrink-0">
          <span className="font-display text-ink/40 text-sm">{props.slug}</span>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="font-display font-bold text-3xl">{props.name}</h3>
        <p className="font-mono text-sm">{props.description}</p>
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default ProjectCard;