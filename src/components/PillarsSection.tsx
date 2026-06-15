import SectionHeader from "./SectionHeader";
import PillarCard from "./PillarCard";

export default function PillarsSection() {
  return (
    <section className="section-wrap section-rule">
      <SectionHeader number="02" title="Four Pillars" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-8">
        <PillarCard
          number="01"
          title="Workshops"
          bgColor="garnet"
          body="Weekly hands-on sessions — Git, full-stack, ML, systems, interviews. Beginner tracks every semester."
        />

        <PillarCard
          number="02"
          title="Hackathons"
          bgColor="gold"
          body="NoleHacks each fall, plus travel teams to HackTX, ShellHacks, MangoHacks. We'll fund your bus ride."
        />

        <PillarCard
          number="03"
          title="Industry"
          bgColor="ink"
          body="Recruiter mixers and tech talks with Lockheed, Citrix, GEICO, NSA, and rotating local startups."
        />

        <PillarCard
          number="04"
          title="Community"
          bgColor="cream"
          body="Game nights, study halls, intramural team, Discord active 24/7. The hangout, not just the homework."
        />
      </div>
    </section>
  );
}
