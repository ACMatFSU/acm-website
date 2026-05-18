import SponsorRow from "./sponsor-row"

const sponsors = ["example1", "example2", "example3", "example4"]

const ThemeShowcase = () => {
    return (
        <div className="space-y-8 p-6">
            <h1 className="text-3xl font-display underline">Theme Showcase</h1>
            <SponsorRow sponsors={sponsors} />
        </div>
    )
}

export default ThemeShowcase;
