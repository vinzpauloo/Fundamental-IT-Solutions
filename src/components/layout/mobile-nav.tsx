"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { ButtonLink, Container, Logo } from "@/components/ui";
import { site } from "@/lib/site";
import { NavLink } from "./nav-link";

const dialogId = "site-menu";

const sheetStyles = `
html:has(dialog[open]) {
  overflow: hidden;
}
`;

export function MobileNav() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    const dialog = dialogRef.current;

    if (dialog === null || dialog.open) {
      return;
    }

    dialog.showModal();
    setIsOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <>
      <style>{sheetStyles}</style>
      <button
        type="button"
        aria-controls={dialogId}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={openMenu}
        className="inline-flex size-11 items-center justify-center rounded-full text-ink ring-1 ring-line transition-colors duration-200 hover:bg-ink/5 lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
        <span className="sr-only">Menu</span>
      </button>
      <dialog
        id={dialogId}
        ref={dialogRef}
        aria-label="Site menu"
        onClose={() => setIsOpen(false)}
        className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-forest-950 p-0 text-paper backdrop:bg-forest-950 transition-[opacity,translate] duration-300 ease-out starting:open:translate-y-4 starting:open:opacity-0 motion-reduce:transition-none"
      >
        <Container className="flex min-h-dvh flex-col">
          <div className="flex h-18 items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              className="inline-flex min-h-11 items-center rounded-md"
            >
              <Logo tone="dark" />
            </Link>
            <form method="dialog">
              <button
                type="submit"
                className="inline-flex size-11 items-center justify-center rounded-full text-paper ring-1 ring-paper/20 transition-colors duration-200 hover:bg-paper/10 focus-visible:outline-gold-300"
              >
                <X aria-hidden="true" className="size-5" />
                <span className="sr-only">Close menu</span>
              </button>
            </form>
          </div>
          <nav aria-label="Mobile navigation" className="mt-6">
            <ul className="border-b border-paper/10">
              {site.nav.map((item) => (
                <li key={item.href} className="border-t border-paper/10">
                  <NavLink
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-16 items-center text-display-md text-paper transition-colors duration-200 hover:text-gold-300 focus-visible:outline-gold-300 aria-[current=page]:text-gold-300"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex flex-col items-start gap-6 pt-12 pb-8">
            <ButtonLink
              href={site.cta.href}
              variant="on-dark"
              size="lg"
              onClick={closeMenu}
              className="w-full"
            >
              {site.cta.label}
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center text-[0.9375rem] text-forest-200 transition-colors duration-200 hover:text-paper focus-visible:outline-gold-300"
            >
              {site.email}
            </a>
          </div>
        </Container>
      </dialog>
    </>
  );
}
