"use client";

import { useEffect } from "react";

/**
 * Activates the `.scroll-reveal` animation defined in `globals.css`.
 *
 * The CSS starts those elements at `opacity: 0` and only reveals them once
 * `.visible` is added — in the prototype that class comes from a global
 * `IntersectionObserver` script in every `code.html`. This is the React port
 * of that script: mounted once in the public layout, it observes every
 * `.scroll-reveal` element currently in the DOM *and* any added later, which
 * matters because server-rendered sections stream in after a Suspense
 * boundary resolves (the /berita grid) and after client-side navigation.
 *
 * Without this, every element carrying `scroll-reveal` stays invisible.
 */
export function ScrollRevealProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    const observeWithin = (root: ParentNode) => {
      root
        .querySelectorAll(".scroll-reveal:not(.visible)")
        .forEach((el) => observer.observe(el));
    };

    observeWithin(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.classList.contains("scroll-reveal")) observer.observe(node);
          observeWithin(node);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
