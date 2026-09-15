import Link from "next/link";
import { CONTACT_EMAIL, navigation } from "../_content";
import { Reveal } from "./motion";
import { TextLink, container, display } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/15 bg-forest text-paper">
      <div className={`${container} pt-24 pb-10 md:pt-32`}>
        <Reveal as="p" className={`${display} max-w-5xl pb-1 text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.06]`}>
          Fem aflorar el potencial dels <em>allotjaments amb encant de Catalunya.</em>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-paper/15 pt-12 md:mt-28 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-serif text-3xl font-light tracking-[0.18em] uppercase">Sojorn</p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed font-light text-paper/80">
              Consultoria de transformació per a allotjaments amb encant.
            </p>
          </div>

          <nav aria-label="Peu de pàgina" className="md:col-span-3 md:col-start-6">
            <ul className="flex flex-col gap-4 text-[11px] tracking-[0.2em] uppercase">
              {[{ href: "/", label: "Inici" }, ...navigation].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-opacity duration-300 hover:opacity-60">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start md:col-span-3 md:col-start-10">
            <p className="text-[15px] leading-relaxed font-light text-paper/80">Estratègia, espais, experiències i marca.</p>
            {CONTACT_EMAIL && (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 text-[15px] font-light underline decoration-paper/30 underline-offset-4 transition-[text-decoration-color] duration-300 hover:decoration-paper"
              >
                {CONTACT_EMAIL}
              </a>
            )}
            <TextLink href="/diagnostic" className="mt-8">
              Sol·licitar un diagnòstic
            </TextLink>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/15 pt-6 text-xs font-light text-paper/70 sm:flex-row sm:justify-between">
          <span>Sojorn Studio</span>
          <span>Allotjaments amb encant de Catalunya</span>
        </div>
      </div>
    </footer>
  );
}
