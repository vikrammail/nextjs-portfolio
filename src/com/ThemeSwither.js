"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MoonIcon, { SunIcon } from "./Icon";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme == "light" ? (
        <button onClick={() => setTheme("dark")}>
          <MoonIcon/>
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <SunIcon/>
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
