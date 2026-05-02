import styles from "./FooterSection.module.css";

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      {/* Background image */}
      <div className={styles.bgImage} />

      {/* Floating Card */}
      <div className={styles.card}>
        {/* Left */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Let's Build Something
            <br />
            Amazing Together
          </h2>

          <div className={styles.socials}>
            <a href="#" aria-label="Facebook" className={styles.socialLink}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/novahq.builds?igsh=MTg3bXV3YzdqdWM3aA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialLink}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/novahq-builds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialLink}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          <p className={styles.copyright}>
            © 2026 All Rights Reserved. Designed
            <br />
            and Developed by Nova
          </p>
        </div>

        {/* Right - Form */}
        <div className={styles.right}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Name" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Message" className={styles.input} />
          </div>

          <button className={styles.contactBtn}>
            <span className={styles.corner} data-pos="tl" />
            <span className={styles.corner} data-pos="tr" />
            Send Email
            <span className={styles.corner} data-pos="bl" />
            <span className={styles.corner} data-pos="br" />
          </button>
        </div>
      </div>

      {/* Giant NOVA wordmark */}
      <div className={styles.wordmark}>
        <img
          src="/icons/nova-wordmark.svg"
          alt="Nova"
          className={styles.wordmarkText}
        />
      </div>
    </footer>
  );
}
