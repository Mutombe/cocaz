import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { img, serviceDetails } from "../data/site";
import { Bite, CtaBanner, Icon, Label, PageHero, Reveal, Section, SectionHead, Sheet } from "../components/ui";
import { Rich } from "../lib/rich";

const tints = ["bg-sage", "bg-lilac", "bg-peach", "bg-butter", "bg-lilac", "bg-sage"];

const Accordion = ({ items }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="grid gap-2">
      {items.map((item, i) => {
        const active = open === i;
        return (
          <div key={item.title} className={`rounded-3xl transition-colors duration-300 ease-brand ${active ? "bg-ink text-white" : "bg-stone"}`}>
            <button type="button" onClick={() => setOpen(active ? -1 : i)} aria-expanded={active} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5">
              <span className="flex items-center gap-4 text-base font-semibold tracking-[-0.02em] sm:text-lg">
                <span className={`num text-xs font-bold ${active ? "text-gold" : "text-ink-mute"}`}>0{i + 1}</span>
                {item.title}
              </span>
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 ease-brand ${active ? "rotate-45 bg-gold text-ink" : "bg-white"}`}>
                <Plus size={16} strokeWidth={2.5} aria-hidden="true" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 sm:pl-[3.4rem]">
                    <p className="text-sm leading-relaxed text-white/75">{item.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.points.map((p) => (
                        <li key={p} className="rounded-full bg-white/10 px-3.5 py-2 text-xs font-semibold">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const s = serviceDetails[slug];
  if (!s) return <Navigate to="/services" replace />;

  return (
    <Sheet>
      <PageHero kicker={s.kicker} title={s.title} script={s.script} lead={s.lead} image={s.image} alt={s.alt} position={s.position}>
        <Link to="/contact" className="btn-ink group">
          {s.cta.button}
          <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 ease-brand group-hover:translate-x-1" aria-hidden="true" />
        </Link>
        <Link to="/services" className="btn-ghost">
          <ArrowLeft size={14} strokeWidth={2.5} aria-hidden="true" />
          All services
        </Link>
      </PageHero>

      {s.feature && (
        <Section>
          <Reveal className="rounded-tile grid overflow-hidden bg-ink text-white lg:grid-cols-2" style={{ backgroundImage: "var(--pat-grid)", backgroundSize: "34px 34px" }}>
            <div className="order-2 flex flex-col justify-center p-7 sm:p-12 lg:order-1">
              <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold">
                <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
                {s.feature.label}, {s.feature.note.toLowerCase()}
              </p>
              <h2 className="mt-4 text-5xl font-bold uppercase leading-none tracking-[-0.035em] sm:mt-5 sm:text-7xl">{s.feature.title}</h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70 sm:mt-5">
                <Rich>{s.feature.text}</Rich>
              </p>
              <ul className="mt-6 grid gap-3">
                {s.feature.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-ink">
                      <Check size={13} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <img src={img(s.feature.image)} alt={s.feature.alt} loading="lazy" className="order-1 aspect-[4/3] h-full w-full object-cover lg:order-2 lg:aspect-square" />
          </Reveal>
        </Section>
      )}

      {s.intro && (
        <Section>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Label>Overview</Label>
              <h2 className="mt-3 text-[clamp(1.7rem,3.5cqw,2.9rem)] leading-[1.08] sm:mt-4">{s.intro.title}</h2>
              <p data-prose="" className="text-mute mt-4 text-[15px] leading-relaxed sm:mt-5 sm:text-base">
                <Rich>{s.intro.text}</Rich>
              </p>
            </Reveal>
            {/* list tiles stay two up */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {s.lists.map((list, i) => (
                <Reveal key={list.title} i={i} className={`rounded-tile p-4 sm:p-7 ${i ? "bg-lilac" : "bg-peach"}`}>
                  <h3 className="text-base sm:text-lg">{list.title}</h3>
                  <ul className="mt-4 grid gap-2 sm:mt-5 sm:gap-2.5">
                    {list.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-ink-soft sm:gap-2.5 sm:text-sm">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-2.5 grid grid-cols-3 gap-2.5 sm:mt-3 sm:gap-3 lg:mt-4 lg:gap-4">
            {s.strip.map((p, i) => (
              <Reveal key={p.label} i={i} className="rounded-tile relative aspect-square overflow-hidden sm:aspect-[4/3]">
                <img src={img(p.image)} alt={p.alt} loading="lazy" style={{ objectPosition: p.position }} className="h-full w-full object-cover" />
                <span className="chip glass-light absolute bottom-3 left-3 hidden sm:inline-flex">{p.label}</span>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {s.artists && (
        <Section>
          <Label>Featured artists</Label>
          <div className="mt-5 grid gap-2.5 sm:gap-3 md:grid-cols-2 lg:gap-4">
            {s.artists.map((a, i) => (
              <Reveal key={a.name} i={i}>
                <Bite card="relative aspect-[4/5] bg-ink text-white sm:aspect-[5/4]" icon={<Icon name="Mic2" size={18} strokeWidth={2.25} />}>
                  <img src={img(a.image)} alt={a.name} loading="lazy" style={{ objectPosition: a.position }} className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent to-50%" />
                  <span className="chip glass-light absolute left-4 top-4">{a.badge}</span>
                  <div className="glass rounded-inner absolute inset-x-2.5 bottom-2.5 p-5 sm:inset-x-3 sm:bottom-3 sm:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold">{a.genre}</p>
                    <h3 className="mt-2 text-3xl font-bold uppercase leading-none sm:text-4xl">{a.name}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">{a.text}</p>
                  </div>
                </Bite>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <Section ground="white">
        <SectionHead label="What is included" title={s.cardsTitle} />

        {s.cards && (
          // picture beside text on a phone, picture cards from tablet up
          <div className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-4">
            {s.cards.map((c, i) => (
              <Reveal key={c.title} i={i % 3}>
                <article className="tile group grid h-full grid-cols-[96px_1fr] items-center gap-4 p-2 sm:block sm:p-2.5">
                  <div className="rounded-inner aspect-square overflow-hidden sm:aspect-[16/10]">
                    <img src={img(c.image)} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105" />
                  </div>
                  <div className="py-1 pr-2 sm:p-4">
                    <h3 className="text-base sm:text-lg">{c.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-mute sm:mt-2">
                      <Rich max={1}>{c.text}</Rich>
                    </p>
                    <ul className="mt-4 hidden flex-wrap gap-1.5 sm:flex">
                      {c.points.map((p) => (
                        <li key={p} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-ink-soft">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        {s.accordion && (
          <Reveal className="mt-8 sm:mt-10">
            <Accordion items={s.accordion} />
          </Reveal>
        )}

        {s.tiles && (
          <div className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-4">
            {s.tiles.map((t, i) => (
              <Reveal key={t.title} i={i % 3}>
                <div className={`tile flex h-full items-start gap-4 p-4 sm:block sm:p-7 ${tints[i]}`}>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white">
                    <Icon name={t.icon} size={18} strokeWidth={2.25} />
                  </span>
                  <div>
                    <h3 className="text-base sm:mt-8 sm:text-xl">{t.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-mute sm:mt-2 sm:text-sm">
                      <Rich max={1}>{t.text}</Rich>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <CtaBanner label="Talk to us" title={s.cta.title} script={s.cta.script} text={s.cta.text} button={s.cta.button} to="/contact" />
    </Sheet>
  );
};

export default ServiceDetail;
