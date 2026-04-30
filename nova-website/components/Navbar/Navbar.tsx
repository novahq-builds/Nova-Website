"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  // Three distinct display states:
  //  - 'hero'       → full navbar, no background (over the dark hero)
  //  - 'compressed' → visible with dark bg + reduced padding (scrolled up while past hero)
  //  - 'hidden'     → off-screen (scrolled down while past hero)
  const [navState, setNavState] = useState<"hero" | "compressed" | "hidden">(
    "hero"
  );

  const lastScrollY = useRef(0);

  useEffect(() => {
    // Hero section is exactly 100vh; trigger slightly before the bottom
    const heroThreshold = () => window.innerHeight * 0.85;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const pastHero = currentY > heroThreshold();
      const scrollingDown = currentY > lastScrollY.current;

      if (!pastHero) {
        // Still inside hero → show full transparent nav
        setNavState("hero");
      } else if (scrollingDown) {
        // Past hero, scrolling down → hide entirely
        setNavState("hidden");
      } else {
        // Past hero, scrolling up → show compressed with backdrop
        setNavState("compressed");
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHidden = navState === "hidden";
  const isCompressed = navState === "compressed";

  return (
    <nav
      className={[
        styles.nav,
        isHidden ? styles.hidden : "",
        isCompressed ? styles.compressed : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img
        src="/icons/nova-logo.svg"
        alt="Nova"
        className={`${styles.logo} ${
          isCompressed ? styles.logoCompressed : ""
        }`}
      />

      <ul className={styles.navLinks}>
        <li>
          <a href="#services" className={styles.navLink}>
            Services
          </a>
        </li>
        <li>
          <a href="#why-us" className={styles.navLink}>
            Why Us
          </a>
        </li>
        <li>
          <a href="#about" className={styles.navLink}>
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" className={styles.navLink}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
