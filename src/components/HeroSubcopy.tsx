import { heroSectionData } from "../assets/data/config";

export default function HeroSubcopy() {
    return (
        <p className="font-mono text-[18px] max-w-prose leading-relaxed ">
            {heroSectionData.subcopy}
        </p>
    );
}