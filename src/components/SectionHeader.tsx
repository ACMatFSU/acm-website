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
  const classes = ["flex flex-col", className].filter(Boolean).join(" ");

  return (
    <header className={classes}>
      <span className="section-label text-[30px] text-ink">{number}</span>
      <h2 className="font-display text-display-xl font-bold uppercase text-ink">
        {title}
      </h2>
    </header>
  );
}
