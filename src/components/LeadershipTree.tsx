import React, { useEffect, useMemo, useRef, useState } from "react";
import { Leaders } from "../assets/data/config"
/* ------------------------------------------------------------------ *
 * Leadership Tree — Binary Tree view
 * Drop <LeadershipTree /> anywhere. Self-contained (inline styles).
 * Requires fonts "JetBrains Mono" + "IBM Plex Sans" (loaded below).
 * ------------------------------------------------------------------ */

export type GroupKey = "exec" | "cloud" | "wics" | "ds" | "chairs";

interface Member {
  id: number;
  group: GroupKey;
  name: string;
  role: string;
  major: string;
  year: string;
  initials: string;
  email: string;
  github: string;
  linkedin: string;
  photo: string;
  delay: number; //for pulse animation
}

interface PersonNode extends Member {
  kind: "person";
  cx: number;
  cy: number;
  size: number; //avatar box size
  color: string;
}
interface HeaderNode {
  kind: "header";
  id: string;
  cx: number;
  cy: number;
  color: string;
  name: string;
  branchTag: string;
}

type TreeNode = PersonNode | HeaderNode;

interface Edge {
  d: string;
  color: string;
  w: number;
  opacity: number;
}

interface Layout {
  nodes: TreeNode[];
  edges: Edge[];
  width: number;
  height: number;
}

/* ----------------------------- data ------------------------------ */

const PALETTE: Record<GroupKey, string> = {
  exec: "oklch(0.72 0.13 250)",
  cloud: "oklch(0.78 0.12 210)",
  wics: "oklch(0.75 0.15 330)",
  ds: "oklch(0.80 0.13 165)",
  chairs: "oklch(0.83 0.12 75)",
};

const GROUP_NAME: Record<GroupKey, string> = {
  exec: "Executive Board",
  cloud: "Cloud Club",
  wics: "WiCS",
  ds: "DS Group",
  chairs: "Chairs",
};

const BRANCH_NAME: Record<GroupKey, string> = {
  exec: "main",
  cloud: "cloud-club",
  wics: "wics",
  ds: "ds-group",
  chairs: "chairs",
};


const MEMBERS: Member[] = Leaders.map((m, i) => {
  const initials = m.name.split(/\s+/).map((s) => s[0]).slice(0, 2).join("").toUpperCase();
  return {
    id: i + 1,
    group: m.group,
    name: m.name,
    role: m.role,
    major: m.major,
    year: m.year,
    initials,
    email: m.email,
    github: m.github,
    linkedin: m.linkedin,
    photo: m.photo,
    delay: (i % 7) * 0.3,
  };
});

const by = (k: GroupKey) => MEMBERS.filter((m) => m.group === k);

/* --------------------------- geometry ---------------------------- */

const BOX_W = 134;
const BOX_H = 114;

// "Ideal" spacing used when the container is wide enough to fit it as-is.
// Below that width, spacing compresses (never box/avatar/hover-card sizes)
// down to a floor that still keeps neighboring boxes from overlapping.
const IDEAL_COL_OFF = 85;
const IDEAL_G_SPACE = 338;
const IDEAL_FIRST_CX = 205;
const IDEAL_E_SPACE = 164;
const MIN_COL_OFF = 40;
const GUTTER = 20;
const OUTER_PAD = 24;
const GROUP_COUNT = 4; // cloud, wics, ds, chairs
const IDEAL_TOTAL_W = IDEAL_FIRST_CX * 2 + (GROUP_COUNT - 1) * IDEAL_G_SPACE;

