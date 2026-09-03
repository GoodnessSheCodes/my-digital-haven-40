import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", id: "home" },
  { to: "/skills", label: "Skills", id: "skills" },
  { to: "/projects", label: "Projects", id: "projects" },
  { to: "/education", label: "Education", id: "education" },
  { to: "/certifications", label: "Certifications", id: "certifications" },
  { to: "/experience", label: "Experience", id: "experience" },
  { to: "/contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="font-display text-xl font-bold tracking-tight text-ink">
          Mbali<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              activeProps={{
                className:
                  "rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-ink shadow-sm ring-1 ring-ink/5",
              }}
              inactiveProps={{
                className:
                  "rounded-full px-3.5 py-2 text-sm font-semibold text-ink/70 transition hover:bg-white/70 hover:text-ink",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/mbali-mazibuko-cv.pdf"
            download
            className="hidden items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white ring-2 ring-brand/30 transition hover:bg-brand/90 sm:inline-flex"
          >
            Download CV
          </a>
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] rounded-xl bg-white ring-1 ring-ink/10 md:hidden"
          >
            <span className="block h-[2px] w-4 rounded-full bg-ink" />
            <span className="block h-[2px] w-4 rounded-full bg-ink" />
            <span className="block h-[2px] w-3 rounded-full bg-ink" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-ink/10 bg-cream px-5 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                activeProps={{
                  className:
                    "rounded-xl bg-white px-4 py-3 text-sm font-semibold text-ink ring-1 ring-ink/5",
                }}
                inactiveProps={{
                  className:
                    "rounded-xl px-4 py-3 text-sm font-semibold text-ink/70 transition hover:bg-white/70 hover:text-ink",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/mbali-mazibuko-cv.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white ring-2 ring-brand/30"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
