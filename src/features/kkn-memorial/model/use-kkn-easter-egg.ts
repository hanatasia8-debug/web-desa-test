"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const EVENT_NAME = "kkn-open-memorial";

export function triggerKknMemorial() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  }
}

export function useKknEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);
  const keySequenceRef = useRef<string[]>([]);
  const keyTimerRef = useRef<NodeJS.Timeout | null>(null);

  const open = useCallback(() => {
    setIsOpen(true);
    setClickCount(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Multi-click handler for logo
  const handleLogoClick = useCallback(() => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        open();
        return 0;
      }
      return next;
    });

    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    clickTimerRef.current = setTimeout(() => {
      setClickCount(0);
    }, 2500);
  }, [open]);

  useEffect(() => {
    // 1. Custom event listener
    const handleCustomEvent = () => open();
    window.addEventListener(EVENT_NAME, handleCustomEvent);

    // 2. Keyboard listener ("kkn" or "Shift+K")
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is currently typing in an input/textarea
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      // Check Shift+K
      if (e.shiftKey && (e.key === "K" || e.key === "k")) {
        e.preventDefault();
        open();
        return;
      }

      // Sequence detector for "k-k-n"
      const key = e.key.toLowerCase();
      if (["k", "n"].includes(key)) {
        keySequenceRef.current.push(key);

        if (keyTimerRef.current) {
          clearTimeout(keyTimerRef.current);
        }
        keyTimerRef.current = setTimeout(() => {
          keySequenceRef.current = [];
        }, 2000);

        const sequenceStr = keySequenceRef.current.join("");
        if (sequenceStr.endsWith("kkn")) {
          keySequenceRef.current = [];
          open();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(EVENT_NAME, handleCustomEvent);
      window.removeEventListener("keydown", handleKeyDown);
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
      if (keyTimerRef.current) clearTimeout(keyTimerRef.current);
    };
  }, [open]);

  return {
    isOpen,
    open,
    close,
    clickCount,
    handleLogoClick,
  };
}
