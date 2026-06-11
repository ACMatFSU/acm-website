export default function JoinSection() {
    return (
        <section className="section-wrap bg-ink text-chalk min-h-screen">
            <p className="font-mono text-xs uppercase tracking-widest text-chalk/60 mb-4">✦ JOIN ✦</p>
            <h2
                className="font-display font-bold uppercase leading-none mb-8"
                style={{
                    fontSize: "clamp(5rem, 15vw, 12rem)",
                    textShadow: "4px 4px 0px #7A1C2E",
                }}
            >
                GET INVOLVED.
            </h2>
            <a href="#" className="btn-primary">★ Sign Me Up ★</a>
        </section>
    );
}