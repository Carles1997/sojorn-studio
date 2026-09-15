"use client";

import Image from "next/image";
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";

// Strong ease-out for things arriving on screen.
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
// The brand's physical feel for anything that follows the hand: hover drift,
// magnetic pull, cursor-following images, moving indicators.
export const SPRING_CONFIG = { stiffness: 100, damping: 20 };
export const SPRING = { type: "spring", ...SPRING_CONFIG } as const;
// Press feedback has to land within ~150ms, so taps get a much stiffer spring.
export const PRESS = { type: "spring", stiffness: 520, damping: 32 } as const;

type Tag = "div" | "section" | "p" | "h1" | "h2" | "h3" | "ul" | "ol" | "li" | "span";

// Hardware-accelerated transform strings rather than the x/y shorthands.
const hidden = { opacity: 0, transform: "translateY(16px)" };
const shown = { opacity: 1, transform: "translateY(0px)" };
const viewport = { once: true, margin: "0px 0px -10% 0px" } as const;

// "user" drops transform animations for visitors who prefer reduced motion,
// keeping the opacity fades.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
}: {
  as?: Tag;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      data-reveal
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={viewport}
      transition={{ duration: 0.9, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
}

const itemVariants: Variants = {
  hidden,
  shown: { ...shown, transition: { duration: 0.9, ease: EASE_OUT } },
};

export function Stagger({
  as = "div",
  stagger = 0.08,
  className,
  children,
}: {
  as?: Tag;
  stagger?: number;
  className?: string;
  children: ReactNode;
}) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={viewport}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ as = "div", className, children }: { as?: Tag; className?: string; children: ReactNode }) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component data-reveal className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}

// A photo that drifts against the scroll inside its frame. The frame clips it,
// the inner layer is oversized so the edges never show, and hover adds a slow
// 105% zoom on a separate element so the two transforms never fight.
// `className` must position the frame (relative + aspect, or absolute inset).
export function ParallaxImage({
  src,
  alt,
  sizes,
  className = "",
  treatment = "paper",
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  treatment?: "paper" | "dark";
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const filter =
    treatment === "paper"
      ? "mix-blend-multiply contrast-[.95] saturate-[.8] sepia-[.14]"
      : "brightness-[.5] saturate-[.65] sepia-[.25]";

  return (
    <div ref={ref} className={`group isolate overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-[-12%] ${treatment === "paper" ? "bg-paper" : "bg-forest"}`}
        style={{ y: reduce ? 0 : y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className={`object-cover ${filter} transition-[scale] duration-700 ease-editorial group-hover:scale-105 group-hover:duration-1000 motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        />
      </motion.div>
    </div>
  );
}

// Pulls its child a little towards the cursor, on the brand spring. Mouse only.
export function Magnetic({ children, strength = 0.22 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, SPRING_CONFIG);
  const y = useSpring(0, SPRING_CONFIG);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div ref={ref} className="inline-flex" style={{ x, y }} onPointerMove={onPointerMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
}

// A strike that draws across the text once it scrolls into view, line by line.
export function Strike({ children }: { children: ReactNode }) {
  return (
    <motion.span
      className="box-decoration-clone bg-no-repeat"
      style={{ backgroundImage: "linear-gradient(currentColor, currentColor)", backgroundPosition: "0 58%" }}
      initial={{ backgroundSize: "0% 1px" }}
      whileInView={{ backgroundSize: "100% 1px" }}
      viewport={viewport}
      transition={{ duration: 1.1, ease: EASE_OUT, delay: 0.35 }}
    >
      {children}
    </motion.span>
  );
}
