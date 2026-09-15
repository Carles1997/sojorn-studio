import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";

// Placeholder photography from Unsplash until the real shoots arrive.
const photo = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;

const images = {
  hero: {
    src: photo("1786966485314-47d35985e5d3", 1600),
    alt: "Cadires de fusta amb coixins de lli al voltant de taules de pedra, en un pati rústic",
    caption: "Un pati de pedra",
  },
  method: {
    src: photo("1788927783390-326c75c0265e", 1600),
    alt: "Habitació assolellada amb un llit de dia, mobles de fusta i una gran finestra",
    caption: "Llum de finestra",
  },
  closing: {
    src: photo("1775137014196-c96d4eecaceb", 2400),
    alt: "Paisatge de vinyes i turons al capvespre",
  },
};

const services = [
  {
    index: "01",
    name: "Discover",
    kicker: "Diagnòstic i estratègia",
    tagline: "Primer mirem. Després decidim.",
    description:
      "Per a propietaris que saben que alguna cosa no funciona, però no saben exactament què.",
    includes: ["Auditoria", "Visita", "Competència", "Territori", "Posicionament", "Pla d'acció"],
  },
  {
    index: "02",
    name: "Transform",
    kicker: "Disseny i execució",
    tagline: "Fer que l'espai expliqui qui és.",
    description: "Per a allotjaments que volen fer un canvi real, prioritzant allò que genera més impacte.",
    includes: ["Diagnòstic", "Interiorisme", "Experiència", "Identitat", "Comunicació", "Coordinació"],
  },
  {
    index: "03",
    name: "Signature",
    kicker: "Transformació integral",
    tagline: "Un únic equip per a tot l'allotjament.",
    description: "Per a projectes amb ambició, del concepte fins al dia del llançament.",
    includes: ["Concepte", "Arquitectura", "Interiorisme", "Marca", "Fotografia", "Web", "Llançament"],
  },
  {
    index: "04",
    name: "Evolve",
    kicker: "Acompanyament continu",
    tagline: "El projecte no acaba quan acaba la reforma.",
    description: "Per als qui volen continuar creixent cada temporada, amb algú que coneix la casa.",
    includes: ["Continguts", "Fotografia", "Campanyes", "Experiències", "Temporada", "Posicionament"],
  },
];

const steps = [
  {
    index: "01",
    title: "Descobrim",
    text: "Visitem l'allotjament i el territori. Parlem amb els propietaris per entendre la història, els problemes i els objectius.",
  },
  {
    index: "02",
    title: "Analitzem",
    text: "Estudiem l'espai, el client, la competència, el territori, la marca i la comunicació. I hi detectem oportunitats.",
  },
  {
    index: "03",
    title: "Imaginem",
    text: "Definim què podria arribar a ser l'allotjament: el concepte, el posicionament i el pla d'actuació.",
  },
  {
    index: "04",
    title: "Transformem",
    text: "Dissenyem i executem les actuacions prioritàries, des de petits canvis d'interiorisme fins a reformes integrals.",
  },
  {
    index: "05",
    title: "Expliquem",
    text: "Construïm la identitat, les imatges, la web i el relat. Fem que el client entengui per què ha de venir.",
  },
  {
    index: "06",
    title: "Activem",
    text: "Creem experiències i continguts perquè l'allotjament no depengui només de l'habitació.",
  },
];

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[11px] tracking-[0.2em] uppercase ${className}`}>{children}</p>;
}

// Warm, paper-integrated treatment: the photo multiplies onto the Paper ground,
// so its whites turn warm and nothing reads as a cold stock image.
function EditorialImage({
  src,
  alt,
  aspect,
  sizes,
  eager = false,
}: {
  src: string;
  alt: string;
  aspect: string;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <div className={`relative isolate overflow-hidden bg-paper ${aspect}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="object-cover mix-blend-multiply contrast-[.95] saturate-[.8] sepia-[.14]"
      />
    </div>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return (
    <figcaption className="mt-4 flex items-baseline justify-between gap-6 text-xs font-light">
      <span>{children}</span>
      <span className="tracking-[0.2em] uppercase">Imatge de mostra</span>
    </figcaption>
  );
}

