'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "team", label: "Our Team" },
  { id: "projects", label: "Our Partners" },
  // { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let foundActive = "";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offset = section.offsetTop - 120;
          if (scrollPosition >= offset) {
            foundActive = link.id;
          }
        }
      });
      setActiveSection(foundActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile drawer: outside tap / Esc close it, focus moves into it and back to the toggle, Tab stays inside
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
      return;
    }

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
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => menuRef.current?.querySelector<HTMLElement>("a")?.focus(), 60); // after the drawer becomes visible

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="bg-white text-orange-600 sticky top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-3 px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 min-w-0">
          <Link href={"/"} className="flex-shrink-0">
            <Image
              src="/SBPL.png"
              alt="SBPL Logo"
              width={100}
              height={86}
              className="rounded-full z-10 w-16 sm:w-[100px] h-auto"
              priority={true}
            />
          </Link>
          <Link
            href={"/"}
            className="py-3 text-sm sm:text-xl font-bold text-orange-600 tracking-wide"
          >
            Sudhanand Business Solutions
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden lg:flex space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? "location" : undefined}
              className={`text-base font-medium transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-orange-800 border-b-2 border-orange-800"
                  : "text-orange-600 hover:text-orange-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/careers" passHref>
            <p className="text-base font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
              Careers
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-base font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300">
              Who We Are
            </p>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex-shrink-0">
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 -m-2.5 text-orange-600 hover:text-orange-800"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (drops down right under the header) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`absolute lg:hidden top-full left-0 w-full bg-white shadow-md px-6 pb-6 pt-2 transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 100%)", overflowY: "auto" }}
      >
        <nav aria-label="Mobile" className="flex flex-col space-y-1 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              aria-current={activeSection === link.id ? "location" : undefined}
              className={`block text-base sm:text-lg font-medium transition-colors duration-300 py-3 ${
                activeSection === link.id ? "text-orange-800" : "text-orange-600 hover:text-orange-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/careers"
            className="block text-base sm:text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300 py-3"
            onClick={() => setIsOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="/about"
            className="block text-base sm:text-lg font-medium text-orange-600 hover:text-orange-800 transition-colors duration-300 py-3"
            onClick={() => setIsOpen(false)}
          >
            Who We Are
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
