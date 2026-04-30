"use client";

import { useEffect, useRef } from "react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    number: "01",
    title: "Web & Mobile Design and Development",
    description:
      "We design and develop web and mobile experiences that look stunning and work flawlessly — from pixel-perfect interfaces to rock-solid architecture.",
  },
  {
    number: "02",
    title: "Brand Identity & Strategy",
    description:
      "We craft identities that communicate who you are and why it matters — across every touchpoint, from logo to language to launch.",
  },
  {
    number: "03",
    title: "Product Design & UX",
    description:
      "From wireframes to final UI, we design products that are intuitive, beautiful, and built to convert. Great UX is invisible — bad UX isn't.",
  },
  {
    number: "04",
    title: "SEO & Digital Marketing",
    description:
      "We grow your visibility and drive real results through data-driven strategies — organic search, paid campaigns, and everything in between.",
  },
];

const SCROLL_PER_PANEL_VH = 1.5;
const SNAP_DURATION_MS = 520;
const SNAP_IDLE_MS = 150;

export default function ServicesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const fillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const displayProgressRef = useRef(0);

  useEffect(() => {
    const applyProgress = (p: number) => {
      cardRefs.current.forEach((el, i) => {
        if (el) el.style.transform = "translateX(" + (i - p) * 100 + "%)";
      });
      fillRefs.current.forEach((el, i) => {
        if (el) {
          // segment i is full when p >= i+1, empty when p <= i
          const fill = Math.min(Math.max(p - i + 1, 0), 1);
          el.style.transform = "scaleX(" + fill + ")";
        }
      });
    };

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const snapToNearest = () => {
      const start = displayProgressRef.current;
      const target = Math.round(start);
      if (Math.abs(start - target) < 0.001) return;
      const startTime = performance.now();
      const animate = (now: number) => {
        const t = Math.min((now - startTime) / SNAP_DURATION_MS, 1);
        const value = start + (target - start) * easeOut(t);
        displayProgressRef.current = value;
        applyProgress(value);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (scrollTimerRef.current !== null) clearTimeout(scrollTimerRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!wrapperRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        const scrolled = -rect.top;
        const scrollPerPanel = window.innerHeight * SCROLL_PER_PANEL_VH;
        const progress = Math.min(
          Math.max(scrolled / scrollPerPanel, 0),
          services.length - 1
        );
        displayProgressRef.current = progress;
        applyProgress(progress);
        scrollTimerRef.current = setTimeout(snapToNearest, SNAP_IDLE_MS);
      });
    };

    applyProgress(0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (scrollTimerRef.current !== null) clearTimeout(scrollTimerRef.current);
    };
  }, []);

  const wrapperHeight =
    (services.length - 1) * SCROLL_PER_PANEL_VH * 100 + 100 + "vh";

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ height: wrapperHeight }}
    >
      <div className={styles.sticky}>
        <div className={styles.topBar}>
          <div className={styles.labelRow}>
            <span className={styles.square} />
            <span className={styles.label}>Our Services</span>
          </div>
        </div>

        <div className={styles.cardsViewport}>
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={styles.card}
              style={{ transform: "translateX(" + i * 100 + "%)" }}
            >
              <span className={styles.watermark}>{service.number}</span>
              <div className={styles.cardContent}>
                <span className={styles.numberLabel}>{service.number}</span>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          {services.map((_, i) => (
            <div key={i} className={styles.progressSegment}>
              <div
                ref={(el) => {
                  fillRefs.current[i] = el;
                }}
                className={styles.progressFill}
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
