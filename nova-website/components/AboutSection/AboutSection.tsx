"use client";

import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";
import Image from "next/image";

const pillars = [
  { icon: "/icons/perfomance.svg", label: "Built for Performance" },
  { icon: "/icons/design.svg", label: "Designed with Purpose" },
  { icon: "/icons/deliver.svg", label: "Delivered with Care" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function AboutSection() {
  return (
    <section className={styles.section}>
      {/* Label */}
      <motion.div
        className={styles.labelRow}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0}
      >
        <span className={styles.square}></span>
        <span className={styles.label}>About Us</span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className={styles.heading}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.1}
      >
        We don&apos;t just build websites. We build brands that compete,
        products that scale, and experiences that people remember.
      </motion.h2>

      {/* Body */}
      <motion.p
        className={styles.body}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        custom={0.2}
      >
        We are a team of designers, developers, and strategists who genuinely
        care about the work we put out. Every project is a chance to do
        something great and we don&apos;t take that lightly. We obsess over the
        details. The spacing, the speed, the user flow, the brand voice. Because
        the difference between good and unforgettable lives in the details. That
        obsession goes beyond aesthetics. Before a single pixel is placed or a
        line of code is written, we think deeply about your users, your
        business, and your goals. Strategy first. Everything else follows.
        We&apos;ve worked with startups, growing businesses, and established
        brands and each one made us better. Because your success is the only
        portfolio that matters to us.
      </motion.p>

      {/* Pillars */}
      <div className={styles.pillars}>
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            className={styles.pillar}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0.3 + i * 0.12}
          >
            <div className={styles.iconWrap}>
              <Image
                src={pillar.icon}
                alt={pillar.label}
                width={36}
                height={36}
              />
            </div>
            <p className={styles.pillarLabel}>{pillar.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
