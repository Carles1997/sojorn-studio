import type { Metadata } from "next";
import { ButtonLink } from "../_components/button-link";
import { MethodScroller } from "../_components/method-scroller";
import { Magnetic, Reveal, Stagger, StaggerItem } from "../_components/motion";
import { CtaBand, PageHero } from "../_components/sections";
import { PageTransition, container, display, eyebrow } from "../_components/ui";
import { areas, images, methodSteps } from "../_content";

export const metadata: Metadata = {
  title: "Mètode",
  description:
    "Descobrim, analitzem, imaginem, transformem, expliquem i activem. Sis passos per portar un allotjament del que és al que podria arribar a ser.",
};

const auditItems = areas[0].groups[0].items;

export default function MethodPage() {
  return (
    <PageTransition>
      <main>
        <PageHero
          label="Mètode"
          title={
            <>
              Sis passos, <em>un sol procés.</em>
            </>
          }
          intro="Primer mirem. Després decidim. Així portem cada allotjament del que és ara al que podria arribar a ser."
          image={images.walker}
        />

        <section aria-label="Els sis passos">
          <MethodScroller steps={methodSteps} />
        </section>

        <section className="bg-forest text-paper">
          <div className={`${container} grid gap-16 py-28 md:py-40 lg:grid-cols-12 lg:gap-8`}>
            <div className="lg:col-span-6">
              <Reveal as="p" className={`${eyebrow} text-paper/70`}>
                Producte estrella
              </Reveal>
              <Reveal as="h2" className={`${display} mt-8 pb-1 text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[1.02]`}>
                Hotel Potential Audit
              </Reveal>
              <Reveal as="p" delay={0.1} className="mt-10 max-w-md text-[17px] leading-relaxed font-light text-paper/85">
                Un diagnòstic complet que acaba amb una pregunta molt senzilla:
              </Reveal>
              <Reveal
                as="p"
                delay={0.15}
                className="mt-6 pb-1 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.2] font-extralight italic"
              >
                Què hauríem de fer si realment volguéssim treure tot el potencial d’aquest lloc?
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
              <Reveal as="p" className="border-t border-paper/15 pt-6 text-[11px] tracking-[0.2em] text-paper/70 uppercase">
                Inclou
              </Reveal>
              <Stagger as="ul" stagger={0.05} className="mt-6 grid gap-y-3 text-[15px] font-light sm:grid-cols-2 sm:gap-x-8">
                {auditItems.map((item) => (
                  <StaggerItem as="li" key={item}>
                    {item}
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal className="mt-12">
                <Magnetic>
                  <ButtonLink href="/diagnostic?nivell=discover" tone="dark">
                    Sol·licitar un diagnòstic
                  </ButtonLink>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-sand">
          <div className={`${container} py-28 md:py-40`}>
            <Reveal as="p" className="font-serif text-2xl font-light italic md:text-3xl">
              El resultat?
            </Reveal>
            <Stagger as="h2" stagger={0.16} className="mt-8 max-w-6xl">
              <StaggerItem as="span" className={`${display} block pb-1 text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.05]`}>
                Un lloc que no només té alguna cosa a oferir.
              </StaggerItem>
              <StaggerItem
                as="span"
                className={`${display} block pb-2 text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[1.05] italic`}
              >
                Un lloc que té una raó per ser visitat.
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        <CtaBand
          title={
            <>
              Descobrim què pot arribar a ser <em>el teu allotjament.</em>
            </>
          }
          text="Explica’ns quin és el teu projecte i vindrem a conèixer-lo."
          image={images.territory}
        />
      </main>
    </PageTransition>
  );
}
