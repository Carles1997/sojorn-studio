import { PageTransition, TextLink, container, display, enter, eyebrow } from "./_components/ui";

export default function NotFound() {
  return (
    <PageTransition>
      <main className="bg-paper">
        <div className={`${container} flex min-h-[70dvh] flex-col justify-center py-28`}>
          <p className={`${enter} ${eyebrow}`}>Error 404</p>
          <h1 className={`${enter} ${display} mt-8 max-w-4xl pb-2 text-[clamp(2.75rem,6vw,6rem)] leading-[1.05] delay-100`}>
            Aquest lloc encara <em>no existeix.</em>
          </h1>
          <div className={`${enter} mt-12 delay-200`}>
            <TextLink href="/">Tornar a l’inici</TextLink>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
