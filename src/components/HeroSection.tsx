import StampBadge from "./Stampbadge";
import HeroHeadline from "./HeroHeadline";
import HeroSubcopy from "./HeroSubcopy";
import CTABar from "./CTABar";

const HeroSection = () => {
  return (
    <section className="bg-cream section-wrap relative min-h-[80vh] flex flex-col justify-center gap-8 overflow-hidden">
      
      <div className="absolute top-6 left-6 z-10 md:top-12 md:left-12">
        <StampBadge />
      </div>

      <div className="flex flex-col gap-8 max-w-4xl mt-20 md:mt-0">

        <div className="w-full h-[4px] bg-ink opacity-90 my-2" />
        
        <HeroHeadline />

        <div className="w-full h-[4px] bg-ink opacity-90 my-2" />
        
        <HeroSubcopy />
        
        <CTABar />
        
      </div>

    </section>
  );
};

export default HeroSection;