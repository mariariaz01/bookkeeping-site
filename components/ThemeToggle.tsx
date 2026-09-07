"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="rounded-full border border-ink-100 dark:border-ink-400/40 w-9 h-9 flex items-center justify-center text-sm hover:bg-ink-100 dark:hover:bg-ink-400/20 transition-colors"
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
