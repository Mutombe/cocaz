import { Link } from "react-router-dom";
import { ArrowUp, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { contact, FOUNDED, partners, tagline } from "../data/site";
import { Orb } from "./deco";
import { FlagRule, Logo, Script, XIcon } from "./ui";

const stats = [
  { value: "300+", label: "Creators" },
  { value: `${new Date().getFullYear() - FOUNDED} yrs`, label: `Since ${FOUNDED}` },
  { value: partners.length, label: "Brand partners" },
];

const columns = [
  {
    title: "Quick links",
    links: [
      { label: "About us", to: "/about" },
      { label: "Our services", to: "/services" },
      { label: "Events", to: "/events" },
      { label: "Gallery", to: "/gallery" },
      { label: "Join us", to: "/join" },
    ],
  },
  {
    title: "Our services",
    links: [
      { label: "Media Production", to: "/services/media-production" },
      { label: "Event Management", to: "/services/event-management" },
      { label: "Talent Management", to: "/services/talent-management" },
      { label: "Brand Partnerships", to: "/services#partners" },
    ],
  },
];

const socialIcons = { Facebook, X: XIcon };

const Footer = () => (
  <footer className="ground-dark relative mb-[var(--band-gap)] mt-[var(--band-gap)] overflow-hidden">
    <Orb tone="flame" drift className="-right-8 -top-10 w-28 sm:w-40" />
    <Orb tone="leaf" className="right-36 top-8 hidden w-9 sm:block" />
    <Orb tone="gold" className="right-24 top-24 hidden w-6 sm:block" />
    <div className="container-x">
      <div className="inset-x-page relative py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <Link to="/" aria-label="COCAZ home" className="inline-block">
              <Logo white className="h-14 sm:h-16" />
            </Link>
            <p className="mt-6 text-[clamp(2.4rem,6cqw,4.2rem)] leading-none text-gold">
              <Script>Let&rsquo;s create together</Script>
            </p>
            <p className="text-mute mt-4 max-w-sm text-sm leading-relaxed">{tagline}</p>
          </div>
          {/* stat tiles stay side by side on every screen */}
          <dl className="grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((s) => (
              <div key={s.label} className="tile px-3 py-4 sm:px-5 sm:py-6">
                <dt className="num text-2xl font-bold text-gold sm:text-4xl">{s.value}</dt>
                <dd className="text-mute mt-1 font-ref text-[0.625rem] font-bold uppercase tracking-[0.08em] sm:text-[0.6875rem]">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-[var(--hair)] pt-10 lg:grid-cols-[1fr_1fr_1.5fr_auto]">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-mute font-ref text-[0.625rem] font-bold uppercase tracking-[0.12em]">{col.title}</h3>
              <ul className="mt-4 grid gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/75 transition-colors duration-300 hover:text-gold">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-mute font-ref text-[0.625rem] font-bold uppercase tracking-[0.12em]">Contact us</h3>
            <ul className="mt-4 grid gap-3 text-sm text-white/75">
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <a href={contact.phoneHref} className="transition-colors duration-300 hover:text-gold">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="transition-colors duration-300 [overflow-wrap:anywhere] hover:text-gold">
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                {contact.address}
              </li>
            </ul>
          </div>

          <div className="col-span-2 flex gap-2.5 lg:col-span-1 lg:flex-col">
            {contact.socials.map((s) => {
              const Cmp = socialIcons[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`COCAZ on ${s.name}`}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-gold hover:text-ink"
                >
                  <Cmp size={16} aria-hidden="true" />
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-gold text-ink transition-colors duration-300 hover:bg-white lg:ml-0"
            >
              <ArrowUp size={16} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="text-mute mt-10 flex flex-col gap-4 border-t border-[var(--hair)] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <FlagRule className="w-12 shrink-0" />
            <p>
              © {new Date().getFullYear()} COCAZ. Engineered by <span className="font-semibold text-white/85">Bit Studio</span>
            </p>
          </div>
          <Link to="/terms" className="w-fit transition-colors duration-300 hover:text-gold">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