function buildTree(availableWidth: number = IDEAL_TOTAL_W): Layout {
  const nodes: TreeNode[] = [];
  const edges: Edge[] = [];
  const rowH = 156;
  const gkeys: GroupKey[] = ["cloud", "wics", "ds", "chairs"];

  const ratio = Math.min(1, availableWidth / IDEAL_TOTAL_W);
  const colOff = Math.max(MIN_COL_OFF, IDEAL_COL_OFF * ratio);
  const minGSpace = 2 * colOff + BOX_W + GUTTER;
  const gSpace = Math.max(minGSpace, IDEAL_G_SPACE * ratio);
  const firstCx = Math.max(colOff + BOX_W / 2 + OUTER_PAD, IDEAL_FIRST_CX * ratio);
  const minESpace = BOX_W + GUTTER;
  const eSpace = Math.max(minESpace, IDEAL_E_SPACE * ratio);

  const gl: Record<string, number> = {};
  gkeys.forEach((k, i) => (gl[k] = firstCx + i * gSpace));
  const totalW = firstCx + (gkeys.length - 1) * gSpace + firstCx;
  const centerX = (firstCx + gl[gkeys[gkeys.length - 1]]) / 2;
  const execY = 120;
  const headerY = 318;
  const memTop = 452;

  // executive board across the top
  const exec = by("exec");
  const eStart = centerX - ((exec.length - 1) * eSpace) / 2;
  exec.forEach((m, i) =>
    nodes.push({ ...m, kind: "person", cx: eStart + i * eSpace, cy: execY, size: 58, color: PALETTE.exec })
  );
  const busY = execY + BOX_H / 2 + 26;
  exec.forEach((_, i) => {
    const ex = eStart + i * eSpace;
    edges.push({ d: `M ${ex} ${execY + BOX_H / 2} L ${ex} ${busY}`, color: PALETTE.exec, w: 2, opacity: 0.85 });
  });
  edges.push({
    d: `M ${eStart} ${busY} L ${eStart + (exec.length - 1) * eSpace} ${busY}`,
    color: PALETTE.exec, w: 2, opacity: 0.85,
  });
  const trunkBusY = headerY - 70;
  edges.push({ d: `M ${centerX} ${busY} L ${centerX} ${trunkBusY}`, color: PALETTE.exec, w: 2, opacity: 0.85 });
  const hxs = gkeys.map((k) => gl[k]);
  edges.push({
    d: `M ${Math.min(...hxs)} ${trunkBusY} L ${Math.max(...hxs)} ${trunkBusY}`,
    color: PALETTE.exec, w: 2, opacity: 0.85,
  });

  let maxRows = 1;
  gkeys.forEach((k) => {
    const gcx = gl[k];
    const col = PALETTE[k];
    const ms = by(k);
    const c = ms.length;
    const rows = Math.ceil(c / 2);
    maxRows = Math.max(maxRows, rows);
    const lastRowY = memTop + (rows - 1) * rowH;
    edges.push({ d: `M ${gcx} ${trunkBusY} L ${gcx} ${headerY - 18}`, color: PALETTE.exec, w: 2, opacity: 0.85 });
    nodes.push({ kind: "header", id: "h-" + k, cx: gcx, cy: headerY, color: col, name: GROUP_NAME[k], branchTag: `${BRANCH_NAME[k]} · ${c}` });
    edges.push({ d: `M ${gcx} ${headerY + 18} L ${gcx} ${lastRowY}`, color: col, w: 2, opacity: 0.8 });
    ms.forEach((m, i) => {
      const row = Math.floor(i / 2);
      const lone = i === c - 1 && c % 2 === 1;
      const mx = lone ? gcx : gcx + (i % 2 === 0 ? -colOff : colOff);
      const my = memTop + row * rowH;
      if (!lone) edges.push({ d: `M ${gcx} ${my} L ${mx} ${my}`, color: col, w: 2, opacity: 0.8 });
      nodes.push({ ...m, kind: "person", cx: mx, cy: my, size: 52, color: col });
    });
  });

  return { nodes, edges, width: totalW, height: memTop + (maxRows - 1) * rowH + BOX_H / 2 + 40 };
}

/* ---------------------------- styling ---------------------------- */

const PANEL = "oklch(0.215 0.03 256)";
const mix = (c: string, t: number) => `color-mix(in oklab, ${c}, transparent ${t}%)`;

const ellipsis: React.CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
};

