"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import type { Service } from "../_content";
import { ButtonLink } from "./button-link";
import { EASE_OUT, SPRING } from "./motion";

// Tier names as a huge typographic index; the detail panel swaps with a quick
// exit and a slower entrance. Works as a vertical tablist from the keyboard.
export function TierSelector({ tiers }: { tiers: Service[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tier = tiers[active];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const delta =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? -1
          : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (active + delta + tiers.length) % tiers.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
      <div
        role="tablist"
        aria-orientation="vertical"
        aria-label="Nivells de servei"
        onKeyDown={onKeyDown}
        className="border-b border-paper/15 lg:col-span-6"
      >
        {tiers.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.value}
              ref={(element) => {
                tabRefs.current[i] = element;
              }}
              id={`${baseId}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className="group relative grid w-full grid-cols-[2.5rem_minmax(0,1fr)] items-baseline border-t border-paper/15 py-6 text-left focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-paper md:grid-cols-[4.5rem_minmax(0,1fr)] md:py-8"
            >
              <span className={`text-[11px] tracking-[0.2em] transition-opacity duration-300 ${selected ? "opacity-100" : "opacity-50"}`}>
                {item.index}
              </span>
              <span
                className={`font-serif text-[clamp(2.25rem,5.6vw,5.25rem)] leading-none font-extralight tracking-[0.04em] uppercase transition-opacity duration-500 ease-editorial ${
                  selected ? "opacity-100" : "opacity-35 group-hover:opacity-70"
                }`}
              >
                {item.name}
              </span>
              {selected && (
                <motion.span layoutId={`${baseId}-marker`} transition={SPRING} className="absolute bottom-0 left-0 h-px w-full bg-paper" />
              )}
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-5 lg:col-start-8">
        <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${active}`} className="lg:sticky lg:top-32">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tier.value}
              initial={{ opacity: 0, transform: "translateY(12px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)", transition: { duration: 0.5, ease: EASE_OUT } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <p className="font-serif text-3xl leading-snug font-light italic md:text-4xl">{tier.kicker}</p>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed font-light text-paper/85">{tier.description}</p>
              <p className="mt-10 border-t border-paper/15 pt-6 text-[11px] tracking-[0.2em] text-paper/70 uppercase">
                {tier.includesLabel}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-[15px] leading-snug font-light">
                {tier.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ButtonLink href={`/diagnostic?nivell=${tier.value}`} tone="dark" className="mt-12">
                {`Consultar ${tier.name}`}
              </ButtonLink>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
