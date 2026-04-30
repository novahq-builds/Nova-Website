import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.container}>

      {/* Top Left - Label */}
      <div className={styles.labelRow}>
        <span className={styles.square}></span>
        <span className={styles.label}>About Us</span>
      </div>

      {/* Left Paragraph */}
      <p className={styles.leftText}>
        From the ground up, we've been{' '}
        <strong>crafting digital experiences</strong>{' '}
        that don't just look good, they perform, convert, and last. Whether you're
        launching a new brand, rebuilding an outdated website, or bringing a{' '}
        <strong>product idea to life,</strong>{' '}
        we bring the strategy, design, and engineering to make it happen.
      </p>

      {/* Bottom Right Statement */}
      <p className={styles.rightText}>
        We don't just build websites. We build brands that compete, products
        that scale, and experiences that people remember.
      </p>

    </section>
  )
}