"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Area } from "../_content";
import { Reveal, SPRING } from "./motion";
import { display } from "./ui";

// Five areas read as one long editorial column, with a sticky index that
// follows along and jumps to any area.
export function AreasIndex({ areas }: { areas: Area[] }) {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      // A thin band across the middle of the viewport decides which area is current.
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const block of blocks.current) if (block) observer.observe(block);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
      <nav aria-label="Àrees de treball" className="hidden lg:col-span-4 lg:block">
        <ol className="sticky top-32 border-t border-olive/20">
          {areas.map((area, i) => (
            <li key={area.index} className="border-b border-olive/20">
              <a
                href={`#area-${area.index}`}
                aria-current={active === i ? "true" : undefined}
                className={`relative flex items-baseline gap-5 py-4 transition-opacity duration-300 ${
                  active === i ? "opacity-100" : "opacity-45 hover:opacity-75"
                }`}
              >
                <span className="text-[11px] tracking-[0.2em]">{area.index}</span>
                <span className="font-serif text-2xl font-light">{area.title}</span>
                {active === i && (
                  <motion.span layoutId="area-marker" transition={SPRING} className="absolute inset-x-0 -bottom-px h-px bg-olive" />
                )}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="lg:col-span-7 lg:col-start-6">
        {areas.map((area, i) => (
          <article
            key={area.index}
            id={`area-${area.index}`}
            data-index={i}
            ref={(element) => {
              blocks.current[i] = element;
            }}
            className="border-t border-olive/20 py-16 first:border-t-0 first:pt-0 md:py-24"
          >
            <Reveal>
              <p className="flex items-baseline gap-4 text-[11px] tracking-[0.2em] uppercase">
                <span>{area.index}</span>
                <span>{area.title}</span>
              </p>
              <h3 className={`${display} mt-6 pb-1 text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.06] italic`}>
                {area.headline}
              </h3>
            </Reveal>

            <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-8">
              <Reveal delay={0.05}>
                <div className="space-y-4">
                  {area.body.map((paragraph) => (
                    <p key={paragraph} className="text-[17px] leading-relaxed font-light">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {area.note && (
                  <div className="mt-10 border-l border-olive/30 pl-6">
                    <p className="font-serif text-xl font-light italic">{area.note.title}</p>
                    <p className="mt-2 text-[15px] leading-relaxed font-light">{area.note.text}</p>
                  </div>
                )}
              </Reveal>

              <Reveal delay={0.12} className={area.groups.length > 1 ? "grid grid-cols-2 gap-x-6 gap-y-10" : ""}>
                {area.groups.map((group) => (
                  <div key={group.label}>
                    <p className="text-[11px] tracking-[0.2em] uppercase">{group.label}</p>
                    <ul className="mt-4 text-[15px] leading-relaxed font-light">
                      {group.items.map((item) => (
                        <li key={item} className="py-0.5">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
