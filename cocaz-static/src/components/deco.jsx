import { useId } from "react";

/* Decorative assets, all drawn in CSS or inline SVG and coloured from the tokens. */

// The orbs wear the colours of the Zimbabwean flag. Written out in full so the
// stylesheet build keeps every tone.
const tones = { gold: "orb orb-gold", leaf: "orb orb-leaf", flame: "orb orb-flame", ink: "orb orb-ink" };

/* A glossy bubble. `tone` picks the flag colour, `ring` makes it a clear glass bubble. */
export const Orb = ({ tone = "gold", ring = false, drift = false, className = "", style }) => (
  <span aria-hidden="true" className={`${ring ? "orb-ring" : tones[tone]} ${drift ? "orb-drift" : ""} ${className}`} style={style} />
);

/* Gradient shapes for the tinted cards. Each is drawn on a 200 by 300 board that
   sits against the card's right edge, so the shapes run off it as in the reference. */
export const Shape = ({ name, className = "" }) => {
  const id = useId();
  const common = { viewBox: "0 0 200 300", preserveAspectRatio: "xMaxYMid slice", className, "aria-hidden": true, fill: "none" };
  switch (name) {
    // Four rounded parallelograms: the top pair leans one way, the bottom pair the other
    case "petals":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="rgb(var(--peach))" />
              <stop offset="1" stopColor="rgb(var(--ember))" />
            </linearGradient>
          </defs>
          {[
            [16, 48, 24],
            [126, 48, 24],
            [16, 168, -24],
            [126, 168, -24],
          ].map(([x, y, skew], i) => (
            <rect key={i} x={x} y={y} width="96" height="110" rx="30" transform={`skewX(${skew})`} style={{ transformOrigin: `${x + 48}px ${y + 55}px` }} fill={`url(#${id})`} />
          ))}
        </svg>
      );
    // A full disc with a bowl under it, and a column of bowls and domes cut by the edge
    case "discs":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="rgb(var(--gold-deep))" />
              <stop offset="1" stopColor="rgb(var(--gold) / 0.3)" />
            </linearGradient>
            <linearGradient id={`${id}b`} x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="rgb(var(--gold-deep))" />
              <stop offset="1" stopColor="rgb(var(--gold) / 0.25)" />
            </linearGradient>
          </defs>
          <circle cx="76" cy="134" r="56" fill={`url(#${id})`} />
          <path d="M20 204h112a56 56 0 0 1-112 0Z" fill={`url(#${id}b)`} />
          <path d="M144 0h112a56 56 0 0 1-112 0Z" fill={`url(#${id})`} />
          <path d="M144 72h112a56 56 0 0 1-112 0Z" fill={`url(#${id}b)`} opacity=".45" />
          <path d="M144 196a56 56 0 0 1 112 0Z" fill={`url(#${id})`} />
          <path d="M144 300a56 56 0 0 1 112 0Z" fill={`url(#${id})`} opacity=".7" />
        </svg>
      );
    // A soft outer disc, a lens across it, then a pale ring around a dark core
    case "eye":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="rgb(var(--violet) / 0.38)" />
              <stop offset="1" stopColor="#fff" stopOpacity=".85" />
            </linearGradient>
            <linearGradient id={`${id}b`} x1="1" y1="0" x2="0" y2="1">
              <stop stopColor="rgb(var(--violet))" />
              <stop offset="1" stopColor="rgb(var(--lilac))" />
            </linearGradient>
            <linearGradient id={`${id}c`} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="rgb(var(--lilac))" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
          </defs>
          <circle cx="150" cy="150" r="124" fill={`url(#${id})`} />
          <ellipse cx="158" cy="148" rx="118" ry="80" fill={`url(#${id}b)`} />
          <circle cx="154" cy="150" r="52" fill={`url(#${id}c)`} />
          <circle cx="154" cy="150" r="24" fill={`url(#${id}b)`} />
        </svg>
      );
    // Blocks stepping down the edge, joined corner to corner in one piece
    case "steps":
      return (
        <svg {...common}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="rgb(var(--moss))" />
              <stop offset="1" stopColor="rgb(var(--sage))" />
            </linearGradient>
          </defs>
          <path
            d="M34 24H98a12 12 0 0 1 12 12V83a12 12 0 0 0 12 12H200V195H122a12 12 0 0 0-12 12V273a12 12 0 0 0 12 12H200V300H100Q100 290 88 290H34a12 12 0 0 1-12-12V202a12 12 0 0 1 12-12H88a12 12 0 0 0 12-12V112a12 12 0 0 0-12-12H34a12 12 0 0 1-12-12V36a12 12 0 0 1 12-12Z"
            fill={`url(#${id})`}
          />
        </svg>
      );
    default:
      return null;
  }
};
