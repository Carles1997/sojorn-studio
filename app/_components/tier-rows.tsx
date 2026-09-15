"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Service } from "../_content";
import { SPRING, Stagger, StaggerItem } from "./motion";

const MotionLink = motion.create(Link);

// Home teaser for the four tiers: each row drifts on hover and leads to the
// full selector on /serveis.
export function TierRows({ tiers }: { tiers: Service[] }) {
  return (
    <Stagger as="ul" className="border-b border-olive/20">
      {tiers.map((tier) => (
        <StaggerItem as="li" key={tier.value} className="border-t border-olive/20">
          <MotionLink
            href="/serveis#nivells"
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 py-8 md:grid-cols-[5rem_minmax(0,1.3fr)_minmax(0,1fr)_auto] md:gap-x-8 md:py-10"
          >
            <span className="text-[11px] tracking-[0.2em]">{tier.index}</span>
            <motion.span
              variants={{ rest: { x: 0 }, hover: { x: 16 } }}
              transition={SPRING}
              className="font-serif text-[clamp(1.75rem,7.5vw,5rem)] leading-none font-extralight tracking-[0.04em] uppercase"
            >
              {tier.name}
            </motion.span>
            <span className="hidden font-serif text-xl font-light italic md:block">{tier.kicker}</span>
            <motion.span
              aria-hidden
              variants={{ rest: { x: 0, opacity: 0.4 }, hover: { x: 6, opacity: 1 } }}
              transition={SPRING}
              className="font-serif text-3xl font-extralight"
            >
              →
            </motion.span>
          </MotionLink>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
