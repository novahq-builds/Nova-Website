import styles from "./OurWorkSection.module.css";
import Image from "next/image";

const projects = [
  { src: "/images/mockup1.png", alt: "ARTSB Website" },
  { src: "/images/mockup2.png", alt: "Project Management App" },
  { src: "/images/mockup3.png", alt: "Jazz Festival App" },
  { src: "/images/mockup4.png", alt: "Binushi & Ruchelle Website" },
];

export default function OurWorkSection() {
  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.labelRow}>
          <span className={styles.square}></span>
          <span className={styles.label}>Our Work</span>
        </div>
        <h2 className={styles.heading}>
          Great work speaks for itself. Here's a glimpse
          <br />
          into what we've been building.
        </h2>
      </div>

      {/* 2x2 Grid */}
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <div key={i} className={styles.item}>
            <Image
              src={project.src}
              alt={project.alt}
              fill
              className={styles.image}
              sizes="50vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
