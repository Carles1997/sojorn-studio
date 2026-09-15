"use client";

import Image from "next/image";
import { motion, useSpring } from "motion/react";
import { useRef, useState, type PointerEvent } from "react";
import type { Photo } from "../_content";
import { SPRING, SPRING_CONFIG } from "./motion";

type Item = { line: string; image: Photo };

// Large phrases; hovering one dims the rest and a photograph follows the
// cursor on the brand spring, crossfading between phrases. Touch devices get
// a small inline photo per phrase instead.
export function PotentialHover({ items }: { items: Item[] }) {
  const [active, setActive] = useState<number | null>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const x = useSpring(0, SPRING_CONFIG);
  const y = useSpring(0, SPRING_CONFIG);

  function follow(event: PointerEvent<HTMLDivElement>, jump = false) {
    if (event.pointerType !== "mouse" || !areaRef.current) return;
    const rect = areaRef.current.getBoundingClientRect();
    const nextX = event.clientX - rect.left;
    const nextY = event.clientY - rect.top;
    // Entering the area places the photo under the cursor instead of flying in from a corner.
    if (jump) {
      x.jump(nextX);
      y.jump(nextY);
    } else {
      x.set(nextX);
      y.set(nextY);
    }
  }

  return (
    <div
      ref={areaRef}
      className="relative"
      onPointerEnter={(event) => follow(event, true)}
      onPointerMove={(event) => follow(event)}
      onPointerLeave={() => setActive(null)}
    >
      <ul>
        {items.map((item, i) => (
          <li
            key={item.line}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setActive(i);
            }}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-olive/25 py-6 last:border-b md:py-8"
          >
            <p
              className={`font-serif text-[clamp(1.75rem,4.4vw,4.25rem)] leading-[1.08] font-extralight transition-[opacity,translate] duration-500 ease-editorial motion-reduce:translate-x-0 ${
                active !== null && active !== i ? "opacity-35" : "opacity-100"
              } ${active === i ? "translate-x-4" : ""}`}
            >
              {item.line}
            </p>
            <div className="relative aspect-[4/5] w-16 overflow-hidden bg-paper sm:w-20 [@media(hover:hover)_and_(pointer:fine)]:hidden">
              <Image
                src={item.image.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover mix-blend-multiply saturate-[.8] sepia-[.14]"
              />
            </div>
          </li>
        ))}
      </ul>

      <motion.div
        aria-hidden
        style={{ x, y }}
        animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.9 : 1 }}
        transition={SPRING}
        className="pointer-events-none absolute top-0 left-0 z-10 hidden [@media(hover:hover)_and_(pointer:fine)]:block"
      >
        <div className="relative aspect-[3/4] w-[clamp(12rem,19vw,18rem)] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-paper">
          {items.map((item, i) => (
            <Image
              key={item.line}
              src={item.image.src}
              alt=""
              fill
              sizes="20vw"
              className={`object-cover mix-blend-multiply saturate-[.8] sepia-[.14] transition-opacity duration-500 ease-editorial ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
