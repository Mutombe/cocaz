/* Scroll reveals without a library. One shared observer marks elements as they
   enter; a scroll sweep catches anything a fast flick carried past the viewport
   between two observer callbacks, so nothing can stay hidden for good. */
const pending = new Set();

const show = (el) => {
  el.classList.add("is-in");
  pending.delete(el);
  observer?.unobserve(el);
};

const observer =
  typeof IntersectionObserver === "undefined"
    ? null
    : new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && show(e.target)), {
        rootMargin: "0px 0px -8% 0px",
      });

let ticking = false;
const sweep = () => {
  ticking = false;
  const limit = window.innerHeight;
  pending.forEach((el) => el.getBoundingClientRect().top < limit && show(el));
};

if (typeof window !== "undefined") {
  window.addEventListener(
    "scroll",
    () => {
      if (ticking || !pending.size) return;
      ticking = true;
      requestAnimationFrame(sweep);
    },
    { passive: true },
  );
}

export const watch = (el) => {
  if (!observer) return show(el);
  pending.add(el);
  observer.observe(el);
  return () => {
    pending.delete(el);
    observer.unobserve(el);
  };
};
