import SponsorRow from "./sponsor-row";
import SectionHeader from "./SectionHeader";

export default function SponsorSection() {
    const sponsors = ['LOCKHEED', 'CITRIX', 'GEICO', 'NSA', 'DANFOSS', 'REDHAT', 'MICROSOFT', 'HUNTINGTON'];
    return (
    <div className="bg-gold"> 
        <div className="section-wrap">
            <SectionHeader number='06' title='★ SPONSORED BY' className="text-1xl"/>
            <SponsorRow sponsors={sponsors} /> 
        </div>
    </div>
    )
}