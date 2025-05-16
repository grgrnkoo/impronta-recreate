import { useState, useEffect } from "react";

export function useViewportHeight() {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    // Skip if window is undefined (SSR)
    if (typeof window === "undefined") return;

    const handleResize = () => setVh(window.innerHeight);

    // Set initial value
    handleResize();

    // Attach listener
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return vh;
}