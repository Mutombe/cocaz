import { useState } from "react";
import { Mail, MapPin, MessageCircle, PhoneCall, Send } from "lucide-react";
import { contact } from "../data/site";
import { PageHero, Reveal, Section, Sheet } from "../components/ui";

const details = [
  { icon: PhoneCall, label: "Phone", value: contact.phone, href: contact.phoneHref, tint: "bg-sage" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: contact.whatsapp, gold: true },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}`, wide: true, tint: "bg-lilac" },
  { icon: MapPin, label: "Address", value: contact.addressLines, wide: true, tint: "bg-peach" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", topic: "Joining as a creator", message: "" });
  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // The site has no server, so the message is handed to the visitor's own mail app.
  const submit = (e) => {
    e.preventDefault();
    const subject = `${form.topic}: ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Sheet>
      <PageHero kicker="Contact" title="Get in" script="touch" lead="Questions, ideas or a campaign in mind? Send us a message and we will reply as soon as we can." />

      <Section className="!pt-4">
        <div className="grid gap-2.5 sm:gap-3 lg:grid-cols-[1.1fr_.9fr] lg:gap-4">
          <Reveal>
            <form onSubmit={submit} className="tile h-full p-5 sm:p-9">
              <h2 className="text-2xl">Send us a message</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="grid gap-2 text-xs font-semibold">
                  Name
                  <input name="name" value={form.name} onChange={update} required autoComplete="name" placeholder="Enter your name" className="field" />
                </label>
                <label className="grid gap-2 text-xs font-semibold">
                  Email
                  <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" placeholder="Enter your email" className="field" />
                </label>
                <label className="grid gap-2 text-xs font-semibold sm:col-span-2">
                  What is it about?
                  <select name="topic" value={form.topic} onChange={update} className="field">
                    <option>Joining as a creator</option>
                    <option>A brand partnership</option>
                    <option>Media production</option>
                    <option>Event management</option>
                    <option>Talent management</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="grid gap-2 text-xs font-semibold sm:col-span-2">
                  Message
                  <textarea name="message" value={form.message} onChange={update} required rows={5} placeholder="Your message here" className="field resize-y" />
                </label>
              </div>
              <button type="submit" className="btn-ink mt-6 w-full sm:w-auto">
                <Send size={14} strokeWidth={2.5} aria-hidden="true" />
                Send message
              </button>
              <p className="mt-3 text-xs text-ink-mute">Opens your email app with the message ready.</p>
            </form>
          </Reveal>

          {/* detail tiles stay two up on a phone */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:gap-4">
            {details.map((d, i) => {
              const Cmp = d.href ? "a" : "div";
              return (
                <Reveal key={d.label} i={i % 2} className={d.wide ? "col-span-2 sm:col-span-1" : ""}>
                  <Cmp
                    {...(d.href ? { href: d.href, target: d.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                    className={`rounded-tile flex h-full flex-col p-4 sm:min-h-[150px] sm:p-6 ${d.wide ? "min-h-0" : "min-h-[132px]"} ${d.gold ? "bg-gold" : d.tint} ${d.href ? "lift" : ""}`}
                    style={d.gold ? { backgroundImage: "var(--pat-hatch)" } : undefined}
                  >
                    <span className={`grid h-10 w-10 place-items-center rounded-full ${d.gold ? "bg-ink text-white" : "bg-white"}`}>
                      <d.icon size={17} strokeWidth={2.25} aria-hidden="true" />
                    </span>
                    <p className="mt-auto pt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-mute">{d.label}</p>
                    {[].concat(d.value).map((line, n) => (
                      <p key={line} className={`text-[13px] font-semibold leading-snug [overflow-wrap:anywhere] sm:text-sm ${n ? "" : "mt-1"}`}>
                        {line}
                      </p>
                    ))}
                  </Cmp>
                </Reveal>
              );
            })}

            {/* The address panel sits behind the map, so a failed embed still leaves something useful */}
            <div className="rounded-tile relative col-span-2 h-[240px] overflow-hidden bg-stone sm:h-[280px]">
              <div className="absolute inset-0 grid place-items-center p-6 text-center">
                <div>
                  <MapPin size={20} className="mx-auto" aria-hidden="true" />
                  <p className="mt-2 text-sm font-semibold">
                    {contact.addressLines[0]}
                    <br />
                    {contact.addressLines[1]}
                  </p>
                </div>
              </div>
              <iframe title="Map of Waterfalls, Harare" src={contact.mapEmbed} referrerPolicy="no-referrer-when-downgrade" className="relative block h-full w-full border-0" />
              <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="chip glass-light absolute left-3 top-3">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Sheet>
  );
};

export default Contact;
