import { Link } from "react-router-dom";
import { ArrowRight, Eye, Mail, Rocket } from "lucide-react";
import { contact, img, leaders, mission, story, timeline, values, vision } from "../data/site";
import { CtaBanner, Icon, Label, PageHero, Reveal, Script, Section, SectionHead, Sheet } from "../components/ui";

const About = () => (
  <Sheet>
    <PageHero
      kicker="About COCAZ"
      title="Backing Zimbabwe's"
      script="creative future"
      lead="Meet the association, and the people, working to give Zimbabwe's creators proper backing."
      image="shamva2.jpg"
      alt="COCAZ board members in branded T-shirts standing in front of the association's banners"
      position="50% 40%"
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
            <p key={p.slice(0, 24)} data-prose="" className="text-mute mt-4 text-[15px] leading-relaxed sm:mt-5 sm:text-base">
              {p}
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
            <div className={`rounded-tile flex h-full min-h-[200px] flex-col p-7 sm:min-h-[260px] sm:p-10 ${b.tone}`} style={{ backgroundImage: b.pat, backgroundSize: b.size }}>
              <p className={`flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${b.sub}`}>
                <b.icon size={15} strokeWidth={2.25} aria-hidden="true" />
                {b.label}
              </p>
              <p className="mt-auto pt-8 text-xl font-medium leading-tight tracking-[-0.025em] sm:pt-10 sm:text-[1.9rem]">{b.text}</p>
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
            <div className="tile flex h-full items-start gap-4 p-4 sm:block sm:p-7">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white">
                <Icon name={v.icon} size={18} strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="text-base sm:mt-8 sm:text-xl">{v.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-mute sm:mt-2 sm:text-sm">{v.text}</p>
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
          <p className="text-mute mt-4 text-[15px] leading-relaxed">Connecting content creators and businesses across Zimbabwe and beyond.</p>
          <div className="rounded-tile mt-7 hidden overflow-hidden lg:block">
            <img src={img("zam2.jpg")} alt="Zimbabwean and Zambian creators together in the Power FM studio" loading="lazy" className="aspect-[16/10] w-full object-cover" />
          </div>
        </Reveal>
        <ol className="relative grid gap-1 before:absolute before:bottom-6 before:left-[23px] before:top-6 before:w-px before:bg-ink/15 sm:before:left-[27px]">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.title} i={i % 4} className="relative flex gap-4 rounded-3xl py-3 sm:gap-5 sm:p-3">
              <span className="num relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-[11px] font-bold text-gold ring-4 ring-paper sm:h-14 sm:w-14">
                {t.year}
              </span>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-base sm:text-lg">{t.title}</h3>
                <p className="text-mute mt-1 text-[13px] leading-relaxed sm:text-sm">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
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
            <article className="tile group grid h-full grid-cols-[84px_1fr] items-center gap-4 p-2 sm:block sm:p-2.5">
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
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">{l.role}</p>
                <h3 className="mt-1 text-base sm:text-lg">{l.name}</h3>
                <p className="text-mute mt-1 text-[12px] leading-relaxed sm:mt-2 sm:text-[13px]">{l.bio}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="panel mt-2.5 flex flex-col gap-4 p-5 sm:mt-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <p className="text-sm text-white/80">Write to the secretariat.</p>
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
