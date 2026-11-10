/**
 * Stroke-only hair / hat overlays for the 望春风 duet show — same cyan wire language as
 * Chimera's anatomical heads (no filled blobs). Mapped by voice name.
 */
import type { ReactNode } from "react";

const STROKE = "#5ec8ff";
const STROKE_DIM = "#4fb6f2";
const SW = 1.15;
const SW_FINE = 0.85;

function Svg(props: { viewBox: string; children: ReactNode; className?: string }) {
  return (
    <svg className={props.className ?? "headwear-svg"} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {props.children}
    </svg>
  );
}

/** 陶喆 Soul Power 斜刘海 — thick side-swept fringe as parallel cyan curves */
function LeadBangs() {
  return (
    <Svg viewBox="0 0 240 160">
      {/* crown outline (open arcs, not a filled cap) */}
      <path d="M42,78 C58,36 92,18 124,20 C158,22 192,40 208,74" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M48,80 C64,44 96,28 124,30 C154,32 184,46 200,76" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.75" />
      {/* side-swept bangs across forehead (left ← thicker / longer tip toward temple) */}
      <path d="M58,72 C88,48 128,42 168,52 C188,58 204,70 214,86" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M62,78 C94,54 132,48 170,58 C188,64 200,76 210,90" stroke={STROKE} strokeWidth={SW_FINE} strokeLinecap="round" />
      <path d="M70,84 C100,62 136,56 172,66 C186,72 198,82 206,94" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.9" />
      {/* longer fringe tip dangling toward eye */}
      <path d="M150,58 C170,66 186,80 198,102" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M142,62 C160,70 176,84 188,104" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.85" />
      {/* left temple strands */}
      <path d="M50,76 C46,96 44,118 46,136" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.7" />
      <path d="M58,74 C56,92 54,112 55,128" stroke={STROKE} strokeWidth={0.7} strokeLinecap="round" opacity="0.55" />
    </Svg>
  );
}

/** Far-left newsboy / flat cap — brim + soft crown in strokes */
function FlatCap() {
  return (
    <Svg viewBox="0 0 220 140">
      {/* brim */}
      <path d="M28,88 C60,78 110,74 160,78 C180,80 198,86 208,94" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M32,92 C64,84 112,80 158,84 C176,86 192,90 202,96" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.7" />
      {/* crown */}
      <path d="M48,88 C52,52 80,34 112,32 C148,30 176,44 186,78" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M58,86 C64,56 88,42 114,40 C144,38 168,50 176,76" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.8" />
      {/* panel seams */}
      <path d="M112,34 L112,78" stroke={STROKE_DIM} strokeWidth={0.7} opacity="0.55" />
      <path d="M80,42 C92,58 98,70 100,84" stroke={STROKE_DIM} strokeWidth={0.7} opacity="0.45" />
      <path d="M146,42 C136,58 130,70 128,84" stroke={STROKE_DIM} strokeWidth={0.7} opacity="0.45" />
      {/* front button hint */}
      <circle cx="112" cy="38" r="3" stroke={STROKE} strokeWidth={0.8} />
    </Svg>
  );
}

/** Far-right fedora with band */
function Fedora() {
  return (
    <Svg viewBox="0 0 220 150">
      {/* wide brim */}
      <path d="M18,96 C50,84 100,78 150,80 C180,82 200,88 210,98 C200,104 170,110 120,112 C70,114 36,108 22,100 C18,98 18,96 18,96" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" strokeLinejoin="round" />
      {/* crown */}
      <path d="M58,94 C60,58 86,36 118,34 C152,32 180,50 186,90" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M68,92 C72,62 94,44 118,42 C146,40 168,54 174,88" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.8" />
      {/* pinched crown crease */}
      <path d="M100,40 C112,48 124,48 136,40" stroke={STROKE} strokeWidth={SW_FINE} strokeLinecap="round" />
      {/* hat band */}
      <path d="M62,78 C90,72 130,72 180,78" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M64,82 C92,76 128,76 178,82" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.75" />
    </Svg>
  );
}

/** Longer hair + scarf silhouette */
function LongHairScarf() {
  return (
    <Svg viewBox="0 0 220 200">
      {/* crown / parting */}
      <path d="M48,70 C70,34 100,24 128,26 C158,28 186,46 196,74" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      {/* longer strands down the sides / jaw */}
      <path d="M50,72 C46,100 44,130 48,160" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M58,68 C56,98 54,128 58,158" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.85" />
      <path d="M188,76 C192,106 194,136 188,166" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M178,72 C184,102 186,132 182,162" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.85" />
      {/* ear-tucked fringe */}
      <path d="M70,78 C90,62 120,58 150,66" stroke={STROKE} strokeWidth={SW_FINE} strokeLinecap="round" />
      <path d="M78,86 C100,72 130,70 156,78" stroke={STROKE_DIM} strokeWidth={0.75} strokeLinecap="round" opacity="0.7" />
      {/* scarf loop around neck */}
      <path d="M62,150 C90,138 140,138 172,152" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M68,158 C96,148 138,148 166,160" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.8" />
      {/* scarf tails hanging down */}
      <path d="M78,156 C74,172 70,188 68,198" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M158,158 C164,174 170,190 174,200" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M88,156 C86,170 84,184 82,196" stroke={STROKE_DIM} strokeWidth={0.75} strokeLinecap="round" opacity="0.65" />
    </Svg>
  );
}

/** Short upright / spiked hair */
function ShortHair() {
  return (
    <Svg viewBox="0 0 220 140">
      <path d="M50,88 C72,48 100,34 128,34 C158,34 186,50 198,84" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.55" />
      {/* upright spikes */}
      <path d="M70,78 L64,42" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M86,70 L82,30" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M102,64 L102,24" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M118,62 L122,22" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M134,66 L142,28" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M150,72 L162,36" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      <path d="M166,80 L180,48" stroke={STROKE} strokeWidth={SW} strokeLinecap="round" />
      {/* connecting scalp arc */}
      <path d="M68,80 C90,58 120,52 156,62" stroke={STROKE_DIM} strokeWidth={SW_FINE} strokeLinecap="round" opacity="0.75" />
    </Svg>
  );
}

export type HeadwearKind = "lead-bangs" | "flat-cap" | "fedora" | "long-hair-scarf" | "short-hair";

/** Map show voice names → accessory */
export function headwearForVoice(name: string): HeadwearKind | null {
  const n = name.toLowerCase();
  if (/主唱|陶喆|lead/.test(n)) return "lead-bangs";
  if (/sop/.test(n)) return "flat-cap";
  if (/alto/.test(n)) return "long-hair-scarf";
  if (/ten/.test(n)) return "short-hair";
  if (/bass|basse/.test(n)) return "fedora";
  return null;
}

const KIND_CLASS: Record<HeadwearKind, string> = {
  "lead-bangs": "hw-lead",
  "flat-cap": "hw-flatcap",
  "fedora": "hw-fedora",
  "long-hair-scarf": "hw-long",
  "short-hair": "hw-short",
};

export function HeadwearOverlay(props: { name: string }) {
  const kind = headwearForVoice(props.name);
  if (!kind) return null;
  const body =
    kind === "lead-bangs" ? <LeadBangs /> :
    kind === "flat-cap" ? <FlatCap /> :
    kind === "fedora" ? <Fedora /> :
    kind === "long-hair-scarf" ? <LongHairScarf /> :
    <ShortHair />;
  return (
    <div className={`headwear-overlay ${KIND_CLASS[kind]}`} aria-hidden="true">
      {body}
    </div>
  );
}
