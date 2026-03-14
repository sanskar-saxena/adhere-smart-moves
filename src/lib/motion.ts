import type { Variants, Transition } from "framer-motion";

/** Standard spring easing used across all Adhere animations */
export const SPRING_EASE = [0.16, 1, 0.3, 1] as const;

/** Default stagger container — wraps children with sequential reveals */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/** Fade-up child variant — pair with staggerContainer */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: SPRING_EASE },
  },
};

/** Fade-up with custom delay index (for landing page sections) */
export const fadeUpCustom: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: SPRING_EASE },
  }),
};

/** Slide-in from right (onboarding step transitions) */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: SPRING_EASE } },
  exit: { opacity: 0, x: -24, transition: { duration: 0.25, ease: SPRING_EASE } },
};

/** Slide-in from left (recovery step items) */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.4, ease: SPRING_EASE },
  }),
};

/** Scale-in (checkmarks, badges) */
export const scaleIn: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.25, ease: SPRING_EASE } },
};

/** Shared viewport trigger config */
export const viewportOnce = { once: true } as const;

/** Standard spring transition */
export const springTransition: Transition = {
  duration: 0.5,
  ease: SPRING_EASE,
};
