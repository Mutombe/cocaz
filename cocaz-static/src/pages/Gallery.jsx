import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { gallery, img } from "../data/site";
import { CtaBanner, PageHero, Section, Sheet } from "../components/ui";

const groups = ["All", ...new Set(gallery.map((g) => g.group))];
const spans = { wide: "sm:col-span-2", tall: "row-span-2" };

const Lightbox = ({ items, index, setIndex }) => {
  const item = items[index];
  const step = useCallback((d) => setIndex((i) => (i + d + items.length) % items.length), [items.length, setIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [setIndex, step]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex flex-col bg-ink/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={() => setIndex(null)}
    >
      <div className="flex items-center justify-between text-white">
        <p className="num text-xs font-semibold text-white/60">
          {index + 1} / {items.length}
        </p>
        <button type="button" onClick={() => setIndex(null)} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink">
          <X size={18} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center py-4" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div key={item.src} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="flex h-full max-w-5xl items-center">
            {item.type === "video" ? (
              <video src={item.src} controls autoPlay playsInline className="max-h-full max-w-full rounded-2xl" />
            ) : (
              <img src={img(item.src)} alt={item.caption} className="max-h-full max-w-full rounded-2xl object-contain" />
            )}
          </motion.div>
        </AnimatePresence>
        <button type="button" onClick={() => step(-1)} aria-label="Previous" className="absolute left-0 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-gold hover:text-ink">
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next" className="absolute right-0 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-gold hover:text-ink">
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
      <p className="pb-2 text-center text-sm font-semibold text-white">{item.caption}</p>
    </motion.div>
  );
};

const Gallery = () => {
  const [group, setGroup] = useState("All");
  const [index, setIndex] = useState(null);
  const shown = gallery.filter((g) => group === "All" || g.group === group);

  return (
    <>
      <Sheet>
        <PageHero kicker="Event gallery" title="Moments from" script="our community" lead="Award nights, boot camps and behind the scenes with the COCAZ community." />

        <Section className="!pt-4">
          <div className="no-scrollbar -mx-3 flex gap-1.5 overflow-x-auto px-3 sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Filter gallery">
            {groups.map((g) => (
              <button
                key={g}
                type="button"
                role="tab"
                aria-selected={group === g}
                onClick={() => setGroup(g)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold transition-colors duration-300 ease-brand ${
                  group === g ? "border-ink bg-ink text-white" : "border-ink/20 text-ink-soft hover:border-ink"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* image tiles stay two up on a phone */}
          <div className="mt-5 grid auto-rows-[9.375rem] grid-flow-dense grid-cols-2 gap-2.5 sm:auto-rows-[13.75rem] sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
            {shown.map((item, i) => (
              <motion.button
                key={item.src}
                type="button"
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: Math.min(i * 0.03, 0.3) }}
                onClick={() => setIndex(i)}
                className={`rounded-tile group relative overflow-hidden bg-stone text-left ${group === "All" ? spans[item.span] ?? "" : ""}`}
              >
                <img
                  src={img(item.type === "video" ? item.poster : item.src)}
                  alt={item.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
                />
                {item.type === "video" && (
                  <span className="glass absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full">
                    <Play size={18} fill="currentColor" className="translate-x-px" aria-hidden="true" />
                  </span>
                )}
                <p className="glass rounded-inner absolute inset-x-2 bottom-2 translate-y-2 px-3.5 py-3 text-[0.8125rem] font-semibold leading-snug text-white opacity-0 transition duration-300 ease-brand group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {item.caption}
                </p>
              </motion.button>
            ))}
          </div>
        </Section>

        <CtaBanner title="Be in the" script="next photo" text="Join COCAZ and take your place in Zimbabwe's creative community." />
      </Sheet>

      <AnimatePresence>{index !== null && <Lightbox items={shown} index={index} setIndex={setIndex} />}</AnimatePresence>
    </>
  );
};

export default Gallery;
