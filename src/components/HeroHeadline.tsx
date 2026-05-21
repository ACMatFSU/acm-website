export default function HeroHeadline() {
    return (
        <h1
            className="font-display font-bold uppercase leading-[0.85] tracking-tight"
            style={{
                fontSize: "clamp(10rem, 20vw, 40rem)",
                lineHeight: "0.85",
                fontFamily: "'Barlow Condensed', sans-serif",
                transform: "scaleX(1.1) scaleY(0.7)",
                transformOrigin: "left",
                textAlign: "left",
            }}
        >
            <span className="block text-ink" style={{ textShadow: "1px 1px 0px #ceb888, 2px 2px 0px #ceb888, 3px 3px 0px #ceb888, 4px 4px 0px #ceb888"}}>ACM</span>
            <span className="block text-garnet" style={{ textShadow: "1px 1px 0px #0d0d0d, 2px 2px 0px #0d0d0d, 3px 3px 0px #0d0d0d, 4px 4px 0px #0d0d0d"}}>AT FSU</span>
        </h1>
    );
}