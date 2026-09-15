"use client";

import { useEffect } from "react";

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 6;

// Fades [data-reveal] elements up as they scroll into view. Elements that
// arrive in the same observer batch (a row of cards, several list items) are
// staggered in reading order, so grids cascade and long lists don't lag.
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // Whatever is already on screen stays put: reveals are for content that
    // arrives by scrolling, and hiding visible text after load would flash.
    const viewportHeight = window.innerHeight;
    for (const element of targets) {
      const { top, bottom } = element.getBoundingClientRect();
      if (top < viewportHeight && bottom > 0) element.dataset.revealed = "";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const arriving = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) => {
            const ra = a.getBoundingClientRect();
            const rb = b.getBoundingClientRect();
            return ra.top - rb.top || ra.left - rb.left;
          });

        arriving.forEach((element, i) => {
          element.style.transitionDelay = `${Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS}ms`;
          element.dataset.revealed = "";
          observer.unobserve(element);
          element.addEventListener(
            "transitionend",
            () => {
              element.style.transitionDelay = "";
            },
            { once: true },
          );
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const element of targets) {
      if (!("revealed" in element.dataset)) observer.observe(element);
    }
    root.classList.add("reveal-armed");

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-armed");
    };
  }, []);

  return null;
}
