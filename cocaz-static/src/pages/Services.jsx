import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { creatorServices, img, partnerStories, process, programmes } from "../data/site";
import { Bite, CtaBanner, Icon, Label, PageHero, Reveal, Script, Section, SectionHead, Sheet } from "../components/ui";
import { Rich } from "../lib/rich";

const tints = ["bg-sage", "bg-lilac", "bg-peach", "bg-butter"];
const stepTones = ["bg-gold text-ink", "bg-ember text-white", "bg-violet text-white", "bg-moss text-white"];

const core = programmes.filter((p) => p.to.startsWith("/services/"));

const Services = () => (
  <Sheet>
    <PageHero
      kicker="Our services"
      title="Services for"
      script="creators and brands"
      lead="The tools, knowledge and connections creators need to make a living from their work."
      image="road-creator.jpg"
      alt="A creator performing at a brand activation stand"
      position="50% 62%"
    >
      <Link to="/contact" className="btn-ink group">
        Work with us
        <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 ease-brand group-hover:translate-x-1" aria-hidden="true" />
      </Link>
      <a href="#partners" className="btn-ghost">
        For brands
      </a>
    </PageHero>

    <Section>
      <SectionHead label="Core services" title="Three ways we get hands on" text="Each has its own team, its own page and a direct line to the people who run it." />
      <div className="mt-8 grid gap-2.5 sm:mt-10 sm:gap-3 lg:grid-cols-3 lg:gap-4">
        {core.map((s, i) => (
          <Reveal key={s.title} i={i}>
            <Bite as={Link} to={s.to} className="lift" card="relative aspect-[16/11] bg-ink text-white sm:aspect-[16/9] lg:aspect-[4/5]">
              <img
                src={img(s.image)}
                alt={s.alt}
                loading="lazy"
                style={{ objectPosition: s.position }}
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-brand group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent to-50%" />
              <span className="chip glass-light absolute left-4 top-4">
                <Icon name={s.icon} size={13} strokeWidth={2.25} />
                {s.tag}
              </span>
              <div className="glass rounded-inner absolute inset-x-2.5 bottom-2.5 p-4 sm:inset-x-3 sm:bottom-3 sm:p-6">
                <h3 className="text-2xl font-bold uppercase leading-none sm:text-3xl">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">{s.text}</p>
              </div>
            </Bite>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section ground="white">
      <SectionHead label="For creators" title="Everything a creator needs to grow" text="Eight kinds of support, available to every member of the association." />
      {/* icon beside text on a phone, numbered tiles from tablet up */}
      <div className="mt-8 grid gap-2.5 sm:mt-10 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {creatorServices.map((s, i) => (
          <Reveal key={s.title} i={i % 4}>
            <div className={`tile relative flex h-full items-start gap-4 overflow-hidden p-4 sm:block sm:p-6 ${tints[i % tints.length]}`}>
              <span className="num pointer-events-none absolute -top-2 right-4 hidden text-7xl font-bold text-ink/[0.06] sm:block" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white">
                <Icon name={s.icon} size={18} strokeWidth={2.25} />
              </span>
              <div>
                <h3 className="text-base sm:mt-10 sm:text-lg">{s.title}</h3>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-mute sm:mt-2">
                  <Rich max={1}>{s.text}</Rich>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>

    <Section id="partners">
      <SectionHead
        label="For brands"
        title="Partnerships that put brands in the conversation"
        text="Work with Zimbabwe's leading creators."
        action={
          <Link to="/contact" className="btn-ink group w-full sm:w-auto">
            Become a partner
            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-300 ease-brand group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        }
      />
      <div className="mt-8 grid gap-2.5 sm:mt-10 sm:gap-3 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:gap-4">
        {partnerStories.map((p, i) => (
          <Reveal key={p.name} i={i}>
            {p.image ? (
              <article className="rounded-tile relative h-full min-h-[18.75rem] overflow-hidden bg-ink text-white lg:min-h-[23.75rem]">
                <img src={img(p.image)} alt={`${p.name} campaign artwork`} loading="lazy" style={{ objectPosition: p.position }} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent to-50%" />
                <span className="chip glass-light absolute left-4 top-4">Notable partner</span>
                <div className="glass rounded-inner absolute inset-x-2.5 bottom-2.5 p-5">
                  <h3 className="text-2xl font-bold uppercase leading-none">{p.name}</h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/75">
                    <Rich links={false}>{p.text}</Rich>
                  </p>
                </div>
              </article>
            ) : (
              <article className="tile grid h-full grid-cols-[5.5rem_1fr] items-center gap-4 p-2.5 lg:block lg:p-3">
                <div className="rounded-inner aspect-square bg-stone p-3 lg:aspect-auto lg:h-32 lg:p-5">
                  <img src={img(p.logo)} alt={`${p.name} logo`} loading="lazy" className="h-full w-full object-contain" />
                </div>
                <div className="pr-2 lg:p-3 lg:pt-5">
                  <p className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-ink-mute">{p.sector}</p>
                  <h3 className="mt-1 text-base lg:text-xl">{p.name}</h3>
                  <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-mute lg:mt-2">
                    <Rich links={false}>{p.text}</Rich>
                  </p>
                </div>
              </article>
            )}
          </Reveal>
        ))}
      </div>
    </Section>

    <Section ground="dark">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <Label>How a campaign runs</Label>
          <h2 className="mt-3 text-[clamp(1.7rem,3.5cqw,2.9rem)] leading-[1.08] sm:mt-4">
            From the first brief <Script className="text-[1.25em] text-gold">to the results</Script>
          </h2>
          <div className="rounded-tile mt-7 hidden overflow-hidden lg:block">
            <img src={img("road-square.jpg")} alt="A city square filled with people around a roadshow stage" loading="lazy" className="aspect-[16/11] w-full object-cover" />
          </div>
        </Reveal>
        {/* number beside the text, so four steps do not become four screens */}
        <ol className="grid gap-2.5 sm:grid-cols-2 sm:gap-3 lg:gap-4">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} i={i % 2} className="tile flex gap-4 p-5 sm:block sm:p-7">
              <span className={`num grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold ${stepTones[i]}`}>0{i + 1}</span>
              <div>
                <h3 className="text-base sm:mt-8 sm:text-xl">{step.title}</h3>
                <p className="text-mute mt-1 text-[0.8125rem] leading-relaxed sm:mt-2 sm:text-sm">
                  <Rich max={1}>{step.text}</Rich>
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>

    <CtaBanner label="Ready when you are" title="Tell us what" script="you are making" text="The first conversation costs nothing." button="Get started" to="/contact" />
  </Sheet>
);

export default Services;
