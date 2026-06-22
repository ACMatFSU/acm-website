import { useEffect, useRef, useState } from "react";
import acmLogo from "../assets/acmLogo.png";
import { navLinks } from "../assets/data/config";

const SCROLL_THRESHOLD = 24;

export default function FloatingIsland() {
  const [atTop, setAtTop] = useState(true);
  const [tapOpen, setTapOpen] = useState(false);
  const [activeId, setActiveId] = useState(navLinks[0].id);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setTapOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const expandedForced = atTop || tapOpen;

  return (
    <div
      ref={rootRef}
      className="group fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <nav
        aria-label="Primary"
        className="flex items-center rounded-full border-2 border-ink bg-cream shadow-hard px-2 py-2 transition-all duration-300 ease-out"
      >
        <button
          type="button"
          onClick={() => !atTop && setTapOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={expandedForced}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        >
          <img src={acmLogo} alt="ACM at FSU" className="h-7 w-7 object-contain" />
        </button>

        <div
          className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${
            expandedForced
              ? "max-w-[640px] opacity-100 ml-4 gap-5"
              : "max-w-0 opacity-0 ml-0 gap-0 group-hover:max-w-[640px] group-hover:opacity-100 group-hover:ml-4 group-hover:gap-5"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setTapOpen(false)}
              className={`whitespace-nowrap font-display text-sm uppercase tracking-wide transition-colors ${
                activeId === link.id ? "text-garnet" : "text-ink/70 hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
