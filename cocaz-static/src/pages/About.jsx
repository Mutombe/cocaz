import { Link } from "react-router-dom";
import { ArrowRight, Eye, Mail, Rocket } from "lucide-react";
import { abroad, contact, img, leaders, mission, story, timeline, values, vision } from "../data/site";
import { CtaBanner, Icon, Label, PageHero, Reveal, Script, Section, SectionHead, Sheet } from "../components/ui";
import { Rich } from "../lib/rich";
import { Orb } from "../components/deco";

const tints = ["bg-sage", "bg-lilac", "bg-peach", "bg-butter", "bg-lilac", "bg-sage"];
const years = ["bg-ink text-gold", "bg-ember text-white", "bg-violet text-white", "bg-moss text-white"];

const About = () => (
  <Sheet>
    <PageHero
      kicker="About COCAZ"
      title="Backing Zimbabwe's"
      script="creative future"
      lead="Meet the association, and the people, working to give Zimbabwe's creators proper backing."
      image="meet-lineup.jpg"
      alt="Creators lined up in front of a COCAZ backdrop"
      position="50% 50%"
    >
      <Link to="/join" className="btn-ink group">
        Join COCAZ
        <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 ease-brand group-hover:translate-x-1" aria-hidden="true" />
      </Link>
      <Link to="/contact" className="btn-ghost">
        Contact us
      </Link>
    </PageHero>

    <Section>
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <Reveal className="relative">
          <div className="rounded-tile overflow-hidden">
            <img src={img("camp3.jpg")} alt="Three COCAZ members in branded caps and T-shirts" loading="lazy" className="aspect-[4/3] w-full object-cover object-[50%_30%] sm:aspect-[4/5]" />
          </div>
          <div className="absolute -bottom-4 right-4 w-40 rounded-3xl bg-gold p-4 sm:right-8 sm:w-44" style={{ backgroundImage: "var(--pat-hatch)" }}>
            <p className="num text-3xl font-bold">2020</p>
            <p className="text-xs font-semibold leading-snug">Year we began</p>
          </div>
        </Reveal>
        <Reveal i={1} className="flex flex-col justify-center pt-4 lg:pt-0">
          <Label>Our story</Label>
          <h2 className="mt-3 text-[clamp(1.7rem,3.5cqw,2.9rem)] leading-[1.08] sm:mt-4">
            A bold vision for <Script className="text-[1.25em]">Zimbabwe&rsquo;s creators</Script>
          </h2>
          {story.map((p) => (
            <p key={p.slice(0, 24)} data-prose="" className="text-mute mt-4 text-[0.9375rem] leading-relaxed sm:mt-5 sm:text-base">
              <Rich>{p}</Rich>
            </p>
          ))}
        </Reveal>
      </div>

      <div className="mt-12 grid gap-2.5 sm:mt-16 sm:gap-3 md:grid-cols-2 lg:gap-4">
        {[
          { icon: Eye, label: "Our vision", text: vision, tone: "bg-ink text-white", sub: "text-gold", pat: "var(--pat-grid)", size: "34px 34px" },
          { icon: Rocket, label: "Our mission", text: mission, tone: "bg-gold text-ink", sub: "text-ink", pat: "var(--pat-hatch)", size: "auto" },
        ].map((b, i) => (
          <Reveal key={b.label} i={i}>
            <div className={`rounded-tile relative flex h-full min-h-[12.5rem] flex-col overflow-hidden p-7 sm:min-h-[16.25rem] sm:p-10 ${b.tone}`} style={{ backgroundImage: b.pat, backgroundSize: b.size }}>
              <Orb tone={i ? "leaf" : "flame"} drift className="-right-8 -top-10 w-32 sm:w-40" />
              <Orb ring className="right-24 top-6 w-10 sm:right-32" />
              <p className={`relative flex items-center gap-2.5 font-ref text-[0.625rem] font-bold uppercase tracking-[0.12em] ${b.sub}`}>
                <b.icon size={15} strokeWidth={2.25} aria-hidden="true" />
                {b.label}
              </p>
              <p className="relative mt-auto pt-8 font-display text-xl font-medium leading-tight tracking-[-0.025em] sm:pt-10 sm:text-[1.9rem]">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section ground="white">
      <SectionHead label="What membership means" title="Built around the creator" text="Six things members tell us they get from belonging to the association." />
      {/* icon beside text on a phone, stacked tiles from tablet up */}
      <div className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-4">
        {values.map((v, i) => (
          <Reveal key={v.title} i={i % 3}>
            <div className={`tile flex h-full items-start gap-4 p-4 sm:block sm:p-7 ${tints[i]}`}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white">
                <Icon name={v.icon} size={18} strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="text-base sm:mt-8 sm:text-xl">{v.title}</h3>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-mute sm:mt-2 sm:text-sm">
                  <Rich max={1}>{v.text}</Rich>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section>
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Label>Our experience</Label>
          <h2 className="mt-3 text-[clamp(1.7rem,3.5cqw,2.9rem)] leading-[1.08] sm:mt-4">Milestones since 2020</h2>
          <p className="text-mute mt-4 text-[0.9375rem] leading-relaxed">Connecting content creators and businesses across Zimbabwe and beyond.</p>
          <div className="rounded-tile mt-7 hidden overflow-hidden lg:block">
            <img src={img("meet-speaker.jpg")} alt="A member speaking at a COCAZ gathering" loading="lazy" className="aspect-[16/10] w-full object-cover object-[60%_40%]" />
          </div>
        </Reveal>
        <ol className="relative grid gap-1 before:absolute before:bottom-6 before:left-[1.4375rem] before:top-6 before:w-px before:bg-ink/15 sm:before:left-[1.6875rem]">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.title} i={i % 4} className="relative flex gap-4 rounded-3xl py-3 sm:gap-5 sm:p-3">
              <span className={`num relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full text-[0.6875rem] font-bold ring-4 ring-paper sm:h-14 sm:w-14 ${years[i % years.length]}`}>
                {t.year}
              </span>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-base sm:text-lg">{t.title}</h3>
                <p className="text-mute mt-1 text-[0.8125rem] leading-relaxed sm:text-sm">
                  <Rich max={1}>{t.text}</Rich>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>

    <Section ground="white">
      <SectionHead label="Across Africa" title="Zimbabwean creators, on the road" text="From Zambia to Malawi and Nigeria, we take members where the work is." />
      {/* the first tile runs wide on a phone, the other two sit side by side */}
      <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 md:grid-cols-3 lg:gap-4">
        {abroad.map((a, i) => (
          <Reveal key={a.country} i={i} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
            <article className={`rounded-tile group relative overflow-hidden bg-ink text-white md:aspect-[4/5] ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
              <img src={img(a.image)} alt={a.alt} loading="lazy" style={{ objectPosition: a.position }} className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105" />
              <div className="glass rounded-inner absolute inset-x-2 bottom-2 p-3.5 sm:inset-x-2.5 sm:bottom-2.5 sm:p-5">
                <h3 className="text-lg font-bold uppercase leading-none sm:text-2xl">{a.country}</h3>
                <p className="mt-1.5 text-[0.75rem] leading-snug text-white/80 sm:text-sm">{a.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section ground="dark" id="leadership">
      <SectionHead
        label="Our leadership team"
        title={
          <>
            The people <Script className="text-[1.25em] text-gold">at the helm</Script>
          </>
        }
        text="Eight people give their time to run the association for its members."
      />
      {/* a compact list on a phone, portrait cards from tablet up */}
      <div className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {leaders.map((l, i) => (
          <Reveal key={l.name} i={i % 4}>
            <article className="tile group grid h-full grid-cols-[5.25rem_1fr] items-center gap-4 p-2 sm:block sm:p-2.5">
              <div className="rounded-inner relative aspect-square overflow-hidden bg-ink-soft sm:aspect-[4/5]">
                <img
                  src={img(l.image)}
                  alt={`${l.name}, ${l.role}`}
                  loading="lazy"
                  style={{ objectPosition: l.position }}
                  className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
                />
              </div>
              <div className="py-1 pr-2 sm:p-4">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-gold">{l.role}</p>
                <h3 className="mt-1 whitespace-nowrap text-base lg:text-[1.0625rem]">{l.name}</h3>
                <p className="text-mute mt-1 text-[0.75rem] leading-relaxed sm:mt-2 sm:text-[0.8125rem]">{l.bio}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="panel mt-2.5 flex flex-col gap-4 p-5 sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-sm text-white/80">
          <Rich>Write to the secretariat.</Rich>
        </p>
        <a href={`mailto:${contact.email}`} className="btn-ink">
          <Mail size={14} aria-hidden="true" />
          Email the team
        </a>
      </Reveal>
    </Section>

    <CtaBanner />
  </Sheet>
);

export default About;
