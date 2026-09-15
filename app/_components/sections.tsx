import type { ReactNode } from "react";
import type { Photo } from "../_content";
import { ButtonLink } from "./button-link";
import { Magnetic, ParallaxImage, Reveal } from "./motion";
import { body, container, display, enter, eyebrow } from "./ui";

// Opening block of every inner page: asymmetric, headline left, photo right.
export function PageHero({
  label,
  title,
  intro,
  image,
  tone = "paper",
  size = "lg",
}: {
  label: string;
  title: ReactNode;
  intro?: string;
  image?: Photo;
  tone?: "paper" | "sand";
  size?: "lg" | "md";
}) {
  const titleSize = size === "lg" ? "text-[clamp(2.75rem,6.2vw,6rem)]" : "text-[clamp(2.5rem,4.4vw,4.5rem)]";
  return (
    <section className={tone === "sand" ? "bg-sand" : "bg-paper"}>
      <div className={`${container} grid gap-y-14 pt-14 pb-20 lg:grid-cols-12 lg:gap-x-8 lg:pt-24 lg:pb-28`}>
        <div className="flex flex-col lg:col-span-7">
          <p className={`${enter} ${eyebrow}`}>{label}</p>
          <h1 className={`${enter} ${display} ${titleSize} mt-8 pb-2 leading-[1.05] delay-100 lg:mt-12`}>{title}</h1>
          {intro && <p className={`${enter} ${body} mt-10 max-w-lg delay-200 lg:mt-auto lg:pt-16`}>{intro}</p>}
        </div>
        {image && (
          <div className={`${enter} delay-300 lg:col-span-4 lg:col-start-9 lg:mt-16`}>
            <ParallaxImage
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="relative aspect-[3/4]"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}

// Dark closing module with a drifting photograph behind the headline.
export function CtaBand({
  title,
  text,
  image,
  href = "/diagnostic",
  label = "Sol·licitar un diagnòstic",
}: {
  title: ReactNode;
  text: string;
  image: Photo;
  href?: string;
  label?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-paper">
      <ParallaxImage src={image.src} alt={image.alt} sizes="100vw" treatment="dark" className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-forest via-forest/55 to-forest/15" />

      <div className={`${container} flex min-h-[36rem] flex-col justify-end py-20 md:min-h-[85dvh] md:py-24`}>
        <Reveal
          as="h2"
          className={`${display} max-w-5xl pb-2 text-[clamp(2.75rem,7vw,7rem)] leading-[1.04] tracking-[-0.025em]`}
        >
          {title}
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-12 flex flex-col items-start gap-8 border-t border-paper/20 pt-10 md:mt-16 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-sm text-[17px] leading-relaxed font-light">{text}</p>
          <Magnetic>
            <ButtonLink href={href} tone="dark">
              {label}
            </ButtonLink>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
