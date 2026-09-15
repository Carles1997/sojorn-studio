import type { Metadata } from "next";
import { ParallaxImage, Reveal, Stagger, StaggerItem, Strike } from "../_components/motion";
import { CtaBand, PageHero } from "../_components/sections";
import { PageTransition, body, container, display } from "../_components/ui";
import { caseStructure, images, projectStages } from "../_content";

export const metadata: Metadata = {
  title: "Projectes",
  description:
    "Cada transformació s’explica igual: el repte, el potencial, la transformació i el resultat. Abans, oportunitat i després.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          tone="sand"
          label="Projectes"
          title={
            <>
              Projectes que encara no eren <em>el que podien ser.</em>
            </>
          }
          intro="Cada transformació s’explica igual: què estava passant, què vam detectar, què vam proposar i què va canviar."
          image={images.after}
        />

        <section className="bg-paper">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="h2" className={`${display} max-w-3xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.05]`}>
              Com expliquem <em>cada cas.</em>
            </Reveal>
            <Stagger as="ol" className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
              {caseStructure.map((step) => (
                <StaggerItem as="li" key={step.index} className="border-t border-olive/30 pt-6">
                  <span aria-hidden className="block font-serif text-[clamp(4rem,7vw,6.5rem)] leading-none font-extralight">
                    {step.index}
                  </span>
                  <h3 className="mt-8 font-serif text-3xl font-light">{step.title}</h3>
                  <p className={`${body} mt-3`}>{step.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="bg-forest text-paper">
          <div className={`${container} grid gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-5">
              <Reveal as="p" className="text-[17px] font-light text-paper/70">
                En lloc de
              </Reveal>
              <Reveal
                as="p"
                delay={0.1}
                className="mt-6 font-serif text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.15] font-extralight text-paper/75"
              >
                <Strike>Habitació doble amb esmorzar.</Strike>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal as="p" className="text-[17px] font-light text-paper/70">
                Plantejar
              </Reveal>
              <Reveal as="h2" delay={0.15} className={`${display} mt-6 pb-2 text-[clamp(2.75rem,6vw,6rem)] leading-[1.02]`}>
                48 hores per descobrir <em>el Priorat.</em>
              </Reveal>
              <Reveal as="p" delay={0.25} className="mt-10 max-w-lg text-[17px] leading-relaxed font-light text-paper/85">
                Dormir entre vinyes, visitar un celler, descobrir un poble de pedra i acabar el dia amb un sopar de
                producte local.
              </Reveal>
              <Reveal
                as="p"
                delay={0.3}
                className="mt-12 border-t border-paper/15 pt-8 font-serif text-2xl font-light italic md:text-3xl"
              >
                Això transforma un allotjament en una experiència.
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-paper">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="h2" className={`${display} max-w-3xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.05]`}>
              Abans, oportunitat, <em>després.</em>
            </Reveal>
            <Reveal as="p" delay={0.1} className={`${body} mt-8 max-w-xl`}>
              Un exemple de plantejament, pas a pas.
            </Reveal>

            <Stagger as="ol" stagger={0.12} className="mt-16 grid gap-16 md:mt-24 md:grid-cols-3 md:gap-8">
              {projectStages.map((stage, i) => (
                <StaggerItem as="li" key={stage.stage} className={`flex flex-col ${i === 1 ? "md:mt-24" : ""}`}>
                  <div className="flex items-baseline justify-between border-t border-olive/30 pt-5">
                    <h3 className="font-serif text-3xl font-light md:text-4xl">{stage.stage}</h3>
                    {i < projectStages.length - 1 && (
                      <span aria-hidden className="hidden font-serif text-3xl font-extralight md:inline">
                        →
                      </span>
                    )}
                  </div>
                  <ParallaxImage
                    src={stage.image.src}
                    alt={stage.image.alt}
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="relative mt-6 aspect-[3/4]"
                  />
                  <p className="mt-6 font-serif text-2xl leading-snug font-light italic">«{stage.quote}»</p>
                  <p className="mt-3 text-[15px] leading-relaxed font-light">{stage.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <CtaBand
          title={
            <>
              El teu allotjament pot ser <em>el proper cas.</em>
            </>
          }
          text="Explica’ns quin és el teu projecte i vindrem a conèixer-lo."
          image={images.terrace}
        />
      </main>
    </PageTransition>
  );
}
