import Image from "next/image";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      {/* Background */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />

      {/* Navbar */}
      <nav className={styles.nav}>
        <img src="/icons/nova-logo.svg" alt="Nova" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li><a href="#services" className={styles.navLink}>Services</a></li>
          <li><a href="#why-us"   className={styles.navLink}>Why Us</a></li>
          <li><a href="#about"    className={styles.navLink}>About Us</a></li>
          <li><a href="#contact"  className={styles.navLink}>Contact Us</a></li>
        </ul>
      </nav>

      {/* Right-side tagline + CTA */}
      <div className={styles.tagline}>
        <p className={styles.taglineText}>
          <em>Digital solutions studio</em>{" "}
          built for brands that want to stand&nbsp;out, scale&nbsp;up, and ship&nbsp;fast.
        </p>
        <div className={styles.ctaWrapper}>
          <a href="#contact" className={styles.ctaButton}>
            <span className={styles.cornerTL} />
            <span className={styles.cornerTR} />
            <span className={styles.cornerBL} />
            <span className={styles.cornerBR} />
            Contact Us
          </a>
        </div>
      </div>

      {/* Large wordmark — bottom-left, partially clipped */}
      <div className={styles.wordmarkWrapper}>
        <img src="/icons/nova-wordmark.svg" alt="iNOVA" className={styles.wordmark} />
      </div>
    </section>
  );
}
