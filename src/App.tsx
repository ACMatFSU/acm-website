import PillarsSection from "./components/PillarsSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectsSection";
import SponsorSection from "./components/SponsorSection";
import JoinSection from "./components/JoinSection"
import LeadershipTree from "./components/LeadershipTree"
import FloatingIsland from "./components/FloatingIsland"

function App() {
  return (
    <div>
      <FloatingIsland />
      <HeroSection />
      <PillarsSection />
      <LeadershipTree />
      <ProjectSection />
      <SponsorSection />
      <JoinSection />
      
    </div>
  );
}

export default App;
