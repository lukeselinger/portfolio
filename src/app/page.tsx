import styles from "./page.module.css";

/**
 * Home Page - zachjohnston.com style
 * 
 * Structure:
 * - Header: Name (small, red) + Title (large, black)
 * - Bio paragraph
 * - Experience section (adapted from logo grid)
 * - Footer with social links (pinned to bottom)
 */
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        {/* Header: Inverted hierarchy */}
        <header className={styles.header}>
          <h1 className={styles.name}>Luke Selinger</h1>
          <h2 className={styles.title}>Product Designer</h2>
        </header>

        {/* Bio */}
        <p className={styles.bio}>
          Currently designing at{" "}
          <a 
            href="https://portal.io" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Portal
          </a>
          . Previously worked on accessible form patterns, led design sprints, 
          and crafted onboarding experiences at various companies.
        </p>

        {/* Experience - adapted from logo grid concept */}
        <section className={styles.experience}>
          <div className={styles.experienceItem}>
            <span className={styles.company}>Portal</span>
            <span className={styles.role}>Product Designer</span>
          </div>
          <div className={styles.experienceItem}>
            <span className={styles.company}>Occipital</span>
            <span className={styles.role}>UX Designer</span>
          </div>
          <div className={styles.experienceItem}>
            <span className={styles.company}>Omniplex</span>
            <span className={styles.role}>Designer</span>
          </div>
        </section>
      </main>

      {/* Footer - pinned to bottom */}
      <footer className={styles.footer}>
        <a 
          href="https://linkedin.com/in/lukeselinger" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:hello@lukeselinger.com"
        >
          Email
        </a>
      </footer>
    </div>
  );
}
