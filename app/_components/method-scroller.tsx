"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { MethodStep } from "../_content";

const tones = [
  { panel: "bg-paper text-olive", muted: "" },
  { panel: "bg-sand text-olive", muted: "" },
  { panel: "bg-forest text-paper", muted: "text-paper/85" },
];

function Panel({ step, index }: { step: MethodStep; index: number }) {
  const tone = tones[index % tones.length];
  return (
    <article
      className={`grid h-full content-between gap-y-12 px-6 py-14 md:px-[5vw] lg:grid-cols-12 lg:gap-x-8 lg:py-16 ${tone.panel}`}
    >
      <span
        aria-hidden
        className="font-serif text-[clamp(8rem,24vw,24rem)] leading-[0.78] font-extralight tracking-[-0.04em] lg:col-span-6 lg:self-end"
      >
        {step.index}
      </span>
      <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
        <h3 className="font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] leading-none font-light">{step.title}</h3>
        {step.formula && <p className="mt-6 font-serif text-xl leading-snug font-light italic">{step.formula}</p>}
        <p className={`mt-6 max-w-md text-[17px] leading-relaxed font-light ${tone.muted}`}>{step.text}</p>
      </div>
    </article>
  );
}

// Desktop: the six steps pan sideways while the section is pinned, with a
// terracotta hairline tracking progress. Smaller screens, and anyone who
// prefers reduced motion, get the same panels stacked vertically.
export function MethodScroller({ steps }: { steps: MethodStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `${(-100 * (steps.length - 1)) / steps.length}%`]);

  return (
    <>
      <div
        ref={ref}
        className="relative hidden lg:block motion-reduce:lg:hidden"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="sticky top-18 h-[calc(100dvh-4.5rem)] overflow-hidden">
          <motion.ol style={{ x, width: `${steps.length * 100}%` }} className="flex h-full">
            {steps.map((step, index) => (
              <li key={step.index} className="h-full" style={{ width: `${100 / steps.length}%` }}>
                <Panel step={step} index={index} />
              </li>
            ))}
          </motion.ol>
          <motion.div
            aria-hidden
            style={{ scaleX: scrollYProgress }}
            className="absolute inset-x-0 bottom-0 h-px origin-left bg-terracotta"
          />
        </div>
      </div>

      <ol className="lg:hidden motion-reduce:lg:block">
        {steps.map((step, index) => (
          <li key={step.index} className="min-h-[80svh] lg:min-h-[70vh] [&>article]:min-h-[inherit]">
            <Panel step={step} index={index} />
          </li>
        ))}
      </ol>
    </>
  );
}
