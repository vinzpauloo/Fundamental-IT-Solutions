import { ButtonLink, Container, Logo } from "@/components/ui";
import { site } from "@/lib/site";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";

const navLinkClassName =
  "relative inline-flex min-h-11 items-center px-3 text-[0.9375rem] font-medium text-muted transition-colors duration-200 hover:text-ink aria-[current=page]:text-ink after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:rounded-full after:bg-gold-500 after:opacity-0 after:transition-opacity aria-[current=page]:after:opacity-100";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo href="/" className="min-h-11" />
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} className={navLinkClassName}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href={site.cta.href} className="hidden lg:inline-flex">
            {site.cta.label}
          </ButtonLink>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
