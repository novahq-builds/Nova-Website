"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

type NavState = "top" | "compressed" | "hidden";

export default function Navbar() {
  const [navState, setNavState] = useState<NavState>("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;

      const whyUsEl = document.getElementById("about");
      const scrollLimit = whyUsEl
        ? whyUsEl.offsetTop + whyUsEl.offsetHeight * 0.35
        : window.innerHeight;

      if (currentY < 10) {
        setNavState("top");
      } else if (currentY > scrollLimit && scrollingDown) {
        setNavState("hidden");
      } else {
        setNavState("compressed");
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false);
    if (menuOpen) window.addEventListener("scroll", close, { once: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  const isCompressed = navState === "compressed";
  const isHidden = navState === "hidden";

  let navClass = styles.nav;
  if (isCompressed) navClass += ` ${styles.compressed}`;
  if (isHidden) navClass += ` ${styles.hidden}`;

  const links = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav className={navClass}>
        <img
          src="/icons/nova-logo.svg"
          alt="Nova"
          className={
            isCompressed
              ? `${styles.logo} ${styles.logoCompressed}`
              : styles.logo
          }
        />

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.navLink}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ""}`}
          />
          <span
            className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ""}`}
          />
          <span
            className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ""}`}
          />
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <ul className={styles.mobileLinks}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
