/* The reference frame is 633 units wide; u(n) converts those units to container-relative
   lengths so the hero and nav keep their exact proportions at any width. */
export const u = (n) => `${((n * 100) / 633).toFixed(3)}cqw`;
