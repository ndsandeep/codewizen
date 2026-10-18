import { useEffect, useRef } from "react";

/**
 * useScrollAnimation
 * Observes animated elements and adds "visible" class on scroll entry.
 * Supports: [data-animate], [data-animate-left], [data-animate-right], [data-animate-scale]
 */
export function useScrollAnimation(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const selectors = [
      "[data-animate]",
      "[data-animate-left]",
      "[data-animate-right]",
      "[data-animate-scale]",
    ];

    const elements = container.querySelectorAll(selectors.join(", "));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
