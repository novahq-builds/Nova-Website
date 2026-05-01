"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  return (
    <section className={styles.section}>
      {/* Background — continuously fading */}
      <div className={styles.bgWrapper}>
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right-side tagline + CTA */}
      <div className={styles.tagline}>
        <motion.p
          className={styles.taglineText}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <em>Digital solutions studio</em> built for brands that want to
          stand&nbsp;out, scale&nbsp;up, and ship&nbsp;fast.
        </motion.p>

        <motion.div
          className={styles.ctaWrapper}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          <a href="#contact" className={styles.ctaButton}>
            <span className={styles.cornerTL} />
            <span className={styles.cornerTR} />
            <span className={styles.cornerBL} />
            <span className={styles.cornerBR} />
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Large wordmark */}
      <motion.div
        className={styles.wordmarkWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      >
        <img
          src="/icons/nova-wordmark.svg"
          alt="iNOVA"
          className={styles.wordmark}
        />
      </motion.div>
    </section>
  );
}
