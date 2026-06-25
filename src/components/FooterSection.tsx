import acmLogo from '../assets/acmLogo.png'
export default function FooterSection(){
    return (
        <div id="footer" className="scroll-anchor bg-gray-600">
            <div className=" py-[5px] flex flex-col md:flex-row md:justify-between md:items-start">

                <div className="text-white px-[30px] left flex flex-col gap-2 font-display uppercase">
                    <img src={acmLogo} className="w-14 h-14 object-contain flex-shrink-0"/>
                    <p> ACM AT FSU </p>
                    <p> Florida State · Tallahassee </p>
                </div>

                <div className="px-[30px] py-[10px] right flex flex-wrap gap-x-8 gap-y-3 font-mono text-white hover:text-gold text-sm uppercase tracking-wider">
                    <a href='#' className="underline hover:decoration-gold"> Designed By The ACM Web Team </a>
                </div>

            </div>
            
            <div className="section-rule pt-6">
                <div className="bottomBar flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-ink/70 text-center md:text-left">
                    <div className="px-[30px] pb-[10px]">
                        © 2025 ACM AT FSU · STUDENT CHAPTER
                    </div>
                    <div className=" pb-[10px] ">
                        ★ ★ ★
                    </div>
                    <div className="px-[30px] pb-[10px]">
                        BUILT WITH REACT 
                    </div>
                </div>
            </div>
        </div>
    )
}