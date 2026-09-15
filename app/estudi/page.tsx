import type { Metadata } from "next";
import { ManifestScroll } from "../_components/manifest-scroll";
import { Reveal, Stagger, StaggerItem, Strike } from "../_components/motion";
import { CtaBand, PageHero } from "../_components/sections";
import { PageTransition, body, container, display } from "../_components/ui";
import { disciplines, images, manifest, notUs, pillars } from "../_content";

export const metadata: Metadata = {
  title: "Estudi",
  description:
    "Una consultoria de transformació per a allotjaments amb encant. Estratègia, arquitectura, interiorisme, territori, marca i comunicació.",
};

export default function StudioPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          label="Estudi"
          size="md"
          title={
            <>
              Creiem que Catalunya no necessita més llocs extraordinaris.{" "}
              <em>Necessita que els que ja existeixen siguin vistos.</em>
            </>
          }
          intro="Treballem amb propietaris d’hotels, masies i allotjaments amb encant que saben que tenen alguna cosa especial, però potser encara no han trobat la manera d’expressar-ho."
          image={images.studio}
        />

        <section className="bg-forest text-paper">
          <div className={`${container} grid gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal as="h2" className={`${display} pb-1 text-[clamp(2.25rem,3.6vw,3.5rem)] leading-[1.08]`}>
                  No venim a fer hotels més bonics. <em>Venim a descobrir per què haurien de ser especials.</em>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ManifestScroll paragraphs={manifest} />
              <Reveal
                as="p"
                className="mt-16 border-t border-paper/15 pt-10 font-serif text-2xl font-light italic md:text-3xl"
              >
                Convertim allotjaments amb potencial en destinacions que val la pena descobrir.
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-sand">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="p" className={body}>
              No som
            </Reveal>
            <Stagger as="ul" className="mt-6 border-t border-olive/25">
              {notUs.map((item) => (
                <StaggerItem
                  as="li"
                  key={item}
                  className="border-b border-olive/25 py-5 font-serif text-[clamp(1.75rem,3.6vw,3.25rem)] leading-tight font-extralight text-olive/75"
                >
                  <Strike>{item}</Strike>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal as="h2" className={`${display} mt-20 max-w-5xl pb-1 text-[clamp(2.5rem,5.5vw,5.25rem)] leading-[1.05] md:mt-28`}>
              Som una consultoria de transformació <em>per a allotjaments amb encant.</em>
            </Reveal>

            <Stagger as="ul" className="mt-16 grid grid-cols-2 border-t border-olive/25 md:grid-cols-4">
              {pillars.map((pillar) => (
                <StaggerItem
                  as="li"
                  key={pillar}
                  className="border-b border-olive/25 py-8 font-serif text-3xl font-light md:border-b-0 md:py-10 md:text-4xl"
                >
                  {pillar}
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal as="p" className={`${body} mt-16 max-w-2xl`}>
              Podem entrar en un hotel que necessita una reforma de 200.000 €, en un altre que només necessita una nova
              web de 8.000 € o en un altre que necessita replantejar tota l’experiència del client.
            </Reveal>
          </div>
        </section>

        <section className="bg-paper">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="p" className={body}>
              Combinem
            </Reveal>
            <Stagger
              as="ul"
              className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-3 font-serif text-[clamp(2.25rem,5vw,4.75rem)] leading-tight font-extralight"
            >
              {disciplines.map((discipline, i) => (
                <StaggerItem as="li" key={discipline} className="flex items-baseline gap-5">
                  {discipline}
                  {i < disciplines.length - 1 && (
                    <span aria-hidden className="text-olive/40">
                      +
                    </span>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal as="p" className={`${body} mt-16 max-w-lg`}>
              Perquè pensem que les millors transformacions no comencen amb una obra. Comencen amb una bona pregunta.
            </Reveal>
            <Reveal
              as="p"
              className="mt-20 border-t border-olive/20 pt-12 pb-2 font-serif text-[clamp(2.75rem,7.5vw,7.5rem)] leading-[1.05] font-extralight tracking-[-0.025em] text-balance italic md:mt-28"
            >
              Què podria arribar a ser aquest lloc?
            </Reveal>
          </div>
        </section>

        <CtaBand
          title={
            <>
              Comencem per <em>una bona pregunta.</em>
            </>
          }
          text="Explica’ns quin és el teu projecte i vindrem a conèixer-lo."
          image={images.village}
        />
      </main>
    </PageTransition>
  );
}
