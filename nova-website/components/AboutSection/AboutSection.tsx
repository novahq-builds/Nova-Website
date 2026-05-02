import styles from "./AboutSection.module.css";
import Image from "next/image";

const pillars = [
  { icon: "/icons/perfomance.svg", label: "Built for Performance" },
  { icon: "/icons/design.svg", label: "Designed with Purpose" },
  { icon: "/icons/deliver.svg", label: "Delivered with Care" },
];

export default function AboutSection() {
  return (
    <section className={styles.section}>
      {/* Label */}
      <div className={styles.labelRow}>
        <span className={styles.square}></span>
        <span className={styles.label}>About Us</span>
      </div>

      {/* Heading */}
      <h2 className={styles.heading}>
        We don't just build websites. We build brands that compete, products
        that scale, and experiences that people remember.
      </h2>

      {/* Body */}
      <p className={styles.body}>
        We are a team of designers, developers, and strategists who genuinely
        care about the work we put out. Every project is a chance to do
        something great and we don't take that lightly. We obsess over the
        details. The spacing, the speed, the user flow, the brand voice. Because
        the difference between good and unforgettable lives in the details. That
        obsession goes beyond aesthetics. Before a single pixel is placed or a
        line of code is written, we think deeply about your users, your
        business, and your goals. Strategy first. Everything else follows. We've
        worked with startups, growing businesses, and established brands and
        each one made us better. Because your success is the only portfolio that
        matters to us.
      </p>

      {/* Pillars */}
      <div className={styles.pillars}>
        {pillars.map((pillar, i) => (
          <div key={i} className={styles.pillar}>
            <div className={styles.iconWrap}>
              <Image
                src={pillar.icon}
                alt={pillar.label}
                width={36}
                height={36}
              />
            </div>
            <p className={styles.pillarLabel}>{pillar.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
