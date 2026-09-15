import Image from "next/image";
import { Fragment } from "react";
import { AreasAccordion } from "./_components/areas-accordion";
import { ContactForm } from "./_components/contact-form";
import { ScrollReveal } from "./_components/scroll-reveal";
import { SiteHeader } from "./_components/site-header";
import { ButtonLink, EditorialImage, TextLink } from "./_components/ui";
import {
  areas,
  assets,
  disciplines,
  images,
  methodSteps,
  navigation,
  potential,
  problems,
  projectStages,
  services,
} from "./_content";

const container = "mx-auto max-w-[1600px] px-6 md:px-[5vw]";

// The hero plays its entrance on first paint through @starting-style: no
// JavaScript, so it never waits for hydration.
const enter =
  "transition-[opacity,translate] duration-1000 ease-editorial starting:translate-y-4 starting:opacity-0 motion-reduce:starting:translate-y-0";

const eyebrow = "text-[11px] tracking-[0.2em] uppercase";
const body = "text-[17px] leading-relaxed font-light";
const displayXL = "font-serif font-extralight tracking-[-0.02em] text-balance";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          id="inici"
          className={`${container} grid gap-y-16 pt-12 pb-24 lg:grid-cols-12 lg:gap-x-8 lg:pt-20 lg:pb-32`}
        >
          <div className="flex flex-col lg:col-span-7">
            <p className={`${enter} ${eyebrow}`}>Consultoria de transformació per a allotjaments amb encant</p>
            <h1
              className={`${enter} ${displayXL} mt-8 pb-2 text-[clamp(3rem,7vw,7rem)] leading-[1.05] tracking-[-0.025em] delay-100 lg:mt-14`}
            >
              El teu hotel té més potencial <em>del que mostra.</em>
            </h1>
            <div className={`${enter} mt-10 delay-200 lg:mt-auto lg:pt-16`}>
              <p className={`${body} max-w-md`}>
                Analitzem, transformem i comuniquem allotjaments amb encant perquè siguin més atractius, més rendibles
                i més connectats amb el territori.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
                <ButtonLink href="#formulari" data-interest="discover">
                  Sol·licitar un diagnòstic
                </ButtonLink>
                <TextLink href="#metode">Com ho fem</TextLink>
              </div>
            </div>
          </div>

          <div className={`${enter} delay-300 lg:col-span-4 lg:col-start-9 lg:mt-20`}>
            <EditorialImage
              src={images.hero.src}
              alt={images.hero.alt}
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 32vw, 100vw"
              eager
            />
          </div>
        </section>

        {/* Veure millor el que ja existeix */}
        <section className="border-t border-olive/20">
          <div className={`${container} grid gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <div data-reveal className="lg:col-span-5">
              <EditorialImage
                src={images.gaze.src}
                alt={images.gaze.alt}
                aspect="aspect-[3/4]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
              <h2 data-reveal className={`${displayXL} pb-1 text-[clamp(2.25rem,4.2vw,4rem)] leading-[1.08]`}>
                No sempre cal construir més. <em>De vegades cal veure millor el que ja existeix.</em>
              </h2>
              <p data-reveal className={`${body} mt-10 max-w-lg`}>
                Catalunya està plena d’hotels, masies, cases rurals i petits allotjaments amb una història pròpia.
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-olive/20 pt-8 font-serif text-2xl font-light md:text-[1.75rem]">
                {assets.map((asset) => (
                  <li key={asset} data-reveal>
                    {asset}
                  </li>
                ))}
              </ul>
              <p data-reveal className={`${body} mt-10 max-w-lg`}>
                Però tenir-ho tot no significa necessàriament saber-ho explicar. Nosaltres detectem aquest potencial i
                el convertim en una proposta clara, atractiva i coherent.
              </p>
            </div>
          </div>
        </section>

        {/* El problema */}
        <section id="problema" className="border-t border-olive/20">
          <div className={`${container} py-28 md:py-40`}>
            <h2 data-reveal className={`${displayXL} max-w-5xl pb-1 text-[clamp(2.5rem,5.5vw,5.25rem)] leading-[1.05]`}>
              Quan un bon lloc no aconsegueix <em>semblar tan bo com és.</em>
            </h2>
            <p data-reveal className={`${body} mt-10 max-w-xl`}>
              Molts allotjaments tenen grans actius que no estan aprofitats.
            </p>

            <ul className="mt-16 md:mt-24">
              {problems.map((problem) => (
                <li
                  key={problem.asset}
                  data-reveal
                  className="grid gap-2 border-t border-olive/20 py-7 md:grid-cols-12 md:gap-8 md:py-9"
                >
                  <p className="font-serif text-2xl font-light md:col-span-6 md:text-3xl">{problem.asset}</p>
                  <p className={`${body} md:col-span-5 md:col-start-8 md:self-end`}>{problem.gap}</p>
                </li>
              ))}
            </ul>

            <p
              data-reveal
              className="border-t border-olive/20 pt-10 font-serif text-3xl font-light italic md:pt-12 md:text-4xl"
            >
              El nostre objectiu és detectar aquestes oportunitats.
            </p>
          </div>
        </section>

        {/* Declaració */}
        <section id="filosofia" className="border-t border-olive/20">
          <div className={`${container} py-28 text-center md:py-48`}>
            <h2
              data-reveal
              className={`${displayXL} mx-auto max-w-5xl pb-1 text-[clamp(2.25rem,5.2vw,4.75rem)] leading-[1.08]`}
            >
              No reformem espais perquè siguin més bonics. <em>Els transformem perquè tinguin més sentit.</em>
            </h2>
            <p data-reveal className="mx-auto mt-12 max-w-md text-[15px] leading-loose font-light md:mt-16">
              La reforma és només una part del projecte. Primer entenem què té l’allotjament, què li falta i què podria
              arribar a ser. Després decidim què val la pena transformar. I finalment ho fem realitat.
            </p>
          </div>
        </section>

        {/* Què fem */}
        <section id="que-fem" className="border-t border-olive/20">
          <div className={`${container} py-28 md:py-40`}>
            <h2 data-reveal className={`${displayXL} max-w-4xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.06]`}>
              No transformem hotels. <em>Transformem el seu potencial en experiències.</em>
            </h2>
            <p data-reveal className={`${body} mt-10 max-w-xl`}>
              Cinc àrees de treball que no venem per separat. Juntes formen un procés integral.
            </p>
            <div className="mt-16 md:mt-24">
              <AreasAccordion areas={areas} />
            </div>
          </div>
        </section>

        {/* Serveis */}
        <section id="serveis" className="border-t border-olive/20">
          <div className={`${container} py-28 md:py-40`}>
            <h2 data-reveal className={`${displayXL} max-w-3xl pb-1 text-[clamp(2.5rem,4.5vw,4.25rem)] leading-[1.05]`}>
              Quatre nivells, <em>un únic equip.</em>
            </h2>
            <p data-reveal className={`${body} mt-10 max-w-xl`}>
              Tres nivells de projecte segons l’abast de cada transformació, i un servei continu perquè el projecte no
              acabi quan acaba la reforma.
            </p>

            <ul className="mt-16 grid border-t border-l border-olive/20 sm:grid-cols-2 md:mt-24 xl:grid-cols-4">
              {services.map((service) => (
                // Each card is a subgrid over six shared rows, so the rules above
                // "Inclou" and the Consultar links line up across the row.
                <li
                  key={service.name}
                  data-reveal
                  className="row-span-6 grid grid-rows-subgrid border-r border-b border-olive/20 p-6 sm:p-8 md:p-10 xl:p-8 2xl:p-10"
                >
                  <span className="font-serif text-lg font-light">{service.index}</span>
                  {/* Sized to the cell, not the viewport, so TRANSFORM never runs into the column line.
                      The container lives on a wrapper: container queries add layout containment,
                      which would stop the card itself from being a subgrid. */}
                  <div className="@container mt-14 md:mt-20">
                    <h3 className="font-serif text-[clamp(1.5rem,13cqi,2.25rem)] font-light tracking-[0.08em] uppercase">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-3 font-serif text-xl leading-snug font-light italic">{service.kicker}</p>
                  <p className="mt-6 text-[15px] leading-relaxed font-light">{service.description}</p>
                  <div className="mt-10">
                    <p className={`${eyebrow} border-t border-olive/20 pt-6`}>{service.includesLabel}</p>
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] leading-snug font-light">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <TextLink
                    href="#formulari"
                    data-interest={service.value}
                    aria-label={`Consultar el nivell ${service.name}`}
                    className="mt-8 self-end"
                  >
                    Consultar
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* El mètode */}
        <section id="metode" className="border-t border-olive/20">
          <div className={`${container} grid gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <h2 data-reveal className={`${displayXL} pb-1 text-[clamp(2.5rem,4.5vw,4.25rem)] leading-[1.05]`}>
                  Sis passos, <em>un sol procés.</em>
                </h2>
                <div data-reveal className="mt-12 md:mt-16">
                  <EditorialImage
                    src={images.method.src}
                    alt={images.method.alt}
                    aspect="aspect-[4/3]"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="border-b border-olive/20">
                {methodSteps.map((step) => (
                  <li
                    key={step.index}
                    data-reveal
                    className="grid grid-cols-[4.5rem_1fr] gap-x-6 border-t border-olive/20 py-10 sm:grid-cols-[7.5rem_1fr] md:py-12"
                  >
                    <span aria-hidden className="font-serif text-6xl leading-[0.85] font-extralight sm:text-7xl">
                      {step.index}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-light md:text-3xl">{step.title}</h3>
                      <p className="mt-3 max-w-md text-base leading-relaxed font-light">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p data-reveal className="mt-14 font-serif text-2xl leading-snug font-extralight md:text-3xl">
                El resultat? Un lloc que no només té alguna cosa a oferir. <em>Un lloc que té una raó per ser visitat.</em>
              </p>
            </div>
          </div>
        </section>

        {/* El potencial */}
        <section id="potencial" className="border-t border-olive/20">
          <div className={`${container} py-28 md:py-40`}>
            <div data-reveal>
              <EditorialImage
                src={images.potential.src}
                alt={images.potential.alt}
                aspect="aspect-[4/3] md:aspect-[16/9]"
                sizes="(min-width: 1600px) 1440px, 90vw"
              />
            </div>

            <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-8">
              <h2 data-reveal className={`${displayXL} pb-1 text-[clamp(2.5rem,4.5vw,4.25rem)] leading-[1.05] lg:col-span-4`}>
                I si aquest hotel fos <em>molt més que un hotel?</em>
              </h2>
              <div className="lg:col-span-7 lg:col-start-6">
                <p data-reveal className={body}>
                  Podria ser:
                </p>
                <p className="mt-6 font-serif text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.3] font-extralight">
                  {potential.map((line, i) => (
                    <Fragment key={line}>
                      <span data-reveal className={`inline-block ${i === potential.length - 1 ? "italic" : ""}`}>
                        {line}
                      </span>{" "}
                    </Fragment>
                  ))}
                </p>
                <p data-reveal className={`${body} mt-12 max-w-lg`}>
                  Perquè creiem que l’hotel no és només l’edifici. És el que passa quan obres la porta: el que menges, el
                  que descobreixes, el que recordes i el que expliques quan tornes a casa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projectes */}
        <section id="projectes" className="border-t border-olive/20 bg-paper-deep">
          <div className={`${container} py-28 md:py-40`}>
            <p data-reveal className={eyebrow}>
              Projectes
            </p>
            <h2
              data-reveal
              className={`${displayXL} mt-8 max-w-4xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.06]`}
            >
              Projectes que encara no eren <em>el que podien ser.</em>
            </h2>
            <p data-reveal className={`${body} mt-10 max-w-xl`}>
              Cada cas s’explica igual: el repte, el potencial, la transformació i el resultat. Aquest n’és un exemple.
            </p>

            <ol className="mt-16 grid gap-16 md:mt-24 md:grid-cols-3 md:gap-8">
              {projectStages.map((stage, i) => (
                <li key={stage.stage} data-reveal className="flex flex-col">
                  <div className="flex items-baseline justify-between border-t border-olive/30 pt-5">
                    <h3 className="font-serif text-3xl font-light md:text-4xl">{stage.stage}</h3>
                    {i < projectStages.length - 1 && (
                      <span aria-hidden className="hidden font-serif text-3xl font-extralight md:inline">
                        →
                      </span>
                    )}
                  </div>
                  <EditorialImage
                    src={stage.image.src}
                    alt={stage.image.alt}
                    aspect="aspect-[3/4]"
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="mt-6"
                  />
                  <p className={`${eyebrow} mt-6`}>{stage.label}</p>
                  <p className="mt-3 font-serif text-2xl leading-snug font-light italic">«{stage.quote}»</p>
                  <p className="mt-3 text-[15px] leading-relaxed font-light">{stage.text}</p>
                </li>
              ))}
            </ol>

            <div data-reveal className="mt-20 grid gap-4 border-t border-olive/30 pt-10 md:grid-cols-12 md:gap-8">
              <p className={`${eyebrow} md:col-span-3 md:pt-3`}>El resultat</p>
              <p className="font-serif text-3xl leading-snug font-light md:col-span-8 md:col-start-5 md:text-4xl">
                Això transforma un allotjament <em>en una experiència.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Sobre nosaltres */}
        <section id="nosaltres" className="border-t border-olive/20">
          <div className={`${container} py-28 md:py-40`}>
            <h2 data-reveal className={`${displayXL} max-w-5xl pb-1 text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.08]`}>
              Creiem que Catalunya no necessita més llocs extraordinaris.{" "}
              <em>Necessita que els que ja existeixen siguin vistos.</em>
            </h2>

            <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12 lg:gap-8">
              <p data-reveal className={`${body} max-w-md lg:col-span-4`}>
                Treballem amb propietaris d’hotels, masies i allotjaments amb encant que saben que tenen alguna cosa
                especial, però potser encara no han trobat la manera d’expressar-ho.
              </p>
              <div className="lg:col-span-7 lg:col-start-6">
                <p data-reveal className={body}>
                  Combinem
                </p>
                <ul className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-extralight">
                  {disciplines.map((discipline, i) => (
                    <li key={discipline} data-reveal className="flex items-baseline gap-4">
                      {discipline}
                      {i < disciplines.length - 1 && (
                        <span aria-hidden className="text-olive/50">
                          +
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <p data-reveal className={`${body} mt-10 max-w-lg`}>
                  Perquè pensem que les millors transformacions no comencen amb una obra. Comencen amb una bona
                  pregunta.
                </p>
              </div>
            </div>

            <p
              data-reveal
              className="mt-24 border-t border-olive/20 pt-12 pb-2 font-serif text-[clamp(2.75rem,7.5vw,7.5rem)] leading-[1.05] font-extralight tracking-[-0.025em] text-balance italic md:mt-32 md:pt-16"
            >
              Què podria arribar a ser aquest lloc?
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="relative isolate overflow-hidden bg-forest text-paper">
          <Image
            src={images.closing.src}
            alt={images.closing.alt}
            fill
            sizes="100vw"
            className="-z-10 object-cover brightness-[.5] saturate-[.65] sepia-[.25]"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-forest via-forest/50 to-forest/10" />

          <div className={`${container} flex min-h-[36rem] flex-col justify-end py-20 md:min-h-[90dvh] md:py-24`}>
            <h2
              data-reveal
              className={`${displayXL} max-w-5xl pb-2 text-[clamp(2.75rem,7vw,7rem)] leading-[1.04] tracking-[-0.025em]`}
            >
              Descobrim què pot arribar a ser <em>el teu allotjament.</em>
            </h2>
            <div
              data-reveal
              className="mt-12 flex flex-col gap-8 border-t border-paper/20 pt-10 md:mt-16 md:flex-row md:items-center md:justify-between"
            >
              <p className="max-w-sm text-[17px] leading-relaxed font-light">
                Explica’ns quin és el teu projecte i vindrem a conèixer-lo.
              </p>
              <ButtonLink href="#formulari" data-interest="discover" tone="dark">
                Sol·licitar un diagnòstic
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* Formulari */}
        <section id="formulari">
          <div className={`${container} grid gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-4">
              <p data-reveal className={eyebrow}>
                Contacte
              </p>
              <h2
                data-reveal
                className={`${displayXL} mt-8 pb-1 text-[clamp(2.25rem,3.6vw,3.5rem)] leading-[1.08]`}
              >
                Vols saber quin potencial té <em>el teu allotjament?</em>
              </h2>
            </div>
            <div data-reveal className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest text-paper">
        <div className={`${container} grid gap-12 py-16 md:grid-cols-12 md:gap-8 md:py-20`}>
          <div className="md:col-span-5">
            <p className="font-serif text-3xl font-light tracking-[0.18em] uppercase">Sojorn</p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed font-light text-paper/80">
              Consultoria de transformació per a allotjaments amb encant.
            </p>
          </div>
          <nav aria-label="Peu de pàgina" className="md:col-span-3 md:col-start-7">
            <ul className="flex flex-col gap-4 text-[11px] tracking-[0.2em] uppercase">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-opacity duration-300 hover:opacity-60">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col md:col-span-3 md:col-start-10">
            <p className="text-[15px] leading-relaxed font-light text-paper/80">
              Estratègia, espais, experiències i marca.
            </p>
            <TextLink href="#formulari" data-interest="discover" className="mt-6">
              Sol·licitar un diagnòstic
            </TextLink>
          </div>
        </div>
        <div className="border-t border-paper/15">
          <p className={`${container} py-6 text-xs font-light text-paper/70`}>Sojorn Studio</p>
        </div>
      </footer>
    </>
  );
}
