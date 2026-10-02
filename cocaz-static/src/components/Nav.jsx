import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { contact, nav } from "../data/site";
import { u } from "../lib/units";
import { FlagRule, Logo, Script, XIcon } from "./ui";

// Home is reached through the logo tab, as in the reference
const links = nav.filter((item) => item.to !== "/");
const ease = [0.22, 0.61, 0.36, 1];
const socialIcons = { Facebook, X: XIcon };

/* Two lines that cross into an X when the menu is open */
const Burger = ({ open, onClick, className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    aria-expanded={open}
    aria-controls="site-menu"
    aria-label={open ? "Close menu" : "Open menu"}
    className={`grid h-11 w-11 place-items-center rounded-full transition-colors duration-300 ease-brand lg:hidden ${className}`}
  >
    <span className="relative block h-[0.5625rem] w-[1.375rem]">
      <span className={`absolute left-0 top-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ease-brand ${open ? "translate-y-[0.2344rem] rotate-45" : ""}`} />
      <span className={`absolute bottom-0 left-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ease-brand ${open ? "-translate-y-[0.2344rem] -rotate-45" : ""}`} />
    </span>
  </button>
);

/* Full-page menu. Square edged and ruled like a call sheet, against the rounded tiles of the pages. */
const Menu = ({ onClose }) => (
  <motion.div
    id="site-menu"
    role="dialog"
    aria-modal="true"
    aria-label="Menu"
    initial={{ y: "-100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-100%" }}
    transition={{ duration: 0.55, ease }}
    className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-white lg:hidden"
    style={{ backgroundImage: "var(--pat-grid)", backgroundSize: "34px 34px" }}
  >
    <div className="flex items-start justify-between px-5">
      <Link to="/" onClick={onClose} aria-label="COCAZ home" className="grid h-16 w-[9.375rem] place-items-center rounded-b-[1.25rem] bg-gold">
        <Logo className="h-[58%]" />
      </Link>
      <div className="flex h-16 items-center">
        <Burger open onClick={onClose} className="bg-white text-ink" />
      </div>
    </div>

    <nav aria-label="Mobile" className="mt-[clamp(0.75rem,2.6svh,1.75rem)] border-t border-white/15">
      {nav.map((item, i) => (
        <motion.div key={item.to} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 + i * 0.055, ease }}>
          <NavLink
            to={item.to}
            end={item.to === "/"}
            onClick={onClose}
            className={({ isActive }) =>
              `group flex items-center gap-4 border-b border-white/15 px-5 py-[clamp(0.45rem,1.55svh,1rem)] transition-colors duration-300 ease-brand ${
                isActive ? "bg-gold text-ink" : "active:bg-white/10"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`num w-6 text-[0.6875rem] font-semibold ${isActive ? "text-ink/60" : "text-gold"}`}>0{i + 1}</span>
                <span className="flex-1 font-display text-[clamp(1.5rem,4.5svh,2.5rem)] font-bold uppercase leading-none tracking-[-0.035em]">{item.label}</span>
                <ArrowUpRight size={22} strokeWidth={1.75} className={isActive ? "" : "text-white/40"} aria-hidden="true" />
              </>
            )}
          </NavLink>
        </motion.div>
      ))}
    </nav>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-auto px-5 pb-5 pt-[clamp(0.9rem,2.4svh,1.5rem)]">
      <p className="text-[clamp(1.7rem,4.2svh,2.25rem)] text-gold">
        <Script>Let&rsquo;s create together</Script>
      </p>
      <Link to="/join" onClick={onClose} className="btn-gold mt-3.5 w-full">
        Join COCAZ
        <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" />
      </Link>
      <ul className="mt-4 grid gap-2 text-sm text-white/70">
        <li>
          <a href={contact.phoneHref} className="flex items-center gap-3">
            <Phone size={15} className="text-gold" aria-hidden="true" />
            {contact.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3">
            <Mail size={15} className="text-gold" aria-hidden="true" />
            {contact.email}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <MapPin size={15} className="shrink-0 text-gold" aria-hidden="true" />
          {contact.addressLines[1]}
        </li>
      </ul>
      <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3.5">
        <FlagRule className="w-14" />
        <span className="flex gap-2">
          {contact.socials.map((s) => {
            const Cmp = socialIcons[s.name];
            return (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`COCAZ on ${s.name}`} className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                <Cmp size={15} aria-hidden="true" />
              </a>
            );
          })}
        </span>
      </div>
    </motion.div>
  </motion.div>
);

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setFloating(window.scrollY > 260);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="container-x relative">
          {/* Logo tab hanging from the top edge */}
          <Link
            to="/"
            aria-label="COCAZ home"
            className="absolute top-0 grid place-items-center bg-gold"
            style={{
              left: u(28),
              width: `max(9.375rem, ${u(116)})`,
              height: `max(4rem, ${u(62)})`,
              borderRadius: `0 0 max(1.25rem, ${u(22)}) max(1.25rem, ${u(22)})`,
            }}
          >
            <Logo className="h-[58%]" />
          </Link>

          <nav
            aria-label="Primary"
            className="absolute hidden -translate-y-1/2 items-center lg:flex"
            style={{ left: u(302), top: u(24), gap: u(19), fontSize: `max(12px, ${u(7.6)})` }}
          >
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative font-medium after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-ink after:transition-transform after:duration-300 after:ease-brand hover:after:scale-x-100 ${
                    isActive ? "after:scale-x-100" : "after:scale-x-0"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="absolute top-0 flex h-16 items-center gap-2 lg:hidden" style={{ right: u(28) }}>
            <Link to="/join" className="rounded-full border border-ink px-4 py-2 text-xs font-semibold transition-colors duration-300 ease-brand hover:bg-ink hover:text-white">
              Join
            </Link>
            <Burger open={false} onClick={() => setOpen(true)} className="bg-ink text-white" />
          </div>
          <Link
            to="/join"
            className="absolute hidden -translate-y-1/2 rounded-full border border-ink font-semibold transition-colors duration-300 ease-brand hover:bg-ink hover:text-white lg:block"
            style={{ right: u(28), top: u(24), fontSize: `max(12px, ${u(7.6)})`, padding: `${u(4)} ${u(10)}` }}
          >
            Join COCAZ
          </Link>
        </div>
      </header>

      {/* Compact bar that follows the reader down the page */}
      <AnimatePresence>
        {floating && !open && (
          <motion.div
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -90, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="fixed inset-x-0 top-3 z-40 px-3"
          >
            <div className="mx-auto flex h-14 max-w-[61.25rem] items-center justify-between rounded-full bg-white/90 pl-6 pr-1.5 shadow-float backdrop-blur-xl">
              <Link to="/" aria-label="COCAZ home">
                <Logo className="h-7" />
              </Link>
              <nav aria-label="Primary" className="hidden items-center gap-7 text-[0.8125rem] font-medium lg:flex">
                {links.map((item) => (
                  <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? "underline underline-offset-8" : "hover:underline hover:underline-offset-8")}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="flex items-center gap-1.5">
                <Link to="/join" className="btn-ink !px-5 !py-3">
                  Join COCAZ
                </Link>
                <Burger open={false} onClick={() => setOpen(true)} className="bg-stone text-ink" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>{open && <Menu onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
};

export default Nav;
