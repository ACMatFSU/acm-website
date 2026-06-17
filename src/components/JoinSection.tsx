import { joinLink } from "../assets/data/config";

export default function JoinSection() {
    return (
        <section className="section-wrap bg-ink text-chalk ">
            {/* <p className="font-mono text-sm uppercase tracking-widest text-chalk/60 mb-4">✦ Start learning now ✦</p> */}
            <span className="section-label text-[25px] text-chalk/60">✦ Start learning now ✦</span>
            <h2
                className="font-display font-bold uppercase leading-none mb-8"
                style={{
                    fontSize: "clamp(5rem, 15vw, 12rem)",
                    textShadow: "4px 4px 0px #7A1C2E",
                }}
            >
                GET INVOLVED
            </h2>
            <a href="joinLink" className="btn-primary">Join</a>
        </section>
    );
}