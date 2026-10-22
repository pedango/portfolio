"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/data/personal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Container } from "@/components/ui/container";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Stack", id: "skills" },
  { href: "#projects", label: "Work", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#github", label: "Code", id: "github" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMobileOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
        return;
      }

      if (event.key !== "Tab" || !sheetRef.current) return;

      const focusable = sheetRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-[border-color,background-color] duration-150",
        "bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] backdrop-blur-md",
        isScrolled ? "border-b border-border" : "border-b border-transparent"
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="inline-flex min-w-0 max-w-[58%] items-center gap-2 text-sm font-semibold tracking-tight text-fg sm:max-w-none sm:text-base"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="truncate">{personalInfo.name}</span>
          </Link>

          <div className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative rounded-[8px] px-2.5 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg xl:px-3",
                    isActive && "text-fg"
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <span
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent"
                      style={{ bottom: "-6px" }}
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              );
            })}
            <Button asChild variant="outline" size="sm" className="ml-2">
              <a href={personalInfo.cvPath} download>
                Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileOpen}
              aria-controls={menuId}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </Container>

      {isMobileOpen ? (
        <div
          id={menuId}
          ref={sheetRef}
          className="fixed inset-0 z-50 bg-bg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-16 items-center justify-between border-b border-border px-5 sm:px-6">
            <span className="inline-flex min-w-0 items-center gap-2 pr-3 text-sm font-semibold sm:text-base">
              <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              <span className="truncate">{personalInfo.name}</span>
            </span>
            <Button
              ref={closeButtonRef}
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col gap-1 px-5 py-5 sm:px-6 sm:py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-[8px] px-4 py-3 text-base font-medium text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="outline" className="mt-3 w-full">
              <a
                href={personalInfo.cvPath}
                download
                onClick={() => setIsMobileOpen(false)}
              >
                Resume
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
