import { ButtonLink } from "./_components/button-link";
import { CompareSlider } from "./_components/compare-slider";
import { ParallaxImage, Reveal, Stagger, StaggerItem } from "./_components/motion";
import { PotentialHover } from "./_components/potential-hover";
import { ProblemStack } from "./_components/problem-stack";
import { CtaBand } from "./_components/sections";
import { TierRows } from "./_components/tier-rows";
import { PageTransition, TextLink, body, container, display, enter, eyebrow } from "./_components/ui";
import { assets, images, methodSteps, potential, problems, services } from "./_content";

export default function Home() {
  return (
    <PageTransition>
      <main>
        {/* Hero */}
        <section className="bg-paper">
          <div className={`${container} grid gap-y-14 pt-12 pb-20 lg:grid-cols-12 lg:gap-x-8 lg:pt-20 lg:pb-28`}>
            <div className="flex flex-col lg:col-span-7">
              <p className={`${enter} ${eyebrow}`}>Consultoria de transformació per a allotjaments amb encant</p>
              <h1
                className={`${enter} ${display} mt-8 pb-2 text-[clamp(3rem,7vw,7rem)] leading-[1.05] tracking-[-0.025em] delay-100 lg:mt-14`}
              >
                El teu hotel té més potencial <em>del que mostra.</em>
              </h1>
              <div className={`${enter} mt-10 delay-200 lg:mt-auto lg:pt-16`}>
                <p className={`${body} max-w-md`}>
                  Analitzem, transformem i comuniquem allotjaments amb encant perquè siguin més atractius, més
                  rendibles i més connectats amb el territori.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
                  <ButtonLink href="/diagnostic">Sol·licitar un diagnòstic</ButtonLink>
                  <TextLink href="/metode">Com ho fem</TextLink>
                </div>
              </div>
            </div>
            <div className={`${enter} delay-300 lg:col-span-4 lg:col-start-9 lg:mt-20`}>
              <ParallaxImage
                src={images.hero.src}
                alt={images.hero.alt}
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="relative aspect-[3/4]"
                priority
              />
            </div>
          </div>
        </section>

        {/* Veure millor el que ja existeix */}
        <section className="bg-sand">
          <div className={`${container} grid gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <Reveal className="lg:col-span-5">
              <ParallaxImage
                src={images.gaze.src}
                alt={images.gaze.alt}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="relative aspect-[3/4]"
              />
            </Reveal>
            <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
              <Reveal as="h2" className={`${display} pb-1 text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.06]`}>
                No sempre cal construir més. <em>De vegades cal veure millor el que ja existeix.</em>
              </Reveal>
              <Reveal as="p" delay={0.1} className={`${body} mt-10 max-w-lg`}>
                Catalunya està plena d’hotels, masies, cases rurals i petits allotjaments amb una història pròpia.
              </Reveal>
              <Stagger
                as="ul"
                stagger={0.06}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-olive/25 pt-8 font-serif text-[clamp(1.5rem,2.4vw,2.25rem)] font-extralight"
              >
                {assets.map((asset) => (
                  <StaggerItem as="li" key={asset}>
                    {asset}
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal as="p" className={`${body} mt-10 max-w-lg`}>
                Però tenir-ho tot no significa necessàriament saber-ho explicar. Nosaltres detectem aquest potencial i
                el convertim en una proposta clara, atractiva i coherent.
              </Reveal>
            </div>
          </div>
        </section>

        {/* El problema */}
        <section className="bg-paper">
          <div className={`${container} grid gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Reveal as="h2" className={`${display} pb-1 text-[clamp(2.5rem,4.6vw,4.5rem)] leading-[1.05]`}>
                  Quan un bon lloc no aconsegueix <em>semblar tan bo com és.</em>
                </Reveal>
                <Reveal as="p" delay={0.1} className={`${body} mt-10 max-w-md`}>
                  Molts allotjaments tenen grans actius que no estan aprofitats.
                </Reveal>
                <Reveal
                  as="p"
                  delay={0.2}
                  className="mt-10 border-t border-olive/20 pt-8 font-serif text-2xl font-light italic md:text-3xl"
                >
                  El nostre objectiu és detectar aquestes oportunitats.
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ProblemStack problems={problems} />
            </div>
          </div>
        </section>

        {/* Manifest */}
        <section className="bg-forest text-paper">
          <div className={`${container} py-32 md:py-48`}>
            <Stagger as="h2" stagger={0.16} className="mx-auto max-w-6xl text-center">
              <StaggerItem
                as="span"
                className={`${display} block pb-1 text-[clamp(2.5rem,6vw,6rem)] leading-[1.04]`}
              >
                No reformem espais perquè siguin més bonics.
              </StaggerItem>
              <StaggerItem
                as="span"
                className={`${display} mt-2 block pb-2 text-[clamp(2.5rem,6vw,6rem)] leading-[1.04] italic`}
              >
                Els transformem perquè tinguin més sentit.
              </StaggerItem>
            </Stagger>
            <Reveal className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-10 border-t border-paper/15 pt-12 text-center md:mt-24">
              <p className="text-[17px] leading-relaxed font-light text-paper/85">
                La reforma és només una part del projecte. Primer entenem què té l’allotjament, què li falta i què
                podria arribar a ser. Després decidim què val la pena transformar. I finalment ho fem realitat.
              </p>
              <TextLink href="/estudi">Qui som</TextLink>
            </Reveal>
          </div>
        </section>

        {/* El potencial */}
        <section className="bg-sand">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="h2" className={`${display} max-w-4xl pb-1 text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.05]`}>
              I si aquest hotel fos <em>molt més que un hotel?</em>
            </Reveal>
            <Reveal as="p" delay={0.1} className={`${body} mt-8`}>
              Podria ser:
            </Reveal>
            <Reveal className="mt-12 md:mt-16">
              <PotentialHover items={potential} />
            </Reveal>
            <Reveal as="p" className={`${body} mt-12 max-w-xl`}>
              Perquè creiem que l’hotel no és només l’edifici. És el que passa quan obres la porta: el que menges, el
              que descobreixes, el que recordes i el que expliques quan tornes a casa.
            </Reveal>
          </div>
        </section>

        {/* Nivells */}
        <section className="bg-paper">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="h2" className={`${display} max-w-3xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.05]`}>
              Quatre nivells, <em>un únic equip.</em>
            </Reveal>
            <Reveal as="p" delay={0.1} className={`${body} mt-8 max-w-xl`}>
              Tres nivells de projecte segons l’abast de cada transformació, i un servei continu perquè el projecte no
              acabi quan acaba la reforma.
            </Reveal>
            <div className="mt-16 md:mt-24">
              <TierRows tiers={services} />
            </div>
          </div>
        </section>

        {/* Mètode */}
        <section className="bg-sand">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="h2" className={`${display} max-w-3xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.05]`}>
              Sis passos, <em>un sol procés.</em>
            </Reveal>
            <Stagger
              as="ol"
              className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-24 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-8"
            >
              {methodSteps.map((step) => (
                <StaggerItem as="li" key={step.index} className="border-t border-olive/30 pt-6">
                  <span aria-hidden className="block font-serif text-[clamp(3.5rem,6vw,5.5rem)] leading-none font-extralight">
                    {step.index}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-light">{step.title}</h3>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-16">
              <TextLink href="/metode">Descobrir el mètode</TextLink>
            </Reveal>
          </div>
        </section>

        {/* Projectes */}
        <section className="bg-paper">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="h2" className={`${display} max-w-4xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.06]`}>
              Projectes que encara no eren <em>el que podien ser.</em>
            </Reveal>
            <Reveal as="p" delay={0.1} className={`${body} mt-8 max-w-xl`}>
              Arrossega la línia per veure com canvia un allotjament quan deixa de vendre una habitació i comença a
              vendre una experiència.
            </Reveal>
            <Reveal className="mt-16 md:mt-20">
              <CompareSlider before={images.before} after={images.after} />
            </Reveal>
            <Reveal className="mt-12">
              <TextLink href="/projectes">Veure l’exemple complet</TextLink>
            </Reveal>
          </div>
        </section>

        <CtaBand
          title={
            <>
              Descobrim què pot arribar a ser <em>el teu allotjament.</em>
            </>
          }
          text="Explica’ns quin és el teu projecte i vindrem a conèixer-lo."
          image={images.closing}
        />
      </main>
    </PageTransition>
  );
}
