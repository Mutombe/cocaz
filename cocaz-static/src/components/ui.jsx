import { useEffect, useId, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  CalendarHeart,
  ChartBar,
  CurrencyCircleDollar,
  DeviceMobile,
  FilmSlate,
  GraduationCap,
  Handshake,
  Medal,
  Megaphone,
  MicrophoneStage,
  MusicNotes,
  ShareNetwork,
  Star,
  Target,
  TrendUp,
  Trophy,
  Users,
  Wallet,
} from "@phosphor-icons/react";
import { img } from "../data/site";
import { watch } from "../lib/reveal";
import { Rich } from "../lib/rich";
import { Orb } from "./deco";

// Keys are the names used in the site data; values are Phosphor icons
const icons = {
  Award: Medal,
  BadgeDollarSign: CurrencyCircleDollar,
  BarChart3: ChartBar,
  CalendarHeart,
  Clapperboard: FilmSlate,
  GraduationCap,
  Handshake,
  Megaphone,
  Mic2: MicrophoneStage,
  Music: MusicNotes,
  Smartphone: DeviceMobile,
  Star,
  Target,
  TrendingUp: TrendUp,
  Trophy,
  Users,
  Wallet,
  Waypoints: ShareNetwork,
};

export const Icon = ({ name, ...props }) => {
  const Cmp = icons[name] ?? Star;
  return <Cmp aria-hidden="true" {...props} />;
};

/* Fades content up as it scrolls into view. `i` staggers siblings so a row cascades. */
export const Reveal = ({ children, i = 0, className = "", as: Tag = "div", style, ...rest }) => {
  const ref = useRef(null);
  useEffect(() => watch(ref.current), []);
  return (
    <Tag ref={ref} data-reveal="" style={{ "--i": i, ...style }} className={className} {...rest}>
      {children}
    </Tag>
  );
};

/* Small uppercase eyebrow */
export const Label = ({ children, className = "" }) => (
  <p className={`text-mute font-ref text-[0.625rem] font-bold uppercase tracking-[0.12em] ${className}`}>{children}</p>
);

/* The accent face. Used a handful of times across the whole site, never for anything functional. */
export const Script = ({ children, className = "" }) => <span className={`script ${className}`}>{children}</span>;

/* The four flag colours as a thin brand rule */
export const FlagRule = ({ className = "" }) => (
  <span className={`flex h-1 w-16 overflow-hidden rounded-full ${className}`} aria-hidden="true">
    <span className="flex-1 bg-leaf" />
    <span className="flex-1 bg-gold" />
    <span className="flex-1 bg-flame" />
    <span className="flex-1 bg-ink" />
  </span>
);

/* Flag stripes in a roundel, echoing the "O" of the COCAZ wordmark */
export const FlagRoundel = ({ className = "" }) => {
  const id = useId();
  const stripes = ["leaf", "gold", "flame", "ink", "flame", "gold", "leaf"];
  return (
    <svg viewBox="0 0 70 70" className={className} aria-hidden="true">
      <clipPath id={id}>
        <circle cx="35" cy="35" r="35" />
      </clipPath>
      <g clipPath={`url(#${id})`}>
        {stripes.map((c, i) => (
          <rect key={i} x="0" y={i * 10} width="70" height="10" fill={`rgb(var(--${c}))`} />
        ))}
        <path d="M0 0 34 35 0 70Z" fill="#fff" />
        <path d="m11 27 2.2 6.2h6.5l-5.3 3.9 2 6.3-5.4-3.9-5.4 3.9 2-6.3L2.3 33.2h6.5Z" fill="rgb(var(--flame))" />
      </g>
    </svg>
  );
};

export const Logo = ({ className = "h-10", white = false }) => (
  <img
    src={img(white ? "logo-white.png" : "logo.png")}
    alt="COCAZ, the Content Creators Association of Zimbabwe"
    width="465"
    height="202"
    className={`w-auto ${className}`}
  />
);

