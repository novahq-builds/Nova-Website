"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ServicesSection.module.css";
import Image from "next/image";

const services = [
  {
    title: "Web & Mobile Design and Development",
    description:
      "From pixel-perfect interfaces to smooth mobile experiences, we build digital products that feel as good as they look. Every line of code, every design decision — made to perform.",
    image: "/images/service-1.png",
  },
  {
    title: "Product Design & Branding",
    description:
      "Great design without strategy is just decoration. We combine sharp visual thinking with brand strategy to create identities that communicate who you are — and why you're the only choice.",
    image: "/images/service-2.png",
  },
  {
    title: "Website Revamp & Modernization",
    description:
      "Your website was built for a different time. If it's slow, outdated, or no longer reflects who you are, it's costing you business. We take what you have and rebuild it into something that performs, converts, and actually represents your brand today.",
    image: "/images/service-3.png",
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "A beautiful website means nothing if nobody finds it. We drive real, measurable growth through SEO strategies, content that ranks, and digital marketing that puts your brand in front of the right people — at the right time.",
    image: "/images/service-4.png",
  },
];

export default function ServicesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !trackRef.current) return;

      const { top, height } = wrapperRef.current.getBoundingClientRect();
      const scrolled = -top;
      const total = height - window.innerHeight;

      if (scrolled <= 0 || total <= 0) {
        setTranslateX(0);
        return;
      }

      const progress = Math.min(scrolled / total, 1);

      // trackRef is on the inner track div; visible area = viewport minus both side paddings (40px each)
      const trackWidth = trackRef.current.scrollWidth;
      const visibleWidth = window.innerWidth - 80;
      const maxTranslate = Math.max(0, trackWidth - visibleWidth);

      setTranslateX(progress * maxTranslate);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.sticky}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.labelRow}>
            <span className={styles.square}></span>
            <span className={styles.label}>Our Services</span>
          </div>
          <p className={styles.tagline}>
            We don't just build websites. We build brands that compete, products
            that scale, and experiences that people remember.
          </p>
        </div>

        {/* Scrolling Cards Track */}
        <div className={styles.trackWrapper}>
          <div
            ref={trackRef}
            className={styles.track}
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {services.map((service, i) => (
              <div key={i} className={styles.card}>
                {/* Image */}
                <div className={styles.imageWrap}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.image}
                    sizes="25vw"
                  />
                </div>

                {/* Text */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
