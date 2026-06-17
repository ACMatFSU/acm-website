import SponsorRow from "./sponsor-row";
import SectionHeader from "./SectionHeader";
import { sponsors } from "../assets/data/config";

export default function SponsorSection() {
    return (
    <div className="bg-gold"> 
        <div className="section-wrap">
            <SectionHeader number='05' title='★ SPONSORED BY' className="text-1xl"/>
            <div className="flex flex-col gap-8 mt-8">
                <SponsorRow sponsors={sponsors} /> 
            </div>
        </div>
    </div>
    )
}