"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};
export default function HeroSection() {
  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.bgWrapper}>
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* NOVA wordmark — fades in first, slowly */}
      <motion.div
        className={styles.wordmarkWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0 }}
      >
        <img
          src="/icons/nova-wordmark.svg"
          alt="iNOVA"
          className={styles.wordmark}
        />
      </motion.div>

      {/* Tagline + CTA — come in during the wordmark fade */}
      <div className={styles.tagline}>
        <motion.p
          className={styles.taglineText}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          <em>Digital solutions studio </em> built for brands that want to
          stand&nbsp;out, scale&nbsp;up, and ship&nbsp;fast.
        </motion.p>

        <motion.div
          className={styles.ctaWrapper}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <a href="#contact" className={styles.ctaButton}>
            <span className={styles.cornerTL} />
            <span className={styles.cornerTR} />
            <span className={styles.cornerBL} />
            <span className={styles.cornerBR} />
            <span className={styles.ctaText}>
              <span className={styles.ctaTextInner}>
                <span className={styles.ctaTextTop}>Contact Us</span>
                <span className={styles.ctaTextBottom}>Contact Us</span>
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
