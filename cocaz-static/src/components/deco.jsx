import { useId } from "react";

/* Decorative assets, all drawn in CSS or inline SVG and coloured from the tokens. */

// Written out in full so the stylesheet build keeps every tone
const tones = { gold: "orb orb-gold", ember: "orb orb-ember", violet: "orb orb-violet", moss: "orb orb-moss" };

/* A glossy bubble. `tone` picks the colour pair, `ring` makes it a clear glass bubble. */
export const Orb = ({ tone = "gold", ring = false, drift = false, className = "", style }) => (
  <span aria-hidden="true" className={`${ring ? "orb-ring" : tones[tone]} ${drift ? "orb-drift" : ""} ${className}`} style={style} />
);

/* Soft gradient shapes for the tinted cards: petals, discs, an eye and steps. */
export const Shape = ({ name, className = "" }) => {
  const id = useId();
  const common = { className, "aria-hidden": true, fill: "none" };
  switch (name) {
    case "petals":
      return (
        <svg viewBox="0 0 200 220" {...common}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="rgb(var(--peach))" />
              <stop offset="1" stopColor="rgb(var(--ember))" />
            </linearGradient>
          </defs>
          {[
            [0, 0, -18],
            [104, 0, 18],
            [0, 114, 18],
            [104, 114, -18],
          ].map(([x, y, skew], i) => (
            <rect key={i} x={x + 8} y={y + 6} width="88" height="96" rx="34" transform={`skewX(${skew})`} style={{ transformOrigin: `${x + 52}px ${y + 54}px` }} fill={`url(#${id})`} />
          ))}
        </svg>
      );
    case "discs":
      return (
        <svg viewBox="0 0 200 220" {...common}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="rgb(var(--gold) / 0.35)" />
              <stop offset="1" stopColor="rgb(var(--gold-deep))" />
            </linearGradient>
          </defs>
          <circle cx="70" cy="62" r="54" fill={`url(#${id})`} />
          <path d="M16 128h108a54 54 0 0 1-108 0Z" fill={`url(#${id})`} opacity=".85" />
          <path d="M140 8h60v96a60 60 0 0 1-60-60Z" fill={`url(#${id})`} opacity=".7" />
          <circle cx="184" cy="170" r="46" fill={`url(#${id})`} opacity=".8" />
        </svg>
      );
    case "eye":
      return (
        <svg viewBox="0 0 220 220" {...common}>
          <defs>
            <radialGradient id={id} cx=".5" cy=".5" r=".5">
              <stop stopColor="#fff" stopOpacity=".9" />
              <stop offset="1" stopColor="rgb(var(--violet))" />
            </radialGradient>
          </defs>
          <ellipse cx="120" cy="110" rx="118" ry="88" fill={`url(#${id})`} opacity=".8" />
          <circle cx="120" cy="110" r="52" fill="rgb(var(--lilac))" opacity=".85" />
          <circle cx="120" cy="110" r="24" fill="rgb(var(--violet))" opacity=".6" />
        </svg>
      );
    case "steps":
      return (
        <svg viewBox="0 0 200 220" {...common}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="rgb(var(--moss))" />
              <stop offset="1" stopColor="rgb(var(--sage))" />
            </linearGradient>
          </defs>
          <path d="M30 0h68a16 16 0 0 1 16 16v54a16 16 0 0 0 16 16h70v38H130a16 16 0 0 0-16 16v64a16 16 0 0 1-16 16H30a16 16 0 0 1-16-16v-66a16 16 0 0 1 16-16V16A16 16 0 0 1 30 0Z" fill={`url(#${id})`} />
        </svg>
      );
    default:
      return null;
  }
};
