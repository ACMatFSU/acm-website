interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeader({
  number,
  title,
  className,
}: SectionHeaderProps) {
  const classes = ["flex flex-col gap-1", className].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      <span className="section-label !mb-0 !text-display-xl !font-bold !leading-[0.85] !tracking-normal !text-garnet">
        {number}
      </span>
      <h2 className="font-display text-display-xl font-bold uppercase leading-[0.9] tracking-tight text-ink">
        {title}
      </h2>
    </header>
  );
}
