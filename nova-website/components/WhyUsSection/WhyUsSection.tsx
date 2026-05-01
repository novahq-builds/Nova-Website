"use client";

import { motion } from "framer-motion";
import styles from "./WhyUsSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function WhyUsSection() {
  const tickerItems = ["Design", "Develop", "Deliver", "Repeat"];

  return (
    <section className={styles.section}>
      {/* Main Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.labelRow}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          <span className={styles.square}></span>
          <span className={styles.label}>Why Us</span>
        </motion.div>

        <motion.h2
          className={styles.headingPrimary}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.15}
        >
          We could list a hundred reasons why Nova is the right choice. But
          honestly? Our work does the talking.
        </motion.h2>

        <motion.p
          className={styles.headingSecondary}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
        >
          We started Nova because we were tired of seeing great businesses stuck
          with bad websites, forgettable brands, and software that just barely
          works.
        </motion.p>

        <motion.a
          href="#contact"
          className={styles.contactBtn}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.45}
        >
          <span className={styles.corner} data-pos="tl" />
          <span className={styles.corner} data-pos="tr" />
          Contact Us
          <span className={styles.corner} data-pos="bl" />
          <span className={styles.corner} data-pos="br" />
        </motion.a>
      </div>

      {/* Ticker Bar */}
      <motion.div
        className={styles.ticker}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className={styles.tickerTrack}>
          {[...Array(4)].map((_, repeat) =>
            tickerItems.map((item, i) => (
              <span key={`${repeat}-${i}`} className={styles.tickerItem}>
                {item}
                <span className={styles.tickerDot}></span>
              </span>
            ))
          )}
        </div>
      </motion.div>
    </section>
  );
}
