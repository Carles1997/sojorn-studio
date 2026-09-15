import Link from "next/link";
import { ViewTransition, type ComponentProps, type ReactNode } from "react";

export type Tone = "light" | "dark";

export const container = "mx-auto w-full max-w-[1600px] px-6 md:px-[5vw]";
export const display = "font-serif font-extralight tracking-[-0.02em] text-balance";
export const eyebrow = "text-[11px] tracking-[0.2em] uppercase";
export const body = "text-[17px] leading-relaxed font-light";

// First-paint entrance through @starting-style: no JavaScript, so page heroes
// never wait for hydration.
export const enter =
  "transition-[opacity,translate] duration-1000 ease-editorial starting:translate-y-4 starting:opacity-0 motion-reduce:starting:translate-y-0";

// Wrap each page's content so route changes animate (see globals.css). It lives
// in every page rather than the layout, because layouts persist and never exit.
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page" exit="page" default="none">
      {children}
    </ViewTransition>
  );
}

// Text link: a faint resting rule, a full rule that draws in from the left on
// hover, and an arrow that nudges forward.
export function TextLink({ children, className = "", ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={`group relative inline-flex items-center gap-3 pb-2 text-xs tracking-[0.2em] uppercase transition-transform duration-150 ease-out focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current active:scale-[0.98] motion-reduce:active:scale-100 ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-[translate] duration-500 ease-editorial group-hover:translate-x-1 motion-reduce:transition-none"
      >
        →
      </span>
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-current opacity-30" />
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-[scale] duration-300 ease-editorial group-hover:scale-x-100 group-hover:duration-700 group-focus-visible:scale-x-100 motion-reduce:transition-none"
      />
    </Link>
  );
}

const toneClasses: Record<Tone, { frame: string; fill: string }> = {
  light: { frame: "border-olive text-olive focus-visible:outline-olive", fill: "bg-olive text-paper" },
  dark: { frame: "border-paper text-paper focus-visible:outline-paper", fill: "bg-paper text-forest" },
};

export function fillButtonClass(tone: Tone = "light") {
  return `group relative inline-flex items-center justify-center overflow-hidden border px-6 py-4 text-xs tracking-[0.16em] whitespace-nowrap uppercase focus-visible:outline-1 focus-visible:outline-offset-4 sm:px-8 sm:tracking-[0.2em] ${toneClasses[tone].frame}`;
}

// The filled state is a second copy of the label, clipped away to the right.
// Hover un-clips it from the left, so background and text colour change as one
// continuous wipe instead of two separately-timed fades.
export function FillLabel({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className={`absolute inset-0 flex items-center justify-center [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-300 ease-editorial group-hover:[clip-path:inset(0_0_0_0)] group-hover:duration-500 group-focus-visible:[clip-path:inset(0_0_0_0)] motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:[clip-path:none] motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-visible:opacity-100 ${toneClasses[tone].fill}`}
      >
        {children}
      </span>
    </>
  );
}
