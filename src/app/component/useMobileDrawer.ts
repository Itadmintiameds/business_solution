import { useEffect, useRef, useState } from "react";

// Shared mobile drawer behaviour for the two navbars: outside tap / Esc close it, focus moves into it
// and back to the toggle, Tab stays inside, and it closes when the viewport grows to desktop width.
export function useMobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const close = (returnFocus: boolean) => {
      setIsOpen(false);
      if (returnFocus) toggleRef.current?.focus();
    };
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      close(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close(true);
        return;
      }
      if (event.key !== "Tab" || !menuRef.current || !toggleRef.current) return;
      const focusables = [toggleRef.current, ...Array.from(menuRef.current.querySelectorAll<HTMLElement>("a"))];
      const index = focusables.indexOf(document.activeElement as HTMLElement);
      const next = event.shiftKey
        ? (index <= 0 ? focusables.length - 1 : index - 1)
        : (index === focusables.length - 1 ? 0 : index + 1);
      event.preventDefault();
      focusables[next].focus();
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    const focusTimer = window.setTimeout(() => menuRef.current?.querySelector<HTMLElement>("a")?.focus(), 60); // after the drawer becomes visible

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen]);

  return { isOpen, setIsOpen, menuRef, toggleRef };
}
