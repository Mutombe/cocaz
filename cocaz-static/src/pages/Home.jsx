import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Asterisk, CalendarDays, Focus, MapPin, Play, Quote, X } from "lucide-react";
import { audiences, creators, disciplines, events, img, partners, programmeFilters, programmes, VIDEO } from "../data/site";
import { Bite, CtaBanner, FlagRoundel, Icon, Label, Reveal, Script, Section, SectionHead, Sheet, SpinBadge, TextLink, Ticker } from "../components/ui";
import { u } from "../lib/units";

const ease = [0.22, 0.61, 0.36, 1];

/* ------------------------------------------------------------ hero parts */

const news = events.filter((e) => e.stamp).map((e) => ({ title: e.short, date: e.stamp }));
const badgeText = "explore now • how it works • join us •";
const lead = "COCAZ is Zimbabwe's association for content creators, with the training, resources and network to help them thrive.";
const film = "Get ready for Mandi, our film in production";

const avatars = [
  { src: "loraine.jpg", position: "50% 22%" },
  { src: "matsanga.jpg", position: "50% 12%" },
  { src: "rashman.jpg", position: "45% 30%" },
];

/* A clapperboard standing in for the reference's floating product render */
const ClapperArt = ({ className = "" }) => (
  <svg viewBox="0 0 120 110" className={className} aria-hidden="true">
    <ellipse cx="62" cy="100" rx="40" ry="6" fill="rgb(var(--ink))" opacity=".16" />
    <g transform="rotate(-14 60 55)" fill="rgb(var(--ink))">
      <rect x="18" y="40" width="84" height="50" rx="9" />
      <rect x="28" y="54" width="40" height="5" rx="2.5" fill="#fff" opacity=".9" />
      <rect x="28" y="66" width="62" height="5" rx="2.5" fill="#fff" opacity=".35" />
      <rect x="28" y="77" width="26" height="5" rx="2.5" fill="#fff" opacity=".35" />
      <g transform="rotate(-16 20 36)">
        <rect x="16" y="22" width="88" height="15" rx="5" />
        {[30, 50, 70, 90].map((x) => (
          <path key={x} d={`M${x} 22h9l-7 15h-9Z`} fill="#fff" />
        ))}
      </g>
    </g>
  </svg>
);

const VideoModal = ({ onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] grid place-items-center bg-ink/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="COCAZ film"
    >
      <motion.div
        initial={{ scale: 0.94, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 16 }}
        transition={{ duration: 0.35, ease }}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <video src={VIDEO} controls autoPlay playsInline className="max-h-[80vh] w-full" />
        <button type="button" onClick={onClose} aria-label="Close video" className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-ink">
          <X size={18} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </motion.div>
    </motion.div>
  );
};

/* Cycles through recent events in the strip under the hero panel */
const useTicker = (length) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % length), 5200);
    return () => clearInterval(id);
  }, [length, index]);
  return [index, setIndex];
};

/* ---------------------------------------------- hero, desktop (to scale)
   Laid out on the reference's 633-unit grid, so it scales as one piece and
   always fills exactly one screen. */

const box = (x, y, w, h) => ({ left: u(x), top: u(y), width: u(w), height: u(h) });
const R = u(22);
const F = 14;

