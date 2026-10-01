import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Star } from "lucide-react";
import { events, img } from "../data/site";
import { CtaBanner, PageHero, Section, SectionHead, Sheet } from "../components/ui";

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
        image="zam3.jpg"
        alt="Two COCAZ creators in branded caps talking on air in a radio studio"
        position="50% 40%"
      >
        <Link to="/contact" className="btn-ink group">
          Host an event with us
          <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 ease-brand group-hover:translate-x-1" aria-hidden="true" />
        </Link>
        <Link to="/gallery" className="btn-ghost">
          See the gallery
        </Link>
      </PageHero>

      <Section>
        <SectionHead label="Event highlights" title="Premieres, seminars and boot camps" text="A look back at where COCAZ and its members have shown up. For what is next, get in touch." />

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
                className="tile group flex flex-col p-2 sm:p-2.5"
              >
                <div className="rounded-inner relative aspect-[16/11] overflow-hidden bg-stone sm:aspect-[4/3.3]">
                  {/* Posters are shown whole over a blurred copy of themselves; photos fill the frame */}
                  {e.poster && <img src={img(e.image)} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl" />}
                  <img
                    src={img(e.image)}
                    alt={e.alt}
                    loading="lazy"
                    style={{ objectPosition: e.position }}
                    className={`relative h-full w-full transition-transform duration-700 ease-brand group-hover:scale-105 ${e.poster ? "object-contain p-3" : "object-cover"}`}
                  />
                  <span className="chip absolute left-2.5 top-2.5">{e.category}</span>
                  {e.featured && (
                    <span className="chip absolute right-2.5 top-2.5 !bg-gold">
                      <Star size={11} fill="currentColor" aria-hidden="true" />
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-4 sm:px-4 sm:pb-4 sm:pt-5">
                  <h3 className="text-lg leading-snug sm:text-xl">{e.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-mute">{e.text}</p>
                  <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 border-t border-ink/10 pt-4 text-xs font-medium text-ink-soft max-sm:mt-4">
                    {e.date && (
                      <li className="flex items-center gap-1.5">
                        <CalendarDays size={13} aria-hidden="true" />
                        {e.date}
                      </li>
                    )}
                    <li className="flex items-center gap-1.5">
                      <MapPin size={13} aria-hidden="true" />
                      {e.location}
                    </li>
                  </ul>
                </div>
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
        image="stock-concert.jpg"
        alt="Concert crowd in front of a brightly lit stage"
        badge="events by cocaz • host with us •"
      />
    </Sheet>
  );
};

export default Events;
