import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { crossLinks } from "../data/links";

/* Body copy is written as plain strings. This turns it into rich text:
     **bold** and *italic* markup become <strong> and <em>, and known phrases
     become inline links. Each phrase links once per paragraph, links to the
     page you are already on are skipped, and `max` stops a paragraph turning
     into a wall of links. */

const keywords = [...crossLinks].sort((a, b) => b.match.length - a.match.length);
const BOUNDARY = /[\s,.:;!?()"“”'’/-]/;

export const InlineLink = ({ to, href, children }) =>
  href ? (
    <a href={href} className="ilink" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
      {href.startsWith("http") && <ArrowUpRight size="0.85em" className="ml-[0.1em] inline-block align-[-0.08em]" aria-hidden="true" weight="bold" />}
    </a>
  ) : (
    <Link to={to} className="ilink">
      {children}
    </Link>
  );

const linkify = (text, state, key) => {
  const found = [];
  const lower = text.toLowerCase();
  for (const k of keywords) {
    if (state.left - found.length <= 0) break;
    const target = k.to ?? k.href;
    if (state.used.has(target) || (k.to && k.to.split("#")[0] === state.path && !k.to.includes("#"))) continue;
    const needle = k.match.toLowerCase();
    let from = 0;
    while (from < lower.length) {
      const at = lower.indexOf(needle, from);
      if (at === -1) break;
      const end = at + needle.length;
      const before = at === 0 ? " " : lower[at - 1];
      const after = end >= lower.length ? " " : lower[end];
      if (BOUNDARY.test(before) && BOUNDARY.test(after) && !found.some((m) => at < m.end && end > m.start)) {
        found.push({ start: at, end, k });
        state.used.add(target);
        break;
      }
      from = at + 1;
    }
  }
  if (!found.length) return [text];
  state.left -= found.length;
  found.sort((a, b) => a.start - b.start);
  const out = [];
  let cursor = 0;
  found.forEach((m, i) => {
    if (m.start > cursor) out.push(text.slice(cursor, m.start));
    out.push(
      <InlineLink key={`${key}-${i}`} to={m.k.to} href={m.k.href}>
        {text.slice(m.start, m.end)}
      </InlineLink>,
    );
    cursor = m.end;
  });
  if (cursor < text.length) out.push(text.slice(cursor));
  return out;
};

export const Rich = ({ children, max = 2, links = true }) => {
  const { pathname } = useLocation();
  if (typeof children !== "string") return children;
  const state = { left: links ? max : 0, used: new Set(), path: pathname };
  return children.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{linkify(part.slice(2, -2), state, i)}</strong>;
    if (part.startsWith("*")) return <em key={i}>{linkify(part.slice(1, -1), state, i)}</em>;
    return linkify(part, state, i);
  });
};
