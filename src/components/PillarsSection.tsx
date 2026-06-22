import SectionHeader from "./SectionHeader";
import PillarCard from "./PillarCard";
import { pillarsData, PillarBgColor } from "../assets/data/config";

interface PillarsSectionProps {
  pillars?: {
    number: string;
    title: string;
    bgColor: PillarBgColor;
    body: string;
    clickText:string;
    link:string;
  }[];
}

export default function PillarsSection({ pillars = pillarsData }: PillarsSectionProps) {
  return (
    <section id="initiatives" className="scroll-anchor section-wrap section-rule bg-garnet">
      <SectionHeader number="02" title="Initiatives" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-8">
        {pillars.map((pillar) => (
          <PillarCard
            key={pillar.number}
            number={pillar.number}
            title={pillar.title}
            bgColor={pillar.bgColor}
            body={pillar.body}
            clickText={pillar.clickText}
            link={pillar.link}
          />
        ))}
      </div>
    </section>
  );
}
