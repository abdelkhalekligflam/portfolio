"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const next = saved === "light" || saved === "dark" ? saved : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }, []);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
    setTheme(next);
  }
  return (
    <button type="button" onClick={toggle} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Light mode" : "Dark mode"} className="theme-switch inline-flex h-10 items-center gap-2 rounded-full border px-3 text-sm font-medium transition hover:-translate-y-0.5">
      {theme === "dark" ? <><span aria-hidden="true">☀</span><span className="hidden sm:inline">Light</span></> : <><span aria-hidden="true">☾</span><span className="hidden sm:inline">Dark</span></>}
    </button>
  );
}
