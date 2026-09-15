import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactFormFromSearchParams } from "../_components/contact-form";
import { ParallaxImage } from "../_components/motion";
import { PageTransition, display, enter, eyebrow } from "../_components/ui";
import { images, methodSteps } from "../_content";

export const metadata: Metadata = {
  title: "Diagnòstic",
  description: "Explica’ns quin és el teu projecte i vindrem a conèixer-lo. Descobrim què pot arribar a ser el teu allotjament.",
};

const firstSteps = methodSteps.slice(0, 3);

export default function DiagnosticPage() {
  return (
    <PageTransition>
      <main className="grid lg:min-h-[calc(100dvh-4.5rem)] lg:grid-cols-12">
        {/* Dark panel: stays pinned while the form scrolls beside it. */}
        <section className="relative isolate overflow-hidden bg-forest text-paper lg:col-span-5">
          <ParallaxImage
            src={images.diagnostic.src}
            alt={images.diagnostic.alt}
            sizes="(min-width: 1024px) 42vw, 100vw"
            treatment="dark"
            className="absolute inset-0 -z-10 opacity-60"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-forest/40 via-forest/80 to-forest" />

          <div className="flex flex-col gap-16 px-6 pt-14 pb-16 md:px-[5vw] lg:sticky lg:top-18 lg:h-[calc(100dvh-4.5rem)] lg:justify-between lg:pr-12 lg:pb-14">
            <div>
              <p className={`${enter} ${eyebrow} text-paper/70`}>Diagnòstic</p>
              <h1 className={`${enter} ${display} mt-8 pb-2 text-[clamp(2.5rem,4.4vw,4.5rem)] leading-[1.05] delay-100`}>
                Vols saber quin potencial té <em>el teu allotjament?</em>
              </h1>
              <p className={`${enter} mt-8 max-w-sm text-[17px] leading-relaxed font-light text-paper/85 delay-200`}>
                Explica’ns quin és el teu projecte i vindrem a conèixer-lo.
              </p>
            </div>

            <ol className={`${enter} border-t border-paper/15 delay-300`}>
              {firstSteps.map((step) => (
                <li key={step.index} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-paper/15 py-5">
                  <span className="font-serif text-2xl font-extralight">{step.index}</span>
                  <div>
                    <p className="font-serif text-xl font-light">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed font-light text-paper/75">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-paper px-6 py-16 md:px-[5vw] md:py-24 lg:col-span-7 lg:px-16 lg:py-28 xl:px-24">
          <h2 className="sr-only">Formulari de sol·licitud</h2>
          <div className={`${enter} delay-200`}>
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromSearchParams />
            </Suspense>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
