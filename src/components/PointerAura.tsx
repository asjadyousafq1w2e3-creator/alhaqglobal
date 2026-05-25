"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, input, textarea, select, summary, [role='button'], [data-cursor='focus']";

export function PointerAura() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.25 });
  const ringY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.25 });
  const dotX = useSpring(x, { stiffness: 760, damping: 42, mass: 0.16 });
  const dotY = useSpring(y, { stiffness: 760, damping: 42, mass: 0.16 });

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateAvailability = () => {
      setEnabled(pointerQuery.matches && !reducedMotionQuery.matches);
    };

    updateAvailability();
    pointerQuery.addEventListener("change", updateAvailability);
    reducedMotionQuery.addEventListener("change", updateAvailability);

    return () => {
      pointerQuery.removeEventListener("change", updateAvailability);
      reducedMotionQuery.removeEventListener("change", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      setInteractive(false);
      return;
    }

    const root = document.documentElement;

    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const nextInteractive =
        event.target instanceof Element && Boolean(event.target.closest(INTERACTIVE_SELECTOR));

      setInteractive((current) => (current === nextInteractive ? current : nextInteractive));
    };

    const handlePointerLeave = () => setVisible(false);
    const handlePointerEnter = () => setVisible(true);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    root.addEventListener("pointerleave", handlePointerLeave);
    root.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerleave", handlePointerLeave);
      root.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, [enabled, x, y]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-10 w-10 rounded-full border border-primary/35 bg-primary/6 md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          scale: interactive ? 1.85 : 1,
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[71] hidden h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_26px_rgba(205,4,11,0.35)] md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
          scale: interactive ? 0.72 : 1,
        }}
      />
    </>
  );
}
