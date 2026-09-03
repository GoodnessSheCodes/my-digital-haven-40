export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-ink/10 px-5 py-6 sm:flex-row">
        <span className="font-display font-semibold text-ink">Goodness Mbali Mazibuko</span>
        <span className="text-sm text-ink/50">© {new Date().getFullYear()} · Built with care</span>
      </div>
    </footer>
  );
}
