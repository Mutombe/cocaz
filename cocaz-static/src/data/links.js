// Phrases that become links wherever they appear in body copy.
// `to` is a page on this site; `href` leaves the site. Longer phrases win over shorter ones.
export const crossLinks = [
  { match: "Film-Makers Boot Camp", to: "/events" },
  { match: "boot camps", to: "/events" },
  { match: "boot camp", to: "/events" },
  { match: "premieres", to: "/events" },
  { match: "seminars", to: "/events" },

  { match: "media production", to: "/services/media-production" },
  { match: "video production", to: "/services/media-production" },
  { match: "music videos", to: "/services/media-production" },
  { match: "Mandi", to: "/services/media-production" },
  { match: "talent management", to: "/services/talent-management" },
  { match: "representation", to: "/services/talent-management" },
  { match: "Master H", to: "/services/talent-management" },
  { match: "Jah Signal", to: "/services/talent-management" },
  { match: "event management", to: "/services/event-management" },
  { match: "MC services", to: "/services/event-management" },

  { match: "brand partnerships", to: "/services#partners" },
  { match: "brand partnership", to: "/services#partners" },
  { match: "brand deals", to: "/services#partners" },
  { match: "sponsorships", to: "/services#partners" },
  { match: "campaigns", to: "/services#partners" },
  { match: "CoolSplash", to: "/services#partners" },
  { match: "Sunsoya", to: "/services#partners" },

  { match: "workshops", to: "/services" },
  { match: "masterclasses", to: "/services" },
  { match: "mentorship", to: "/services" },
  { match: "monetisation", to: "/services" },

  { match: "leadership team", to: "/about#leadership" },
  { match: "the association", to: "/about" },
  { match: "membership", to: "/join" },
  { match: "Terms and Conditions", to: "/terms" },
  { match: "behind the scenes", to: "/gallery" },
  { match: "secretariat", to: "/contact" },
  { match: "get in touch", to: "/contact" },
  { match: "Send us a message", to: "/contact" },

  { match: "cocazofficial@gmail.com", href: "mailto:cocazofficial@gmail.com" },
  { match: "Lorraine Guyo", href: "https://www.facebook.com/lorraineguyoproductions" },
  { match: "Boss Matsanga", href: "https://www.facebook.com/profile.php?id=100064838858644" },
];
