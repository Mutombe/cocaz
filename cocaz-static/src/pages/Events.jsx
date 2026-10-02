import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "@phosphor-icons/react";
import { events, img } from "../data/site";
import { CtaBanner, FactRows, PageHero, Section, SectionHead, Sheet } from "../components/ui";
import { Rich } from "../lib/rich";

/* Two masks make the bleed: the cover dissolves at its bottom edge, and the
   blurred copy behind the card fades in over the body. */
const COVER_FADE = "linear-gradient(to bottom, #000 76%, transparent 100%)";
const AMBIENT_MASK = "linear-gradient(to bottom, transparent 34%, #000 70%)";

const today = new Date().toISOString().slice(0, 10);
const upcoming = (e) => Boolean(e.iso) && e.iso >= today;

const categories = ["All", ...new Set(events.map((e) => e.category))];

const Events = () => {
  const [category, setCategory] = useState("All");
  const shown = events.filter((e) => category === "All" || e.category === category);

  return (
    <Sheet>
      <PageHero
        kicker="Events and experiences"
        title="Where creators"
        script="meet and learn"
        lead="Premieres, seminars and boot camps that bring Zimbabwe's creators and industry professionals together."
        image="mcaz-duo.jpg"
        alt="Two creators at a workshop table in front of a COCAZ banner"
        position="50% 45%"
      >
        <Link to="/contact" className="btn-ink group">
          Host an event with us
          <ArrowRight size={14} className="transition-transform duration-300 ease-brand group-hover:translate-x-1" aria-hidden="true" weight="bold" />
        </Link>
        <Link to="/gallery" className="btn-ghost">
          See the gallery
        </Link>
      </PageHero>

      <Section>
        <SectionHead label="Event highlights" title="Premieres, seminars and boot camps" text="What is coming up, and a look back at where COCAZ and its members have shown up." />

        <div className="no-scrollbar -mx-3 mt-7 flex gap-1.5 overflow-x-auto px-3 sm:mx-0 sm:mt-9 sm:flex-wrap sm:px-0" role="tablist" aria-label="Filter events by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold transition-colors duration-300 ease-brand ${
                category === c ? "border-ink bg-ink text-white" : "border-ink/20 text-ink-soft hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-5 grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-4">
          <AnimatePresence mode="popLayout">
            {shown.map((e) => (
              <motion.article
                key={e.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                className="rounded-tile group relative row-span-4 grid grid-rows-subgrid gap-y-0 overflow-hidden bg-white"
              >
                {/* Ambient bleed: a blurred, saturated copy of the card's own picture tints the body */}
                <img
                  src={img(e.image)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover opacity-30 blur-2xl saturate-150"
                  style={{ maskImage: AMBIENT_MASK, WebkitMaskImage: AMBIENT_MASK }}
                />
                <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[4/3.3]" style={{ maskImage: COVER_FADE, WebkitMaskImage: COVER_FADE }}>
                  {/* Posters are shown whole over a blurred copy of themselves; photos fill the frame */}
                  {e.poster && <img src={img(e.image)} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl" />}
                  <img
                    src={img(e.image)}
                    alt={e.alt}
                    loading="lazy"
                    style={{ objectPosition: e.position }}
                    className={`relative h-full w-full transition-transform duration-700 ease-brand group-hover:scale-105 ${e.poster ? "object-contain p-3" : "object-cover"}`}
                  />
                  <span className="chip glass-light absolute left-3.5 top-3.5">{e.category}</span>
                  {(upcoming(e) || e.featured) && (
                    <span className="chip absolute right-3.5 top-3.5 !bg-gold">
                      <Star size={11} aria-hidden="true" weight="fill" />
                      {upcoming(e) ? "Upcoming" : "Featured"}
                    </span>
                  )}
                </div>
                <h3 className="relative -mt-5 px-5 text-lg leading-snug sm:px-6 sm:text-xl">{e.title}</h3>
                <p className="relative mt-2 px-5 text-[0.8125rem] leading-relaxed text-ink-soft sm:px-6">
                  <Rich max={1}>{e.text}</Rich>
                </p>
                <FactRows
                  className="relative mx-5 mb-3 mt-4 self-end sm:mx-6 sm:mb-4"
                  items={[
                    { label: "When", value: e.date ?? "Past event" },
                    { label: "Where", value: e.location },
                  ]}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <CtaBanner
        label="Partner with us"
        title="Host an event"
        script="with COCAZ"
        text="Plan an event with our team."
        button="Contact us"
        to="/contact"
        image="road-stage.jpg"
        alt="A crowd in front of a roadshow stage in a city square"
        badge="events by cocaz • host with us •"
      />
    </Sheet>
  );
};

export default Events;
