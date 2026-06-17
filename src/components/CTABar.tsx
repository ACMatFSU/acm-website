import * as links from "../assets/data/config.ts"

export default function CTABar() {
    return (
        <div className="flex gap-4 items-center mt-6">
            <a href= {links.joinLink} className="btn-primary">★ BECOME A MEMBER</a>
            <a href= {links.contactLink} className="btn-outline">Contact Us </a>
        </div>
    );
}