export default function Home() {
  return (
    <>
      <header className="border-b border-olive/20">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-6 md:px-[5vw]">
          <Link href="/" className="flex items-baseline gap-3">
            <span className="font-serif text-2xl font-light tracking-[0.18em] uppercase">Sojorn</span>
            <span className="hidden text-[11px] tracking-[0.2em] uppercase sm:inline">Studio</span>
          </Link>
          <nav className="flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase">
            <a href="#filosofia" className="hidden md:inline">
              Filosofia
            </a>
            <a href="#serveis" className="hidden md:inline">
              Serveis
            </a>
            <a href="#metode" className="hidden md:inline">
              Mètode
            </a>
            <Link href="/diagnostic" className="whitespace-nowrap">
              [ Diagnòstic ]
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-[1600px] gap-y-16 px-6 pt-14 pb-24 md:px-[5vw] lg:grid-cols-12 lg:gap-x-8 lg:pt-20 lg:pb-36">
          <div className="flex flex-col lg:col-span-7">
            <Eyebrow>(01) — Consultoria de transformació · Allotjaments amb encant</Eyebrow>
            <h1 className="mt-10 font-serif text-[clamp(3rem,7vw,7rem)] leading-[1.02] font-extralight tracking-[-0.025em] text-balance lg:mt-16">
              El teu hotel té més potencial <em>del que mostra.</em>
            </h1>
            <div className="mt-14 grid gap-10 border-t border-olive/20 pt-8 sm:grid-cols-2 lg:mt-auto">
              <p className="max-w-sm text-[17px] leading-relaxed font-light">
                Analitzem, transformem i comuniquem allotjaments amb encant perquè siguin més atractius, més rendibles
                i més connectats amb el territori.
              </p>
              <div className="flex flex-col items-start justify-between gap-8">
                <Eyebrow className="leading-loose">Consultoria · Disseny · Experiència · Comunicació</Eyebrow>
                <Link
                  href="/diagnostic"
                  className="border-b border-olive/40 pb-1.5 text-xs tracking-[0.2em] uppercase transition-colors duration-500 hover:border-olive"
                >
                  Analitzar el meu allotjament →
                </Link>
              </div>
            </div>
          </div>

          <figure className="lg:col-span-4 lg:col-start-9 lg:mt-24">
            <EditorialImage
              src={images.hero.src}
              alt={images.hero.alt}
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 32vw, 100vw"
              eager
            />
            <Caption>{images.hero.caption}</Caption>
          </figure>
        </section>

        {/* Declaració */}
        <section id="filosofia" className="border-t border-olive/20">
          <div className="mx-auto max-w-[1600px] px-6 py-28 text-center md:px-[5vw] md:py-48">
            <Eyebrow>(02) — La nostra mirada</Eyebrow>
            <h2 className="mx-auto mt-12 max-w-5xl font-serif text-[clamp(2.25rem,5.2vw,4.75rem)] leading-[1.08] font-extralight tracking-[-0.02em] text-balance md:mt-16">
              No reformem espais perquè siguin més bonics. <em>Els transformem perquè tinguin més sentit.</em>
            </h2>
            <p className="mx-auto mt-12 max-w-md text-[15px] leading-loose font-light md:mt-16">
              La reforma és només una part del projecte. Primer entenem què té l&apos;allotjament, què li falta i què
              podria arribar a ser. Després decidim què val la pena transformar.
            </p>
          </div>
        </section>

        {/* Serveis */}
        <section id="serveis" className="border-t border-olive/20">
          <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-[5vw] md:py-36">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-6">
                <Eyebrow>(03) — Nivells de servei</Eyebrow>
                <h2 className="mt-8 font-serif text-[clamp(2.5rem,4.5vw,4.25rem)] leading-[1.05] font-extralight tracking-[-0.02em]">
                  Quatre maneres d&apos;entrar. <em>Un sol equip.</em>
                </h2>
              </div>
              <p className="max-w-md self-end text-[17px] leading-relaxed font-light lg:col-span-4 lg:col-start-9">
                No venem interiorisme, web o fotografia per separat. Venem un procés que sempre comença amb la mateixa
                pregunta: què pot arribar a ser aquest lloc?
              </p>
            </div>

            <ul className="mt-16 grid border-t border-l border-olive/20 sm:grid-cols-2 md:mt-24 xl:grid-cols-4">
              {services.map((service) => (
                <li
                  key={service.name}
                  className="@container flex flex-col border-r border-b border-olive/20 p-6 sm:p-8 md:p-10 xl:p-8 2xl:p-10"
                >
                  <div className="flex min-h-[3.2em] items-baseline justify-between gap-4 text-[11px] leading-[1.6] tracking-[0.2em] uppercase">
                    <span>{service.index}</span>
                    <span className="text-right">{service.kicker}</span>
                  </div>
                  {/* Sized to the cell, not the viewport, so TRANSFORM never runs into the column line. */}
                  <h3 className="mt-16 font-serif text-[clamp(1.5rem,13cqi,2.25rem)] font-light tracking-[0.08em] uppercase md:mt-24">
                    {service.name}
                  </h3>
                  <p className="mt-5 font-serif text-xl leading-snug font-light italic">{service.tagline}</p>
                  <p className="mt-6 text-[15px] leading-relaxed font-light">{service.description}</p>
                  <div className="mt-auto pt-12">
                    <p className="border-t border-olive/20 pt-6 text-xs leading-loose font-light">
                      {service.includes.map((item, i) => (
                        // Glue each "·" to the word before it, but break between items,
                        // so the list wraps and no line ever starts with a separator.
                        <Fragment key={item}>
                          <span className="whitespace-nowrap">
                            {item}
                            {i < service.includes.length - 1 && " ·"}
                          </span>{" "}
                        </Fragment>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* El mètode */}
        <section id="metode" className="border-t border-olive/20">
          <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-24 md:px-[5vw] md:py-36 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-12">
                <Eyebrow>(04) — El mètode</Eyebrow>
                <h2 className="mt-8 font-serif text-[clamp(2.25rem,3.6vw,3.5rem)] leading-[1.08] font-extralight tracking-[-0.02em] text-balance">
                  Les millors transformacions no comencen amb una obra. <em>Comencen amb una bona pregunta.</em>
                </h2>
                <figure className="mt-12 md:mt-16">
                  <EditorialImage
                    src={images.method.src}
                    alt={images.method.alt}
                    aspect="aspect-[4/3]"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                  <Caption>{images.method.caption}</Caption>
                </figure>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="border-b border-olive/20">
                {steps.map((step) => (
                  <li
                    key={step.index}
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
              <p className="mt-14 font-serif text-2xl leading-snug font-extralight md:text-3xl">
                Un lloc que no només té alguna cosa a oferir. <em>Un lloc que té una raó per ser visitat.</em>
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="contacte" className="relative isolate overflow-hidden bg-forest text-paper">
          <Image
            src={images.closing.src}
            alt={images.closing.alt}
            fill
            sizes="100vw"
            className="-z-10 object-cover brightness-[.5] saturate-[.65] sepia-[.25]"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-forest via-forest/50 to-forest/10" />

          <div className="mx-auto flex aspect-[3/4] max-w-[1600px] flex-col justify-end px-6 pt-24 pb-12 sm:aspect-[16/9] md:px-[5vw] md:pb-16">
            <Eyebrow>(05) — Parlem</Eyebrow>
            <h2 className="mt-8 max-w-4xl font-serif text-[clamp(2.5rem,6vw,5.75rem)] leading-[1.04] font-extralight tracking-[-0.02em] text-balance">
              Descobrim què pot arribar a ser <em>el teu allotjament.</em>
            </h2>
            <div className="mt-10 flex flex-col gap-8 border-t border-paper/20 pt-8 md:mt-14 md:flex-row md:items-end md:justify-between">
              <p className="max-w-sm text-[17px] leading-relaxed font-light">
                Explica&apos;ns quin és el teu projecte i vindrem a conèixer-lo.
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-6 text-xs tracking-[0.2em] uppercase">
                <Link
                  href="/contacte"
                  className="border-b border-paper/40 pb-1.5 transition-colors duration-500 hover:border-paper"
                >
                  Parlem del projecte →
                </Link>
                <Link
                  href="/diagnostic"
                  className="border-b border-paper/40 pb-1.5 transition-colors duration-500 hover:border-paper"
                >
                  Sol·licitar un diagnòstic →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-forest text-paper">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 border-t border-paper/15 px-6 py-8 text-[11px] tracking-[0.2em] uppercase sm:flex-row sm:justify-between md:px-[5vw]">
          <span>Sojorn Studio</span>
          <span>Estratègia · Espais · Experiències · Marca</span>
          <span>Catalunya</span>
        </div>
      </footer>
    </>
  );
}
