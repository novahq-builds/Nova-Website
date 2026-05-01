"use client";

import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function AboutSection() {
  return (
    <section className={styles.container}>
      {/* Top Left - Label */}
      <motion.div
        className={styles.labelRow}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        custom={0}
      >
        <span className={styles.square}></span>
        <span className={styles.label}>About Us</span>
      </motion.div>

      {/* Left Paragraph */}
      <motion.p
        className={styles.leftText}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.15}
      >
        From the ground up, we&apos;ve been{" "}
        <strong>crafting digital experiences</strong> that don&apos;t just look
        good, they perform, convert, and last. Whether you&apos;re launching a
        new brand, rebuilding an outdated website, or bringing a{" "}
        <strong>product idea to life,</strong> we bring the strategy, design,
        and engineering to make it happen.
      </motion.p>

      {/* Bottom Right Statement */}
      <motion.p
        className={styles.rightText}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.3}
      >
        We don&apos;t just build websites. We build brands that compete,
        products that scale, and experiences that people remember.
      </motion.p>
    </section>
  );
}
