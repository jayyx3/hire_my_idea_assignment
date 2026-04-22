"use client";

import { useEffect } from "react";

export default function StripAnimator() {
  useEffect(() => {
    const tiles = Array.from(
      document.querySelectorAll<HTMLElement>(".strip-track .ptile")
    );

    if (tiles.length === 0) {
      return;
    }

    const half = tiles.length / 2;
    let idx = 4;

    const interval = window.setInterval(() => {
      tiles.forEach((tile) => tile.classList.remove("hi"));
      const primary = tiles[idx];
      const mirror = tiles[idx + half];
      if (primary) {
        primary.classList.add("hi");
      }
      if (mirror) {
        mirror.classList.add("hi");
      }
      idx = (idx + 1) % half;
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return null;
}