/* Disc with slowly rotating type around a centre mark */
export const SpinBadge = ({ text, children, className = "", tone = "bg-ink text-white" }) => {
  const id = useId();
  return (
    <span className={`relative grid place-items-center rounded-full ${tone} ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id={id} d="M100 100m-72 0a72 72 0 1 1 144 0a72 72 0 1 1-144 0" />
        </defs>
        <text fill="currentColor" fontSize="15.5" fontWeight="500">
          <textPath href={`#${id}`} textLength="440" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
};

/* The site's signature: a tile with its top-right corner bitten out and a round
   badge sitting in the bite. Pass `as={Link}` to make the whole card a link. */
export const Bite = ({ as: Tag = "div", className = "", card = "", icon, children, ...rest }) => (
  <Tag className={`group relative block ${className}`} {...rest}>
    <div className={`bite-card h-full ${card}`}>{children}</div>
    <span className="bite-badge" aria-hidden="true">
      {icon ?? <ArrowUpRight size={18} weight="bold" />}
    </span>
  </Tag>
);

/* Written out in full so the stylesheet build can see every ground class */
const grounds = { white: "ground-white", dark: "ground-dark", gold: "ground-gold" };

/* A ruled strip of facts that closes a card: equal cells, one hairline between
   them, figure above its label. Every card in a row ends on the same line. */
export const FactStrip = ({ items, className = "", tone = "bg-stone" }) => (
  <dl className={`grid grid-cols-2 divide-x divide-ink/10 rounded-[var(--r-inner)] ${tone} ${className}`}>
    {items.map((it) => (
      <div key={it.label} className="flex min-w-0 flex-col-reverse gap-1.5 px-4 py-3">
        <dt className="truncate font-ref text-[0.625rem] font-bold uppercase leading-none tracking-[0.08em] text-ink-mute">{it.label}</dt>
        <dd className="num truncate text-lg font-bold leading-none">{it.value}</dd>
      </div>
    ))}
  </dl>
);

/* Label on the left, value on the right, one rule between rows */
export const FactRows = ({ items, className = "" }) => (
  <dl className={`divide-y divide-ink/10 border-t border-ink/10 ${className}`}>
    {items.map((it) => (
      <div key={it.label} className="flex items-baseline justify-between gap-4 py-2.5">
        <dt className="shrink-0 font-ref text-[0.625rem] font-bold uppercase leading-none tracking-[0.08em] text-ink-mute">{it.label}</dt>
        <dd className="truncate text-right text-[0.8125rem] font-medium leading-none">{it.value}</dd>
      </div>
    ))}
  </dl>
);

export const Sheet = ({ children }) => <main className="relative z-10">{children}</main>;

/* Sections alternate their ground down the page. Anything other than paper is a
   rounded full-width band carrying its own texture. */
export const Section = ({ children, className = "", id, ground = "paper" }) => (
  <section id={id} className={`scroll-mt-24 ${ground === "paper" ? "" : `${grounds[ground]} my-[var(--band-gap)]`}`}>
    <div className="container-x">
      <div className={`inset-x-page ${ground === "paper" ? "py-[calc(var(--section-y)*0.62)]" : "py-section"} ${className}`}>{children}</div>
    </div>
  </section>
);

/* Shared top-of-page block: image tile on the left, hairline panel on the right, the home hero's grammar */
export const PageHero = ({ kicker, title, script, lead, image, alt, position = "50% 50%", children }) => (
  <section>
    <div className="container-x">
      <div className={`pt-nav inset-x-page grid gap-2.5 pb-2 sm:gap-3 lg:gap-4 ${image ? "lg:grid-cols-[.72fr_1.28fr]" : ""}`}>
        {image && (
          <Reveal className="relative order-2 h-52 overflow-hidden rounded-[var(--r-tile)_var(--r-sharp)_var(--r-tile)_var(--r-tile)] sm:h-80 lg:order-1 lg:h-auto lg:min-h-[26.25rem]">
            <img src={img(image)} alt={alt} style={{ objectPosition: position }} className="absolute inset-0 h-full w-full object-cover" />
          </Reveal>
        )}
        <Reveal i={1} className="panel relative order-1 flex flex-col justify-center overflow-hidden px-6 py-9 sm:px-10 sm:py-14 lg:order-2">
          <Orb tone="flame" drift className="-right-8 -top-10 w-28 sm:w-40" />
          <Orb tone="leaf" className="right-16 top-14 hidden w-10 sm:block" />
          <Orb tone="gold" className="right-32 top-5 hidden w-6 sm:block" />
          <Orb ring className="right-6 top-24 hidden w-16 sm:block" />
          <div className="relative">
            <Label>{kicker}</Label>
          <h1 className="mt-4 text-[clamp(2.1rem,5.2cqw,4.4rem)] leading-[0.98] sm:mt-5">
            {title}
            {script && (
              <>
                {" "}
                <Script className="block pt-1 text-[1.12em]">{script}</Script>
              </>
            )}
          </h1>
          {lead && (
            <p data-prose="" className="text-mute mt-5 max-w-xl text-[0.9375rem] leading-relaxed sm:mt-6">
              <Rich>{lead}</Rich>
            </p>
          )}
          {children && <div className="mt-7 grid gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-3">{children}</div>}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* Split header: title on the left, one supporting line on the right, bottom aligned */
export const SectionHead = ({ label, title, text, action, className = "" }) => (
  <Reveal className={`grid gap-4 md:grid-cols-[1.15fr_1fr] md:items-end md:gap-12 ${className}`}>
    <div>
      <Label>{label}</Label>
      <h2 className="mt-3 text-[clamp(1.7rem,3.5cqw,2.9rem)] leading-[1.08] sm:mt-4">{title}</h2>
    </div>
    {(text || action) && (
      <div className="flex flex-col gap-5 md:items-end md:text-right">
        {text && (
          <p data-prose="" className="text-mute max-w-md text-[0.9375rem] leading-relaxed">
            <Rich>{text}</Rich>
          </p>
        )}
        {action}
      </div>
    )}
  </Reveal>
);

export const TextLink = ({ to, children }) => (
  <Link to={to} className="link-underline w-fit shrink-0">
    {children}
    <ArrowRight size={14} aria-hidden="true" weight="bold" />
  </Link>
);

/* A slow band of words between sections */
export const Ticker = ({ items, ground = "gold" }) => (
  <div className={`${grounds[ground]} my-[var(--band-gap)] overflow-hidden py-4 sm:py-5`} aria-hidden="true">
    <div className="flex w-max animate-marquee-slow items-center">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center font-display text-sm font-bold uppercase tracking-[-0.01em] sm:text-lg">
          <span className="px-5 sm:px-7">{item}</span>
          <Asterisk size={18} weight="bold" />
        </span>
      ))}
    </div>
  </div>
);

