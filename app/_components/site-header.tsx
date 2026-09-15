"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useState } from "react";
import { navigation } from "../_content";
import { EASE_OUT, SPRING } from "./motion";

const mobileLinks = [{ href: "/", label: "Inici" }, ...navigation, { href: "/diagnostic", label: "Diagnòstic" }];

export function SiteHeader() {
  const pathname = usePathname();
  // The menu remembers which page it was opened on, so any navigation closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const menuId = useId();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header style={{ viewTransitionName: "site-header" }} className="sticky top-0 z-30 border-b border-olive/20 bg-paper">
      <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between gap-6 px-6 md:px-[5vw]">
        <Link href="/" className="flex items-baseline gap-3" onClick={() => setOpenOn(null)}>
          <span className="font-serif text-2xl font-light tracking-[0.18em] uppercase">Sojorn</span>
          <span className="hidden text-[11px] tracking-[0.2em] uppercase sm:inline">Studio</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-10 text-[11px] tracking-[0.2em] uppercase lg:flex">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="relative py-2 transition-opacity duration-300 hover:opacity-60"
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    transition={SPRING}
                    className="absolute inset-x-0 bottom-0 h-px bg-current"
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/diagnostic"
            aria-current={isActive("/diagnostic") ? "page" : undefined}
            className="border border-olive px-4 py-2.5 transition-[background-color,color] duration-300 ease-out hover:bg-olive hover:text-paper aria-[current=page]:bg-olive aria-[current=page]:text-paper"
          >
            Diagnòstic
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpenOn(open ? null : pathname)}
          className="py-2 text-[11px] tracking-[0.2em] uppercase transition-transform duration-150 ease-out active:scale-[0.97] lg:hidden"
        >
          {open ? "Tancar" : "Menú"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            key="menu"
            initial={{ opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)", transition: { duration: 0.3, ease: EASE_OUT } }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain bg-paper px-6 pb-12 md:px-[5vw] lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="shown"
              variants={{ shown: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
            >
              {mobileLinks.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, transform: "translateY(8px)" },
                    shown: { opacity: 1, transform: "translateY(0px)", transition: { duration: 0.4, ease: EASE_OUT } },
                  }}
                  className="border-b border-olive/20"
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setOpenOn(null)}
                    className="block py-5 font-serif text-4xl font-light aria-[current=page]:italic"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
