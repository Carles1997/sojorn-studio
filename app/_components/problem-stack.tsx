"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef, type CSSProperties } from "react";

type Problem = { asset: string; gap: string };

const cardTones = ["bg-forest", "bg-moss"];

function ProblemCard({
  problem,
  index,
  total,
  progress,
}: {
  problem: Problem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();
  // Each card settles a little smaller as the ones after it slide over,
  // so the stack reads as physical depth rather than a list.
  const targetScale = 1 - (total - index - 1) * 0.035;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <li
      style={{ "--i": index } as CSSProperties}
      className="sticky top-[calc(5.5rem_+_var(--i)_*_0.75rem)] lg:top-[calc(8rem_+_var(--i)_*_1.5rem)]"
    >
      <motion.article
        style={{ scale: reduce ? 1 : scale }}
        className={`flex min-h-[19rem] origin-top flex-col justify-between gap-12 p-8 text-paper md:min-h-[24rem] md:p-12 ${cardTones[index % cardTones.length]}`}
      >
        <span className="border-b border-paper/15 pb-6 font-serif text-5xl font-extralight md:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p className="font-serif text-3xl leading-tight font-light text-balance md:text-[2.75rem]">{problem.asset}</p>
          <p className="mt-4 text-[17px] leading-relaxed font-light text-paper/80">{problem.gap}</p>
        </div>
      </motion.article>
    </li>
  );
}

// Dark cards that pin and stack as you scroll past them.
export function ProblemStack({ problems }: { problems: Problem[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <ol ref={ref} className="relative flex flex-col gap-[12vh] pb-[4vh]">
      {problems.map((problem, index) => (
        <ProblemCard
          key={problem.asset}
          problem={problem}
          index={index}
          total={problems.length}
          progress={scrollYProgress}
        />
      ))}
    </ol>
  );
}
