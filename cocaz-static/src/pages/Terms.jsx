import { Mail, Printer } from "lucide-react";
import { contact, terms } from "../data/site";
import { PageHero, Reveal, Section, Sheet } from "../components/ui";
import { Rich } from "../lib/rich";

const Terms = () => (
  <Sheet>
    <PageHero kicker="Legal" title="Terms and" script="Conditions" lead="Please read our terms carefully before joining COCAZ.">
      <a href={`mailto:${contact.email}`} className="btn-ink print:hidden">
        <Mail size={14} strokeWidth={2.5} aria-hidden="true" />
        Contact us
      </a>
      <button type="button" onClick={() => window.print()} className="btn-ghost print:hidden">
        <Printer size={14} strokeWidth={2.5} aria-hidden="true" />
        Print or save as PDF
      </button>
    </PageHero>

    <Section className="!pt-4">
      <ol className="mx-auto grid max-w-4xl gap-2.5 sm:gap-3">
        {terms.map((t, i) => (
          <Reveal as="li" key={t.title} i={i % 3} className="tile grid gap-2 p-5 sm:grid-cols-[64px_1fr] sm:gap-3 sm:p-8">
            <span className="num text-2xl font-bold text-ink/20 sm:text-3xl">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="text-lg font-semibold sm:text-xl">{t.title}</h2>
              <p data-prose="" className="mt-2 text-sm leading-relaxed text-ink-soft">
                <Rich max={1}>{t.text}</Rich>
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  </Sheet>
);

export default Terms;
