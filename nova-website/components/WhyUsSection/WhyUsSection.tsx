import styles from "./WhyUsSection.module.css";

export default function WhyUsSection() {
  const tickerItems = ["Design", "Develop", "Deliver", "Repeat"];

  return (
    <section className={styles.section}>
      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.labelRow}>
          <span className={styles.square}></span>
          <span className={styles.label}>Why Us</span>
        </div>

        <h2 className={styles.headingPrimary}>
          We could list a hundred reasons why Nova is the right choice. But
          honestly? Our work does the talking.
        </h2>

        <p className={styles.headingSecondary}>
          We started Nova because we were tired of seeing great businesses stuck
          with bad websites, forgettable brands, and software that just barely
          works.
        </p>

        <a href="#contact" className={styles.contactBtn}>
          <span className={styles.corner} data-pos="tl" />
          <span className={styles.corner} data-pos="tr" />
          Contact Us
          <span className={styles.corner} data-pos="bl" />
          <span className={styles.corner} data-pos="br" />
        </a>
      </div>

      {/* Ticker Bar */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {/* Duplicated for seamless loop */}
          {[...Array(4)].map((_, repeat) =>
            tickerItems.map((item, i) => (
              <span key={`${repeat}-${i}`} className={styles.tickerItem}>
                {item}
                <span className={styles.tickerDot}></span>
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
