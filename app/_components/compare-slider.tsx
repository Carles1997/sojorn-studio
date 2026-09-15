"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "motion/react";
import type { Photo } from "../_content";

const photoClass = "object-cover mix-blend-multiply contrast-[.95] saturate-[.8] sepia-[.14]";

// Before/after comparison. The "after" photo is clipped from the left and the
// divider follows the value directly, so the drag stays glued to the hand.
// A native range input underneath handles mouse, touch and keyboard.
export function CompareSlider({ before, after }: { before: Photo; after: Photo }) {
  const position = useMotionValue(50);
  const clipPath = useTransform(position, (value) => `inset(0 0 0 ${value}%)`);
  const left = useTransform(position, (value) => `${value}%`);

  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden bg-paper select-none md:aspect-[16/9]">
        <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1600px) 1440px, 90vw" className={photoClass} />
        <motion.div style={{ clipPath }} className="absolute inset-0 bg-paper">
          <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1600px) 1440px, 90vw" className={photoClass} />
        </motion.div>

        <motion.div aria-hidden style={{ left }} className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-paper">
          <span className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-paper bg-forest/50 font-serif text-xl text-paper backdrop-blur-[2px]">
            ↔
          </span>
        </motion.div>

        <input
          type="range"
          min={0}
          max={100}
          step={0.5}
          defaultValue={50}
          aria-label="Compara l’abans i el després"
          onInput={(event) => position.set(Number(event.currentTarget.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-5 flex justify-between text-[11px] tracking-[0.2em] uppercase">
        <span>Abans</span>
        <span>Després</span>
      </figcaption>
    </figure>
  );
}
