"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { PRESS, SPRING } from "./motion";
import { FillLabel, fillButtonClass, type Tone } from "./ui";

const MotionLink = motion.create(Link);

const arrowVariants = { rest: { x: 0 }, hover: { x: 5 } };

function Label({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3">
      {children}
      <motion.span aria-hidden variants={arrowVariants} transition={SPRING}>
        →
      </motion.span>
    </span>
  );
}

// Primary action. The fill wipes in on hover (CSS), the arrow drifts on the
// brand spring and a press gives a quick 97% squeeze.
export function ButtonLink({
  href,
  tone = "light",
  className = "",
  children,
}: {
  href: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <MotionLink
      href={href}
      className={`${fillButtonClass(tone)} ${className}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      transition={PRESS}
    >
      <FillLabel tone={tone}>
        <Label>{children}</Label>
      </FillLabel>
    </MotionLink>
  );
}

export function SubmitButton({ children }: { children: ReactNode }) {
  return (
    <motion.button
      type="submit"
      className={fillButtonClass("light")}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      transition={PRESS}
    >
      <FillLabel>
        <Label>{children}</Label>
      </FillLabel>
    </motion.button>
  );
}