/* Concave corner that fuses two tiles touching at a point into one shape */
const Fillet = ({ x, y, at, color }) => (
  <span
    className="absolute"
    aria-hidden="true"
    style={{ ...box(x, y, F, F), background: `radial-gradient(circle at ${at}, transparent ${u(F)}, ${color} calc(${u(F)} + 0.6px))` }}
  />
);

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const HeroDesktop = ({ onPlay }) => {
  const [index, setIndex] = useTicker(news.length);
  const gold = "rgb(var(--gold))";

  return (
    <section className="hidden lg:block">
      <div className="container-x">
        <div className="relative overflow-hidden" style={{ height: u(492) }} data-hero>
          {/* ---- bento, left ---- */}
          {/* squares the logo tab's corner so it flows into the gold tile below */}
          <span className="absolute bg-gold" style={box(122, 40, 22, 22)} aria-hidden="true" />
          <Fillet x={144} y={62 - F} at="100% 0%" color={gold} />
          <Fillet x={144 - F} y={62} at="0% 100%" color={gold} />

          <motion.div {...rise(0.05)} className="absolute overflow-hidden" style={{ ...box(28, 76, 105, 214), borderRadius: R }}>
            <img
              src={img("hero.jpg")}
              alt="A smiling Zimbabwean creator in vibrant print holding a COCAZ membership card"
              className="h-full w-full object-cover object-[58%_20%]"
            />
          </motion.div>

          <div className="absolute grid place-items-center bg-gold" style={{ ...box(144, 62, 115, 116), borderRadius: `0 ${R} ${R} ${R}`, backgroundImage: "var(--pat-hatch)" }}>
            <motion.div {...rise(0.12)} className="w-[64%]">
              <ClapperArt className="w-full" />
            </motion.div>
          </div>

          <div className="absolute flex flex-col items-center justify-center bg-white text-center" style={{ ...box(144, 187, 115, 117), borderRadius: `${R} ${R} ${R} 0` }}>
            <motion.div {...rise(0.2)} className="flex flex-col items-center">
              <span style={{ width: u(28) }}>
                <FlagRoundel className="w-full" />
              </span>
              <p className="font-semibold uppercase" style={{ marginTop: u(10), fontSize: `max(9px, ${u(6.3)})`, lineHeight: 1.3, letterSpacing: "0.04em" }}>
                Proudly
                <br />
                Zimbabwean
              </p>
            </motion.div>
          </div>

          <Fillet x={144 - F} y={304 - F} at="0% 0%" color="#fff" />
          <Fillet x={144} y={304} at="100% 100%" color="#fff" />

          <div className="absolute" style={box(28, 304, 116, 116)}>
            <Link
              to="/services/talent-management"
              className="group flex h-full w-full flex-col justify-between bg-white"
              style={{ borderRadius: `${R} 0 ${R} ${R}`, padding: u(16) }}
            >
              <p className="font-semibold" style={{ fontSize: u(9), lineHeight: 1.15 }}>
                Our
                <br />
                creators
              </p>
              <span className="flex">
                {avatars.map((a, i) => (
                  <img
                    key={a.src}
                    src={img(a.src)}
                    alt=""
                    style={{ width: u(17), height: u(17), marginLeft: i ? u(-4) : 0, objectPosition: a.position }}
                    className="rounded-full border-2 border-white object-cover transition-transform duration-300 ease-brand group-hover:-translate-y-0.5"
                  />
                ))}
              </span>
            </Link>
          </div>

          <motion.div {...rise(0.3)} className="absolute" style={box(153, 315, 106, 106)}>
            <Link to="/join" aria-label="Explore how COCAZ works and join us" className="group block h-full w-full">
              <SpinBadge text={badgeText} className="h-full w-full transition-transform duration-500 ease-brand group-hover:scale-[1.04]">
                <Focus style={{ width: u(27), height: u(27) }} strokeWidth={1.75} aria-hidden="true" />
              </SpinBadge>
            </Link>
          </motion.div>

          <motion.div {...rise(0.36)} className="absolute" style={box(28, 435, 119, 119)}>
            <button type="button" onClick={onPlay} className="group relative block h-full w-full overflow-hidden bg-ink text-left text-white" style={{ borderRadius: R }}>
              <img src={img("stock-concert.jpg")} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-700 ease-brand group-hover:scale-105 group-hover:opacity-60" />
              <span className="absolute flex items-center font-semibold" style={{ left: u(14), top: u(13), gap: u(7), fontSize: `max(10px, ${u(7)})` }}>
                <span className="grid place-items-center rounded-full bg-gold text-ink" style={{ width: u(22), height: u(22) }}>
                  <Play style={{ width: u(8), height: u(8) }} fill="currentColor" className="translate-x-px" aria-hidden="true" />
                </span>
                Watch our story
              </span>
            </button>
          </motion.div>

          {/* ---- panel, right ---- */}
          <span className="absolute border border-[var(--hair)]" style={{ ...box(274, 61, 331, 244), borderRadius: R }} aria-hidden="true" />

          <motion.h1 {...rise(0.1)} className="absolute whitespace-nowrap" style={{ left: u(302), top: u(84), fontSize: u(34.5), lineHeight: 1.02 }}>
            Let&rsquo;s create
            <Script className="-mt-[0.04em] block text-[1.34em]">together</Script>
          </motion.h1>

          <motion.p {...rise(0.18)} className="text-mute absolute" style={{ left: u(302), top: u(180), width: u(262), fontSize: `max(12px, ${u(8)})`, lineHeight: 1.5 }}>
            {lead}
          </motion.p>

          <motion.div {...rise(0.26)} className="absolute" style={box(302, 242, 115, 34)}>
            <Link
              to="/join"
              className="grid h-full w-full place-items-center rounded-full bg-ink font-bold uppercase text-white transition-colors duration-300 ease-brand hover:bg-ink-soft"
              style={{ fontSize: `max(10px, ${u(7)})`, letterSpacing: "0.06em" }}
            >
              Join community
            </Link>
          </motion.div>

          <motion.div {...rise(0.3)} className="absolute" style={box(469, 243, 62, 33)}>
            <button
              type="button"
              onClick={onPlay}
              aria-label="Watch our story"
              className="absolute left-0 top-0 grid place-items-center rounded-full bg-ink text-white transition-transform duration-300 ease-brand hover:scale-110"
              style={{ width: u(33), height: u(33) }}
            >
              <Play style={{ width: u(11), height: u(11) }} fill="currentColor" className="translate-x-px" aria-hidden="true" />
            </button>
            <Link
              to="/services"
              aria-label="Explore our services"
              className="absolute right-0 top-0 grid place-items-center rounded-full bg-gold text-ink transition-transform duration-300 ease-brand hover:scale-110"
              style={{ width: u(33), height: u(33) }}
            >
              <Asterisk style={{ width: u(17), height: u(17) }} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </motion.div>

          {/* ---- release ---- */}
          <motion.div {...rise(0.34)} className="absolute" style={{ left: u(302), top: u(342), width: u(186) }}>
            <p className="text-mute font-medium uppercase" style={{ fontSize: `max(9px, ${u(6.4)})`, letterSpacing: "0.04em" }}>
              Featured film
            </p>
            <h2 style={{ marginTop: u(9), fontSize: u(17), lineHeight: 1.18 }}>
              <Link to="/services/media-production" className="hover:underline hover:underline-offset-4">
                {film}
              </Link>
            </h2>
          </motion.div>

          <motion.div {...rise(0.38)} className="absolute" style={box(498, 314, 107, 107)}>
            <Link to="/services/media-production" aria-label="Mandi, our featured film" className="group block h-full w-full overflow-hidden rounded-full">
              <img
                src={img("mandi.jpg")}
                alt="Still from Mandi: a woman in a gold headwrap walking through a wheat field"
                className="h-full w-full scale-[1.9] object-cover transition-transform duration-700 ease-brand group-hover:scale-[2.05]"
                style={{ transformOrigin: "72% 16%" }}
              />
            </Link>
          </motion.div>

          {/* ---- ticker ---- */}
          <span className="absolute border-t border-[var(--hair)]" style={{ left: u(302), top: u(436), width: u(303) }} aria-hidden="true" />

          <motion.div {...rise(0.44)} className="absolute" style={{ left: u(302), top: u(447), width: u(303), height: u(27) }} data-hero-last>
            <span className="absolute left-0 top-0 grid place-items-center rounded-full bg-gold" style={{ width: u(26), height: u(26) }}>
              <Asterisk style={{ width: u(13), height: u(13) }} strokeWidth={2} aria-hidden="true" />
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-y-0 flex items-center"
                style={{ left: u(41), right: u(26), fontSize: `max(10px, ${u(7)})`, lineHeight: 1.4 }}
              >
                <Link to="/events" className="truncate hover:underline" style={{ width: u(150) }}>
                  {news[index].title}
                </Link>
                <span className="num absolute" style={{ left: u(177) }}>
                  {news[index].date}
                </span>
              </motion.div>
            </AnimatePresence>
            <span className="absolute right-0 top-1/2 flex -translate-y-1/2" style={{ gap: u(2.5) }} role="tablist" aria-label="Recent events">
              {news.map((n, i) => (
                <button
                  key={n.date}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={n.title}
                  onClick={() => setIndex(i)}
                  className={`rounded-full border border-ink transition-colors duration-300 ${i === index ? "bg-ink" : ""}`}
                  style={{ width: `max(6px, ${u(3.6)})`, height: `max(6px, ${u(3.6)})` }}
                />
              ))}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------ hero, small screens
   A different composition, not a narrower one: panel, a compact bento and the
   event strip, sized together to fill one phone screen. */

const HeroMobile = ({ onPlay }) => {
  const [index, setIndex] = useTicker(news.length);

  return (
    <section className="lg:hidden">
      <div className="container-x">
        <div className="pt-nav inset-x-page flex min-h-[100svh] flex-col gap-2.5 pb-3 [@media(max-height:560px)]:min-h-0" data-hero>
          <div className="panel px-5 py-6 sm:px-9 sm:py-9">
            <h1 className="text-[clamp(2.2rem,10.6cqw,4.6rem)] leading-none">
              Let&rsquo;s create
              <Script className="-mt-[0.02em] block text-[1.34em]">together</Script>
            </h1>
            <p className="text-mute mt-4 max-w-md text-sm leading-relaxed">{lead}</p>
            <div className="mt-5 flex items-center gap-3">
              <Link to="/join" className="btn-ink flex-1 !px-5">
                Join community
              </Link>
              <span className="flex shrink-0">
                <button type="button" onClick={onPlay} aria-label="Watch our story" className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white">
                  <Play size={15} fill="currentColor" className="translate-x-px" aria-hidden="true" />
                </button>
                <Link to="/services" aria-label="Explore our services" className="-ml-2 grid h-12 w-12 place-items-center rounded-full bg-gold">
                  <Asterisk size={22} strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </span>
            </div>
          </div>

          {/* portrait beside two stacked tiles, with the disc riding the seam between them */}
          <div className="grid min-h-[200px] flex-1 grid-cols-[1.08fr_1fr] gap-2.5">
            <div className="rounded-tile relative overflow-hidden">
              <img src={img("hero.jpg")} alt="A smiling Zimbabwean creator holding a COCAZ membership card" className="absolute inset-0 h-full w-full object-cover object-[58%_22%]" />
              <span className="absolute bottom-2.5 left-2.5 flex items-center gap-2 rounded-full bg-white/90 py-1 pl-1 pr-3 text-[10px] font-bold uppercase tracking-[0.06em] backdrop-blur">
                <FlagRoundel className="w-5" />
                Since 2020
              </span>
            </div>
            <div className="relative grid grid-rows-2 gap-2.5">
              <div className="rounded-tile flex items-center bg-gold pl-[9%]" style={{ backgroundImage: "var(--pat-hatch)" }}>
                <ClapperArt className="w-[52%]" />
              </div>
              <Link to="/services/talent-management" className="rounded-tile flex flex-col justify-end gap-2.5 bg-white p-4">
                <span className="flex">
                  {avatars.map((a, i) => (
                    <img key={a.src} src={img(a.src)} alt="" style={{ objectPosition: a.position }} className={`h-8 w-8 rounded-full border-2 border-white object-cover ${i ? "-ml-2.5" : ""}`} />
                  ))}
                </span>
                <p className="text-[13px] font-semibold leading-tight">
                  Our
                  <br />
                  creators
                </p>
              </Link>
              <Link to="/join" aria-label="Explore how COCAZ works and join us" className="absolute right-2 top-1/2 w-[46%] -translate-y-1/2">
                <SpinBadge text={badgeText} className="aspect-square w-full ring-4 ring-paper">
                  <Focus size={20} strokeWidth={1.75} aria-hidden="true" />
                </SpinBadge>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-[var(--hair)] px-1 pt-3" data-hero-last>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold">
              <Asterisk size={16} aria-hidden="true" />
            </span>
            <Link to="/events" className="min-w-0 flex-1 truncate text-[13px]">
              {news[index].title}
            </Link>
            <span className="num text-[13px]">{news[index].date}</span>
            <span className="flex gap-1.5">
              {news.map((n, i) => (
                <button key={n.date} type="button" aria-label={n.title} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full border border-ink ${i === index ? "bg-ink" : ""}`} />
              ))}
            </span>
          </div>
        </div>

        {/* the film note sits just under the fold on a phone */}
        <div className="inset-x-page pb-2 pt-6">
          <Link to="/services/media-production" className="panel flex items-center justify-between gap-4 py-3 pl-5 pr-3">
            <div>
              <Label>Featured film</Label>
              <p className="mt-1.5 text-lg leading-tight tracking-[-0.02em]">{film}</p>
            </div>
            <span className="block h-20 w-20 shrink-0 overflow-hidden rounded-full">
              <img src={img("mandi.jpg")} alt="" className="h-full w-full scale-[1.9] object-cover" style={{ transformOrigin: "72% 16%" }} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------------------------------------- sections */

const ProgrammeCard = ({ item }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.4, ease }}
    className="w-[78%] shrink-0 snap-start sm:w-auto"
  >
    <Bite as={Link} to={item.to} className="lift h-full" card={`flex flex-col p-2 sm:p-2.5 ${item.highlight ? "bg-gold" : "bg-white"}`}>
      <div className="rounded-inner relative h-40 overflow-hidden sm:h-52">
        <img
          src={img(item.image)}
          alt={item.alt}
          loading="lazy"
          style={{ objectPosition: item.position }}
          className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
        />
        <span className="chip absolute bottom-2.5 left-2.5">
          <Icon name={item.icon} size={13} strokeWidth={2.25} />
          {item.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-5">
        <h3 className="text-lg sm:text-xl">{item.title}</h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-mute">{item.text}</p>
        <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
          {item.stats.map((s) => (
            <div key={s.label} className="border-t border-ink/15 pt-2.5">
              <p className="num text-base font-bold leading-tight">{s.value}</p>
              <p className="mt-0.5 text-[11px] leading-tight text-ink-mute">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Bite>
  </motion.div>
);

const Programmes = () => {
  const [filter, setFilter] = useState("all");
  const shown = programmes.filter((p) => filter === "all" || p.filters.includes(filter));

  return (
    <Section>
      <SectionHead
        label="What we do"
        title="Services that create value"
        text="The tools, knowledge and connections creators need to make a living from their work."
        action={<TextLink to="/services">View all services</TextLink>}
      />

      <div className="no-scrollbar -mx-3 mt-7 flex gap-1.5 overflow-x-auto px-3 sm:mx-0 sm:mt-9 sm:px-0" role="tablist" aria-label="Filter what we do">
        {programmeFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold transition-colors duration-300 ease-brand ${
              filter === f.id ? "border-ink bg-ink text-white" : "border-ink/20 text-ink-soft hover:border-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* a swipeable row on phones, a grid from tablet up */}
      <motion.div layout className="no-scrollbar -mx-3 mt-5 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-3 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:px-0 lg:grid-cols-3 lg:gap-4">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <ProgrammeCard key={p.title} item={p} />
          ))}
        </AnimatePresence>
        <Link
          to="/services"
          className="rounded-tile group flex w-[60%] shrink-0 snap-start flex-col justify-between bg-ink p-6 text-white sm:w-auto sm:p-8"
          style={{ backgroundImage: "var(--pat-grid)", backgroundSize: "34px 34px" }}
        >
          <Asterisk size={34} strokeWidth={1.5} className="text-gold transition-transform duration-700 ease-brand group-hover:rotate-90" aria-hidden="true" />
          <p className="mt-10 text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
            Eight more ways we back <Script className="text-[1.3em] text-gold">creators</Script>
          </p>
          <span className="link-underline mt-6 w-fit">
            See them all
            <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
          </span>
        </Link>
      </motion.div>
    </Section>
  );
};

const audienceTones = [
  { card: "bg-stone", chip: "", text: "text-ink-mute", num: "text-ink/[0.07]" },
  { card: "bg-ink text-white", chip: "!bg-white/10 !text-white", text: "text-white/65", num: "text-white/10" },
  { card: "bg-gold", chip: "", text: "text-ink-soft", num: "text-ink/10" },
  { card: "bg-stone", chip: "", text: "text-ink-mute", num: "text-ink/[0.07]" },
];

const Audiences = () => (
  <Section ground="white">
    <SectionHead label="Who we work with" title="One association, many ways in" text="We connect brands with creators, and creators with the audiences waiting for them." />
    <div className="mt-8 grid gap-2.5 sm:mt-10 sm:gap-3 md:grid-cols-2 lg:gap-4">
      {audiences.map((a, i) => {
        const t = audienceTones[i];
        return (
          <Reveal key={a.title} i={i % 2}>
            <Bite as={Link} to={a.to} className="lift h-full" card={`relative flex min-h-[220px] flex-col p-6 sm:min-h-[300px] sm:p-9 ${t.card}`}>
              <span className={`chip w-fit ${t.chip}`}>{a.status}</span>
              <span className={`num pointer-events-none absolute -bottom-6 right-4 text-[8rem] font-bold leading-none sm:-bottom-8 sm:right-5 sm:text-[11rem] ${t.num}`} aria-hidden="true">
                0{i + 1}
              </span>
              <div className="relative mt-auto max-w-sm pt-8 sm:pt-14">
                <h3 className="text-2xl font-bold uppercase leading-none sm:text-3xl">{a.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed sm:mt-4 ${t.text}`}>{a.text}</p>
                <span className="link-underline mt-5 sm:mt-7">
                  {a.cta}
                  <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
                </span>
              </div>
            </Bite>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

const Creators = () => (
  <Section ground="dark">
    <SectionHead
      label="Our influencers"
      title={
        <>
          The voices behind <Script className="text-[1.25em] text-gold">the views</Script>
        </>
      }
      text="Meet the creators who trust COCAZ with their digital presence."
      action={<TextLink to="/services/talent-management">Talent management</TextLink>}
    />
    {/* photo tiles stay two up on a phone */}
    <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 lg:grid-cols-4 lg:gap-4">
      {creators.map((c, i) => (
        <Reveal key={c.name} i={i}>
          <Bite as="a" href={c.link} target="_blank" rel="noopener noreferrer" className="lift" card="relative aspect-[3/4] bg-ink-soft">
            <img src={img(c.image)} alt={`${c.name}, ${c.role}`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 ease-brand group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-6">
              <Quote size={16} className="hidden text-gold sm:block" fill="currentColor" aria-hidden="true" />
              <p className="mt-2 hidden text-[13px] leading-snug text-white/80 sm:block">{c.quote}</p>
              <h3 className="text-base font-bold uppercase leading-tight sm:mt-3 sm:text-xl">{c.name}</h3>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-gold">{c.role}</p>
            </div>
          </Bite>
        </Reveal>
      ))}
    </div>
  </Section>
);

const EventHighlights = () => {
  const [first, ...rest] = [events[0], events[4], events[1]];
  return (
    <Section>
      <SectionHead
        label="Events and experiences"
        title="Where the community meets"
        text="Premieres, seminars and boot camps from Harare to Lusaka and Cape Town."
        action={<TextLink to="/events">View all events</TextLink>}
      />
      <div className="mt-8 grid gap-2.5 sm:mt-10 sm:gap-3 lg:grid-cols-[1.15fr_1fr] lg:gap-4">
        <Reveal>
          <Bite as={Link} to="/events" className="lift h-full" card="relative min-h-[380px] bg-[#17a39a] text-white sm:min-h-[440px]">
            <img src={img(first.image)} alt={first.alt} loading="lazy" className="absolute inset-0 h-full w-full object-contain object-right transition-transform duration-700 ease-brand group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/45 to-transparent" />
            <span className="chip absolute left-4 top-4">{first.category}</span>
            <div className="absolute bottom-0 left-0 max-w-sm p-6 sm:p-9">
              <h3 className="text-2xl font-bold uppercase leading-none sm:text-3xl">{first.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:mt-4">{first.text}</p>
              <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-gold sm:mt-5">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} aria-hidden="true" />
                  {first.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} aria-hidden="true" />
                  {first.location}
                </span>
              </p>
            </div>
          </Bite>
        </Reveal>
        <div className="grid gap-2.5 sm:gap-3 lg:gap-4">
          {rest.map((e, i) => (
            <Reveal key={e.title} i={i + 1}>
              <Link to="/events" className="tile lift group grid h-full grid-cols-[104px_1fr] p-2 sm:grid-cols-[210px_1fr] sm:p-2.5">
                <div className="rounded-inner relative min-h-[104px] overflow-hidden">
                  <img src={img(e.image)} alt={e.alt} loading="lazy" style={{ objectPosition: e.position }} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center py-2 pl-4 pr-2 sm:p-6">
                  <span className="chip w-fit !bg-stone !px-2.5 !py-1.5 sm:!px-3.5 sm:!py-2">{e.category}</span>
                  <h3 className="mt-2.5 text-base leading-snug sm:mt-4 sm:text-xl">{e.title}</h3>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium text-ink-mute sm:mt-auto sm:pt-5 sm:text-xs">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} aria-hidden="true" />
                      {e.date}
                    </span>
                    <span className="hidden items-center gap-1.5 sm:flex">
                      <MapPin size={13} aria-hidden="true" />
                      {e.location}
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="panel mt-2.5 grid items-center gap-5 px-5 py-6 sm:mt-3 sm:px-10 sm:py-8 lg:mt-4 lg:grid-cols-[200px_1fr] lg:gap-8">
        <Label>Trusted by local brands</Label>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused] sm:gap-16 sm:pr-16">
            {[...partners, ...partners].map((p, i) => (
              <img
                key={i}
                src={img(p.logo)}
                alt={i < partners.length ? p.name : ""}
                aria-hidden={i >= partners.length}
                loading="lazy"
                className={`h-11 w-auto max-w-[150px] object-contain sm:h-16 sm:max-w-[190px] ${p.rounded ? "rounded-lg" : ""}`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

const Home = () => {
  const [video, setVideo] = useState(false);
  const play = () => setVideo(true);

  return (
    <>
      <Sheet>
        <HeroDesktop onPlay={play} />
        <HeroMobile onPlay={play} />
        <Ticker items={disciplines} />
        <Programmes />
        <Audiences />
        <Creators />
        <EventHighlights />
        <CtaBanner />
      </Sheet>
      {/* Outside the page so it stacks above the navigation */}
      <AnimatePresence>{video && <VideoModal onClose={() => setVideo(false)} />}</AnimatePresence>
    </>
  );
};

export default Home;
