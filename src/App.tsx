import StampBadge from "./components/Stampbadge";
import PillarCard from "./components/PillarCard";
import ThemeShowcase from "./components/ThemeShowcase";

function App() {
  return (
    <div>
      <ThemeShowcase />
      // return{" "}
      <h1 className="text-3xl font-display underline">Hello world!</h1>
      <StampBadge />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-8">
        <PillarCard
          number="01"
          title="Network"
          bgColor="garnet"
          body="Network with companies and recruiters."
        />

        <PillarCard
          number="02"
          title="Contest"
          bgColor="gold"
          body="Compete semesterly collegiate programming competitions."
        />

        <PillarCard
          number="03"
          title="Workshops"
          bgColor="ink"
          body="Attend workshops exploring the latest tech and industry topics."
        />

        <PillarCard
          number="04"
          title="LeetCode"
          bgColor="cream"
          body="Prepare for technical interviews with our weekly practice sessions."
        />
      </div>
    </div>
  );
}

export default App;