/* Closing call to action on the gold ground */
export const CtaBanner = ({
  label = "Join the association",
  title = "Got a story",
  script = "to tell?",
  text = "Join Zimbabwe's community of creators and the brands that work with them.",
  button = "Join COCAZ",
  to = "/join",
  image = "vicfalls.jpg",
  alt = "Aerial view of Victoria Falls",
  badge = "let's create together • join cocaz •",
}) => (
  <Section ground="gold">
    <Reveal className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div className="max-w-xl">
        <Label>{label}</Label>
        <h2 className="mt-4 text-[clamp(2.2rem,5.4cqw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.035em]">
          {title}
          <Script className="block pt-1 text-[1.15em]">{script}</Script>
        </h2>
        <p className="text-mute mt-5 max-w-md text-[0.9375rem] leading-relaxed">{text}</p>
        <Link to={to} className="btn-ink group mt-7 w-full sm:w-auto">
          {button}
          <ArrowRight size={14} className="transition-transform duration-300 ease-brand group-hover:translate-x-1" aria-hidden="true" weight="bold" />
        </Link>
      </div>
      <div className="relative h-40 w-60 shrink-0 self-end sm:h-56 sm:w-80 md:self-auto">
        <Orb tone="leaf" drift className="-top-6 left-8 w-12 sm:w-16" />
        <Orb tone="flame" className="-bottom-3 right-2 z-10 w-9 sm:w-12" />
        <img src={img(image)} alt={alt} loading="lazy" className="absolute right-0 top-0 aspect-square h-full rounded-full object-cover" />
        <SpinBadge text={badge} className="absolute bottom-0 left-0 aspect-square h-[64%]">
          <ArrowUpRight size={22} aria-hidden="true" weight="bold" />
        </SpinBadge>
      </div>
    </Reveal>
  </Section>
);
