// Shared animation primitives. Motion should be purposeful and restrained —
// whitespace and stillness matter as much as movement.

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// The editorial easing used by the navigation system (top-bar link hovers,
// the full-screen menu, and route-level page transitions) — a touch snappier
// than the general-purpose EASE above.
export const NAV_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const staggerChildren = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const revealMask = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, ease: EASE },
  },
};

// A thin rule that draws itself in left-to-right, like it's being underlined.
export const lineDraw = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1, ease: EASE },
  },
};

// Small fade/slide step for items inside a staggerChildren parent (list
// rows, tag chips, etc.) — pairs with staggerChildren() above.
export const staggerItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const pageTransitionVariants = {
  initial: { opacity: 0, y: 22 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: NAV_EASE },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.45, ease: NAV_EASE },
  },
};
