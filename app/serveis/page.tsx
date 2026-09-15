import type { Metadata } from "next";
import { AreasIndex } from "../_components/areas-index";
import { Reveal } from "../_components/motion";
import { CtaBand, PageHero } from "../_components/sections";
import { TierSelector } from "../_components/tier-selector";
import { PageTransition, body, container, display } from "../_components/ui";
import { areas, images, services } from "../_content";

export const metadata: Metadata = {
  title: "Serveis",
  description:
    "Cinc àrees de treball i quatre nivells de servei per transformar allotjaments amb encant: diagnòstic, interiorisme, experiència, identitat i captació.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          tone="sand"
          label="Serveis"
          title={
            <>
              No transformem hotels. <em>Transformem el seu potencial en experiències.</em>
            </>
          }
          intro="Et diem on invertir per aconseguir que el teu allotjament sigui més desitjable. La reforma és una de les eines. La web, la fotografia, la gastronomia i les rutes en són unes altres."
          image={images.terrace}
        />

        <section className="bg-paper">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="h2" className={`${display} max-w-3xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.05]`}>
              Cinc àrees, <em>un sol procés.</em>
            </Reveal>
            <div className="mt-16 md:mt-24">
              <AreasIndex areas={areas} />
            </div>
          </div>
        </section>

        <section id="nivells" className="bg-forest text-paper">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="h2" className={`${display} max-w-3xl pb-1 text-[clamp(2.5rem,4.8vw,4.5rem)] leading-[1.05]`}>
              Quatre nivells, <em>un únic equip.</em>
            </Reveal>
            <Reveal as="p" delay={0.1} className="mt-8 max-w-xl text-[17px] leading-relaxed font-light text-paper/85">
              Tres nivells de projecte segons l’abast de cada transformació, i un servei continu perquè el projecte no
              acabi quan acaba la reforma.
            </Reveal>
            <div className="mt-16 md:mt-24">
              <TierSelector tiers={services} />
            </div>
          </div>
        </section>

        <section className="bg-sand">
          <div className={`${container} grid gap-12 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <Reveal as="h2" className={`${display} pb-2 text-[clamp(3rem,7vw,7rem)] leading-[1.02] lg:col-span-7`}>
              No cal <em>reformar-ho tot.</em>
            </Reveal>
            <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
              <Reveal as="p" className="font-serif text-2xl font-light italic md:text-3xl">
                Transformació per fases
              </Reveal>
              <Reveal as="p" delay={0.1} className={`${body} mt-4`}>
                Prioritzem les intervencions que poden generar més impacte amb la menor inversió necessària. Així, també
                els allotjaments sense pressupost per a una reforma integral poden començar a transformar-se.
              </Reveal>
            </div>
          </div>
        </section>

        <CtaBand
          title={
            <>
              Vols saber quin potencial té <em>el teu allotjament?</em>
            </>
          }
          text="El diagnòstic és el primer pas de qualsevol nivell: primer mirem, després decidim."
          image={images.cellar}
        />
      </main>
    </PageTransition>
  );
}
