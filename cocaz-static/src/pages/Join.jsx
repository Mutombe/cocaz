import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ScanLine } from "lucide-react";
import { contact, creatorTypes, disciplines, img } from "../data/site";
import { Label, Reveal, Script, Section, SectionHead, Sheet } from "../components/ui";

const Join = () => {
  const [form, setForm] = useState({ name: "", email: "", profession: "" });
  const [agreed, setAgreed] = useState(false);
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No server behind the site: the application is handed to the visitor's own mail app.
  const submit = (e) => {
    e.preventDefault();
    const body = `I would like to join COCAZ.\n\nName: ${form.name}\nEmail: ${form.email}\nProfession: ${form.profession}\n\nI agree to the COCAZ Terms and Conditions.`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Membership application: ${form.name}`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Sheet>
      <section>
        <div className="container-x">
          <div className="pt-nav inset-x-page grid gap-2.5 pb-2 sm:gap-3 lg:grid-cols-[1fr_1.05fr] lg:gap-4">
            <Reveal className="panel flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-14">
              <Label>Membership</Label>
              <h1 className="mt-4 text-[clamp(2.1rem,5.2cqw,4.4rem)] leading-[0.98] sm:mt-5">
                Become a <Script className="block pt-1 text-[1.12em]">member</Script>
              </h1>
              <p className="text-mute mt-5 max-w-lg text-[15px] leading-relaxed">Membership is open to creatives of every discipline and every age.</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {disciplines.map((d) => (
                  <li key={d} className="rounded-full border border-[var(--hair)] bg-white/50 px-3 py-1.5 text-[11px] font-semibold text-ink-soft">
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal i={1} className="grid gap-2.5 sm:grid-cols-[1fr_220px] sm:gap-3 lg:gap-4">
              <form onSubmit={submit} className="tile p-5 sm:p-8">
                <h2 className="text-2xl">Apply online</h2>
                <div className="mt-5 grid gap-4">
                  <label className="grid gap-2 text-xs font-semibold">
                    Name
                    <input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Enter your full name" className="field" />
                  </label>
                  <label className="grid gap-2 text-xs font-semibold">
                    Email
                    <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" placeholder="Enter your email" className="field" />
                  </label>
                  <label className="grid gap-2 text-xs font-semibold">
                    Profession
                    <input name="profession" value={form.profession} onChange={update} required placeholder="Your area of expertise" className="field" />
                  </label>
                  <label className="flex items-start gap-3 text-xs font-medium text-ink-soft">
                    <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="mt-0.5 h-4 w-4 accent-ink" />
                    <span>
                      I agree to the{" "}
                      <Link to="/terms" className="font-semibold text-ink underline underline-offset-4">
                        Terms and Conditions
                      </Link>
                    </span>
                  </label>
                </div>
                <button type="submit" disabled={!agreed} className="btn-ink mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40">
                  <CheckCircle2 size={14} strokeWidth={2.5} aria-hidden="true" />
                  Sign up
                </button>
                <p className="mt-3 text-center text-[11px] text-ink-mute">Opens your email app with the form ready.</p>
              </form>

              {/* QR beside its caption on a phone, stacked beside the form on larger screens */}
              <div className="rounded-tile grid grid-cols-[112px_1fr] items-center gap-4 bg-ink p-4 text-white sm:flex sm:flex-col sm:justify-center sm:p-6 sm:text-center" style={{ backgroundImage: "var(--pat-grid)", backgroundSize: "34px 34px" }}>
                <img src={img("membership-qr.jpg")} alt="QR code linking to the COCAZ membership form" loading="lazy" width="700" height="700" className="h-auto w-full rounded-2xl sm:order-2 sm:mt-5 sm:max-w-[180px]" />
                <div className="sm:contents">
                  <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold sm:order-1 sm:justify-center">
                    <ScanLine size={14} aria-hidden="true" />
                    Quick join
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/70 sm:order-3 sm:mt-5 sm:text-xs">Scan the code to open the membership form.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead label="Creator categories" title="A diverse community making waves in Zimbabwe" text="Whatever you make, there are members here who make it too." />
        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 md:grid-cols-3 lg:gap-4">
          {creatorTypes.map((c, i) => (
            <Reveal key={c.title} i={i} className={i === 0 ? "col-span-2 md:col-span-1" : ""}>
              <article className={`rounded-tile group relative overflow-hidden bg-ink text-white md:aspect-[4/5] ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                <img src={img(c.image)} alt={c.alt} loading="lazy" style={{ objectPosition: c.position }} className="h-full w-full object-cover transition-transform duration-700 ease-brand group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <h3 className="text-lg font-bold uppercase leading-none sm:text-2xl">{c.title}</h3>
                  <p className="mt-2 hidden text-sm leading-relaxed text-white/75 sm:block">{c.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </Sheet>
  );
};

export default Join;