/* --------------------------- subviews ---------------------------- */

function HeaderChip({ node }: { node: HeaderNode }) {
  return (
    <div
      style={{
        position: "absolute",
        left: node.cx,
        top: node.cy,
        transform: "translate(-50%,-50%)",
        zIndex: 8,
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 9,
          padding: "7px 14px",
          borderRadius: 999,
          border: `1.5px solid ${node.color}`,
          background: `linear-gradient(180deg, ${mix(node.color, 80)}, ${mix(node.color, 92)})`,
          boxShadow: `0 0 18px ${mix(node.color, 80)}`,
        }}
      >
        <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontWeight: 700, fontSize: 13, color: "#fff" }}>
          {node.name}
        </span>
      </div>
    </div>
  );
}

function PersonBox({
  node,
  hovered,
  onEnter,
  onLeave,
  canvasW,
  canvasH,
}: {
  node: PersonNode;
  hovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
  canvasW: number;
  canvasH: number;
}) {
  const c = node.color;
  const size = node.size;
  const dark = `color-mix(in oklab, ${c}, black 46%)`;
  const glow = mix(c, 55);

  const left = node.cx - BOX_W / 2;
  const top = node.cy - BOX_H / 2;

  // detail-card placement (flip when near canvas edges)
  const cardW = 320;
  const estH = 262;
  let cl = BOX_W + 16;
  let ct = -12;
  if (left + BOX_W + 16 + cardW > canvasW) cl = -(cardW + 16);
  if (top + ct + estH > canvasH) ct = BOX_H - estH + 14;
  if (top + ct < 4) ct = 4 - top;

  const branchTag = `⎇ ${BRANCH_NAME[node.group]}`;
  const idTag = `0x${node.id.toString(16).padStart(2, "0").toUpperCase()}`;
  const majorYear = `${node.major} · ${node.year}`;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ position: "absolute", left, top, width: BOX_W, height: BOX_H, zIndex: hovered ? 70 : 10 }}
    >
      <div
        style={{
          ["--glow" as any]: glow,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 8px 9px",
          background: PANEL,
          border: `1.5px solid ${hovered ? c : "rgba(255,255,255,0.12)"}`,
          borderRadius: 16,
          boxShadow: hovered ? `0 0 0 4px ${mix(c, 80)}, 0 0 26px 2px ${c}` : undefined,
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform .18s ease, box-shadow .18s ease, border-color .18s ease",
          animation: hovered ? "none" : "ltPulse 3.6s ease-in-out infinite",
          animationDelay: `${node.delay}s`,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: size,
            height: size,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "0 0 auto",
            borderRadius: 13,
            fontFamily: "'JetBrains Mono',monospace",
            fontWeight: 700,
            fontSize: size * 0.36,
            color: "#0a0f1c",
            background: `linear-gradient(140deg, ${c}, ${dark})`,
            border: `2px solid ${hovered ? "#fff" : "rgba(255,255,255,0.28)"}`,
          }}
        >
          {node.initials}
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: 11.5,
            fontWeight: 600,
            color: "oklch(0.93 0.01 250)",
            marginTop: 7,
            ...ellipsis,
          }}
        >
          {node.name}
        </div>
        <div style={{ fontSize: 10, color: "oklch(0.66 0.02 250)", marginTop: 1, ...ellipsis }}>{node.role}</div>
      </div>

      {hovered && (
        <div
          style={{
            position: "absolute",
            left: cl,
            top: ct,
            width: cardW,
            background: PANEL,
            border: `1px solid ${c}`,
            borderRadius: 14,
            padding: 18,
            boxShadow: "0 20px 55px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
            zIndex: 80,
            animation: "ltPop .15s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 11.5,
              color: c,
              marginBottom: 13,
            }}
          >
            <span>{branchTag}</span>
            <span style={{ opacity: 0.6 }}>{idTag}</span>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div
              style={{
                width: 96,
                height: 96,
                flex: "0 0 auto",
                position: "relative",
                overflow: "hidden",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${c}`,
                background: node.photo
                  ? undefined
                  : `repeating-linear-gradient(135deg, ${c}, ${c} 7px, color-mix(in oklab, ${c}, black 14%) 7px, color-mix(in oklab, ${c}, black 14%) 14px)`,
              }}
            >
              {node.photo ? (
                <img
                  src={node.photo}
                  alt={node.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 28, color: "#0a0f1c" }}>
                    {node.initials}
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 9,
                      textAlign: "center",
                      padding: "2px 0",
                      background: "rgba(0,0,0,0.45)",
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    add photo
                  </span>
                </>
              )}
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>
                {node.name}
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: c, marginTop: 2 }}>{node.role}</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "oklch(0.66 0.02 250)", marginTop: 5 }}>
                {majorYear}
              </div>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.10)", margin: "14px 0 12px" }} />
          {node.email && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: 12,
                color: "oklch(0.80 0.02 250)",
              }}
            >
              <span style={{ opacity: 0.55 }}>@</span>
              {node.email}
            </div>
          )}
          <div style={{ display: "flex", gap: 9, marginTop: 9 }}>
            {[
              { label: "GitHub", href: node.github },
              { label: "LinkedIn", href: node.linkedin },
            ]
              .filter((link) => link.href)
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 11.5,
                    padding: "5px 11px",
                    borderRadius: 7,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "oklch(0.86 0.02 250)",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* --------------------------- component --------------------------- */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');
@keyframes ltPulse{0%,100%{box-shadow:0 2px 10px rgba(0,0,0,0.45);}50%{box-shadow:0 0 14px 1px var(--glow),0 2px 10px rgba(0,0,0,0.45);}}
@keyframes ltLayerIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
@keyframes ltPop{from{opacity:0;transform:translateY(4px) scale(0.97);}to{opacity:1;transform:none;}}
@keyframes ltBlink{0%,49%{opacity:1;}50%,100%{opacity:0;}}
`;

const CANVAS_H_PADDING = 52; // matches the scroll container's "30px 26px 80px" padding (26px each side)

export default function LeadershipTree() {
  const [hovered, setHovered] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [availableWidth, setAvailableWidth] = useState(IDEAL_TOTAL_W);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => setAvailableWidth(el.clientWidth - CANVAS_H_PADDING);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const layout = useMemo(() => buildTree(availableWidth), [availableWidth]);


  return (
    <div id="leadership" className="scroll-anchor" style={{  background: "oklch(0.17 0.025 255)", color: "oklch(0.95 0.01 250)", fontFamily: "'IBM Plex Sans',system-ui,sans-serif" }}>
      <style>{CSS}</style>

      {/*//this is the section header with some atomic alterations */}
      <header className="flex flex-col section-wrap pb-2">
        <span className="section-label text-[30px] text-white">03</span>
        <h2 className="font-display text-display-xl font-bold uppercase text-white">
          Leadership
        </h2>
      </header>

      <div ref={scrollRef} style={{ overflow: "auto", padding: "6px 26px 24px", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            position: "relative",
            width: layout.width,
            height: layout.height,
            flex: "0 0 auto",
            backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            borderRadius: 14,
          }}
        >
          <svg
            width={layout.width}
            height={layout.height}
            viewBox={`0 0 ${layout.width} ${layout.height}`}
            style={{ position: "absolute", inset: 0, overflow: "visible", animation: "ltLayerIn 0.5s ease" }}
          >
            {layout.edges.map((e, i) => (
              <path key={i} d={e.d} stroke={e.color} strokeWidth={e.w} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={e.opacity} />
            ))}
          </svg>

          {layout.nodes.map((n) =>
            n.kind === "header" ? (
              <HeaderChip key={n.id} node={n} />
            ) : (
              <PersonBox
                key={n.id}
                node={n}
                hovered={hovered === n.id}
                onEnter={() => setHovered(n.id)}
                onLeave={() => setHovered(null)}
                canvasW={layout.width}
                canvasH={layout.height}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
