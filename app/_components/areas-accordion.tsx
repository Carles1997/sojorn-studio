"use client";

import { useId, useState } from "react";
import type { Area } from "../_content";

// One area open at a time. The panel grows with a grid-rows transition and its
// content fades in just after, so text never appears before there is room for it.
// Closing is quicker than opening.
export function AreasAccordion({ areas }: { areas: Area[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="border-b border-olive/20">
      {areas.map((area, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${baseId}-button-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        const grouped = area.groups.length > 1;

        return (
          <div key={area.index} data-reveal className="border-t border-olive/20">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="grid w-full grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-4 py-7 text-left focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-olive md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-x-8 md:py-9"
              >
                <span className="text-[11px] tracking-[0.2em]">{area.index}</span>
                <span className="font-serif text-2xl font-light md:text-4xl">{area.title}</span>
                <span className="hidden font-serif text-xl font-light italic md:block">{area.headline}</span>
                <span aria-hidden className="relative size-4 self-center">
                  <span className="absolute inset-x-0 top-1/2 h-px bg-current" />
                  <span
                    className={`absolute inset-y-0 left-1/2 w-px bg-current transition-[rotate] duration-300 ease-editorial motion-reduce:transition-none ${isOpen ? "rotate-90" : ""}`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] ease-editorial motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] duration-500" : "grid-rows-[0fr] duration-300"}`}
            >
              <div className="overflow-hidden">
                <div
                  className={`grid gap-10 pb-12 transition-[opacity,translate] ease-editorial motion-reduce:translate-y-0 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)] md:gap-x-8 md:pb-16 ${isOpen ? "translate-y-0 opacity-100 delay-100 duration-500" : "-translate-y-2 opacity-0 duration-200"}`}
                >
                  <div className="md:col-start-2">
                    <p className="font-serif text-xl font-light italic md:hidden">{area.headline}</p>
                    <div className="mt-5 space-y-4 md:mt-0">
                      {area.body.map((paragraph) => (
                        <p key={paragraph} className="max-w-md text-[17px] leading-relaxed font-light">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {area.note && (
                      <div className="mt-10 border-l border-olive/30 pl-6">
                        <p className="font-serif text-xl font-light italic">{area.note.title}</p>
                        <p className="mt-2 max-w-sm text-[15px] leading-relaxed font-light">{area.note.text}</p>
                      </div>
                    )}
                  </div>

                  <div className={grouped ? "grid gap-x-8 gap-y-10 sm:grid-cols-2" : ""}>
                    {area.groups.map((group) => (
                      <div key={group.label}>
                        <p className="text-[11px] tracking-[0.2em] uppercase">{group.label}</p>
                        <ul
                          className={`mt-4 text-[15px] leading-relaxed font-light ${grouped ? "" : "sm:columns-2 sm:gap-x-8"}`}
                        >
                          {group.items.map((item) => (
                            <li key={item} className="break-inside-avoid py-0.5">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
