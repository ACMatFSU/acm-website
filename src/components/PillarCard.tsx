interface PillarCardProps {
  number: string;
  title: string;
  body: string;
  bgColor: "garnet" | "gold" | "ink" | "cream";
}

function PillarCard({ number, title, body, bgColor }: PillarCardProps) {
  const bgClasses = {
    garnet: "bg-garnet",
    gold: "bg-gold",
    ink: "bg-ink",
    cream: "bg-cream",
  };

  const darkCard = bgColor === "garnet" || bgColor === "ink";

  return (
    <div
      className={`
        ${darkCard ? "card-brutal-dark" : "card-brutal"}
        ${bgClasses[bgColor]}
        p-6
        h-full
        flex
        flex-col
      `}
    >
      <h2 className="font-display text-display-xl leading-none">{number}</h2>

      <h3 className="font-display text-3xl font-bold uppercase mt-3">
        {title}
      </h3>

      <p className="mt-4 flex-grow font-sans">{body}</p>

      <a
        href="#"
        className="mt-6 font-display font-bold uppercase tracking-wide"
      >
        READ →
      </a>
    </div>
  );
}

export default PillarCard; 
