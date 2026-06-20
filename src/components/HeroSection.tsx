import StampBadge from "./Stampbadge";
import HeroHeadline from "./HeroHeadline";
import HeroSubcopy from "./HeroSubcopy";
import CTABar from "./CTABar";



const HeroSection = () => {
  return (
    <section id="home" className="scroll-anchor bg-cream section-wrap relative min-h-[80vh] flex flex-col justify-center gap-8 overflow-hidden">

      <div className="flex flex-col gap-2 max-w-4xl mx-auto w-full mt-2 md:mt-10">

        <div className="flex flex-col gap-0">
          <div className="hidden lg:block ml-[-15px]" style={{ marginBottom: "clamp(-5rem, -4.5vw, -9rem)" }}>
            <StampBadge />
          </div>
          <HeroHeadline />
        </div>

        <div className="w-full h-[4px] bg-ink opacity-90 -mt-10" />

        <HeroSubcopy />

        <CTABar />

      </div>

    </section>
  );
};

export default HeroSection;