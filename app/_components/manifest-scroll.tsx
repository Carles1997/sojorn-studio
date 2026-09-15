"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

function Word({ word, progress, start, end }: { word: string; progress: MotionValue<number>; start: number; end: number }) {
  const opacity = useTransform(progress, [start, end], [0.24, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{word}</motion.span>{" "}
    </>
  );
}

// The manifesto lights up word by word as it is read. Opacity only, so it
// stays comfortable for visitors who prefer reduced motion.
export function ManifestScroll({ paragraphs }: { paragraphs: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.5"] });

  const words = paragraphs.map((paragraph) => paragraph.split(" "));
  const total = words.reduce((sum, list) => sum + list.length, 0);
  const offsets = words.map((_, index) => words.slice(0, index).reduce((sum, list) => sum + list.length, 0));

  return (
    <div ref={ref} className="relative space-y-10">
      {words.map((list, paragraphIndex) => (
        <p
          key={paragraphs[paragraphIndex]}
          className="font-serif text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.25] font-extralight"
        >
          {list.map((word, wordIndex) => {
            const position = offsets[paragraphIndex] + wordIndex;
            return (
              <Word
                key={`${word}-${wordIndex}`}
                word={word}
                progress={scrollYProgress}
                start={position / total}
                end={(position + 1) / total}
              />
            );
          })}
        </p>
      ))}
    </div>
  );
}
