"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

type NavState = "top" | "compressed" | "hidden";

export default function Navbar() {
  const [navState, setNavState] = useState<NavState>("top");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight;
      const scrollingDown = currentY > lastScrollY.current;

      if (currentY < 10) {
        setNavState("top");
      } else if (currentY > heroHeight && scrollingDown) {
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

  const isCompressed = navState === "compressed";
  const isHidden = navState === "hidden";

  let navClass = styles.nav;
  if (isCompressed) navClass += ` ${styles.compressed}`;
  if (isHidden) navClass += ` ${styles.hidden}`;

  return (
    <nav className={navClass}>
      <img
        src="/icons/nova-logo.svg"
        alt="Nova"
        className={
          isCompressed ? `${styles.logo} ${styles.logoCompressed}` : styles.logo
        }
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
