import acmLogo from '../assets/acmLogo.png'
export default function FooterSection(){
    return (
        <div id="footer" className="scroll-anchor bg-gold">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">

                <div className="left flex flex-col gap-2 font-display uppercase">
                    <img src={acmLogo} className="w-14 h-14 object-contain flex-shrink-0"/>
                    <p> ACM AT FSU </p>
                    <p> Florida State · Tallahassee </p>
                </div>

                <div className="right flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm uppercase tracking-wider">
                    <a href='#'> ABOUT </a>
                    <a href='#'> TEAM </a>
                    <a href='#'> DISCORD </a>
                    <a href='#'> GITHUB</a>
                    <a href='#'> INSTAGRAM</a>
                </div>

            </div>
            
            <div className="section-rule pt-6">
                <div className="bottomBar flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-ink/70 text-center md:text-left">
                    <div>
                        © 2025 ACM AT FSU · STUDENT CHAPTER
                    </div>
                    <div>
                        ★ ★ ★
                    </div>
                    <div>
                        BUILT WITH REACT — OPEN SOURCE
                    </div>
                </div>
            </div>
        </div>
    )
}