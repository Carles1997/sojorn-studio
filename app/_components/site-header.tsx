"use client";

import { useEffect, useId, useState } from "react";
import { navigation } from "../_content";
import { ButtonLink } from "./ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-olive/20 bg-paper">
      <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between gap-6 px-6 md:px-[5vw]">
        <a href="#inici" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-light tracking-[0.18em] uppercase">Sojorn</span>
          <span className="hidden text-[11px] tracking-[0.2em] uppercase sm:inline">Studio</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 text-[11px] tracking-[0.2em] uppercase lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-[scale] after:duration-300 after:ease-editorial hover:after:scale-x-100 hover:after:duration-700 motion-reduce:after:transition-none"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#formulari"
            data-interest="discover"
            className="whitespace-nowrap transition-opacity duration-300 hover:opacity-60"
          >
            [ Diagnòstic ]
          </a>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
          className="py-2 text-[11px] tracking-[0.2em] uppercase transition-transform duration-150 ease-out active:scale-[0.97] lg:hidden"
        >
          {open ? "Tancar" : "Menú"}
        </button>
      </div>

      <div
        id={menuId}
        inert={!open}
        data-open={open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper px-6 pb-10 transition-[opacity,translate] duration-200 ease-editorial data-[open=false]:pointer-events-none data-[open=false]:-translate-y-2 data-[open=false]:opacity-0 data-[open=true]:duration-300 md:px-[5vw] lg:hidden motion-reduce:translate-y-0"
      >
        <ul>
          {navigation.map((item, i) => (
            <li
              key={item.href}
              style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
              className={`border-b border-olive/20 transition-[opacity,translate] duration-300 ease-editorial motion-reduce:translate-y-0 ${open ? "opacity-100" : "-translate-y-1 opacity-0"}`}
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-5 font-serif text-3xl font-light"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ButtonLink href="#formulari" data-interest="discover" onClick={() => setOpen(false)} className="mt-8">
          Sol·licitar un diagnòstic
        </ButtonLink>
      </div>
    </header>
  );
}
