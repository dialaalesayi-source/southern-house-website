"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LanguageToggle from "./LanguageToggle";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu overlay is open, move focus into
  // the dialog, close on Escape, and return focus to the trigger on close.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    if (menuOpen) {
      closeButtonRef.current?.focus();

      function onKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") setMenuOpen(false);
      }
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = "";
      };
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/brands`, label: dict.nav.brands },
    { href: `/${locale}/fun-place`, label: dict.nav.funplace },
    { href: `/${locale}/balloons`, label: dict.nav.balloons },
    { href: `/${locale}/toys`, label: dict.nav.toys },
    { href: `/${locale}/gallery`, label: dict.nav.gallery },
    { href: `/${locale}/branches`, label: dict.nav.branches },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-southern-navy py-2 text-white md:block">
        <Container className="flex items-center justify-between">
          <LanguageToggle currentLocale={locale} variant="topbar" />
          <div className="flex items-center gap-4 text-xs font-medium">
            <a href="tel:+966504479295" className="hover:opacity-80">
              {dict.topbar.phone}
            </a>
            <a
              href="https://wa.me/966504479295"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              {dict.topbar.whatsapp}
            </a>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
          scrolled ? "border-black/5 bg-white shadow-card" : "border-transparent bg-white"
        }`}
      >
        <Container className="flex h-[72px] items-center justify-between md:h-22">
          <Link href={`/${locale}`} className="flex items-center gap-2" aria-label="Southern House — home">
            <Image
              src="/images/images/logos/south-house-logo.png"
              alt="Southern House Logo"
              width={36}
              height={36}
              className="rounded-md"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-semibold text-southern-navy">
              {locale === "ar" ? "بيت الجنوب" : "Southern House"}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-southern-charcoal transition-colors hover:text-funplace-coral"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={`/${locale}/fun-place`} variant="funplace-primary" size="md">
              {dict.nav.cta}
            </Button>
          </div>

          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setMenuOpen(true)}
            className="rounded-md p-2 lg:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] bg-white lg:hidden"
        >
          <Container className="flex h-[72px] items-center justify-between border-b border-black/5">
            <span className="font-display text-lg font-semibold text-southern-navy">
              {locale === "ar" ? "بيت الجنوب" : "Southern House"}
            </span>
            <button
              type="button"
              ref={closeButtonRef}
              onClick={closeMenu}
              className="rounded-md p-2"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="#2D2D2D" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </Container>
          <Container className="flex flex-col gap-6 py-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-semibold text-southern-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <LanguageToggle currentLocale={locale} variant="menu" />
            </div>
            <Button href={`/${locale}/fun-place`} variant="funplace-primary" size="lg" className="mt-4 w-full">
              {dict.nav.cta}
            </Button>
          </Container>
        </div>
      )}
    </>
  );
}
