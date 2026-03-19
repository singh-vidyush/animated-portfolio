// ============================================
// GSAP Configuration & Utilities
// ============================================

export const GSAP_EASE = {
  smooth: "power3.out",
  bounce: "back.out(1.7)",
  elastic: "elastic.out(1, 0.3)",
  snap: "power4.out",
};

export const ANIMATION_CONFIG = {
  hero: {
    duration: 0.8,
    stagger: 0.15,
    ease: GSAP_EASE.smooth,
  },
  section: {
    duration: 0.7,
    stagger: 0.12,
    ease: GSAP_EASE.smooth,
  },
  card: {
    duration: 0.5,
    ease: GSAP_EASE.snap,
  },
};

export const PARALLAX_CONFIG = {
  sensitivity: 20,
  rotationSensitivity: 5,
  duration: 0.8,
  ease: "power2.out",
};
