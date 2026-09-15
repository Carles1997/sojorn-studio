import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Tone = "light" | "dark";

// Warm, paper-integrated treatment: the photo multiplies onto the Paper ground,
// so its whites turn warm. On hover it drifts to 105% over a second and settles
// back a little faster.
export function EditorialImage({
  src,
  alt,
  aspect,
  sizes,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  aspect: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={`group relative isolate overflow-hidden bg-paper ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="object-cover mix-blend-multiply contrast-[.95] saturate-[.8] sepia-[.14] transition-[scale] duration-700 ease-editorial group-hover:scale-105 group-hover:duration-1000 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </div>
  );
}

// Text link: a faint resting rule, a full rule that draws in from the left on
// hover, and an arrow that nudges forward. Press gives a small scale.
export function TextLink({ children, className = "", ...props }: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      className={`group relative inline-flex items-center gap-3 self-start pb-2 text-xs tracking-[0.2em] uppercase transition-transform duration-150 ease-out focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current active:scale-[0.98] motion-reduce:active:scale-100 ${className}`}
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
    </a>
  );
}

const toneClasses: Record<Tone, { frame: string; fill: string }> = {
  light: { frame: "border-olive text-olive focus-visible:outline-olive", fill: "bg-olive text-paper" },
  dark: { frame: "border-paper text-paper focus-visible:outline-paper", fill: "bg-paper text-forest" },
};

export function fillButtonClass(tone: Tone = "light") {
  return `group relative inline-flex items-center justify-center overflow-hidden border px-6 py-4 text-xs tracking-[0.16em] whitespace-nowrap uppercase transition-transform duration-150 ease-out focus-visible:outline-1 focus-visible:outline-offset-4 active:scale-[0.97] motion-reduce:active:scale-100 sm:px-8 sm:tracking-[0.2em] ${toneClasses[tone].frame}`;
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

export function ButtonLink({
  tone = "light",
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"a"> & { tone?: Tone }) {
  return (
    <a {...props} className={`${fillButtonClass(tone)} ${className}`}>
      <FillLabel tone={tone}>{children}</FillLabel>
    </a>
  );
}
