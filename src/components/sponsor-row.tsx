interface SponsorRowProps {
  sponsors: string[]
}

const SponsorRow = ({ sponsors }: SponsorRowProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] border-2 border-ink">
      {sponsors.map((sponsor, index) => (
        <div
          key={`${sponsor}-${index}`}
          className="border-r-2 border-ink last:border-r-0"
        >
          <div className="flex min-h-[5rem] items-center justify-center px-4 py-3 text-center font-mono uppercase tracking-widest">
            {sponsor}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SponsorRow;
