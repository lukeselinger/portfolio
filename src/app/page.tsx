import styles from "./page.module.css";

/**
 * Home Page
 * 
 * Structure mirrors paco.me:
 * 1. Hero section (name + bio)
 * 2. Grid section (Building / Projects / Writing)
 * 3. Now section (current interests)
 * 4. Connect section (contact info)
 * 5. Footer
 */
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.article}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <h1 className={styles.name}>Lorem Ipsum</h1>
            <p>
              <em>Crafting experiences</em>. Dolor sit amet, consectetur 
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore. 
              Designer at{" "}
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Company
              </a>
              .
            </p>
            <p>
              Previously worked on the{" "}
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Product
              </a>{" "}
              design system, website, and dashboard.
            </p>
          </section>

          {/* Grid Section: Building / Projects / Writing */}
          <section className={styles.grid}>
            {/* Building Column */}
            <div className={styles.column}>
              <h2 className={styles.sectionLabel}>Building</h2>
              <div className={styles.items}>
                <div className={styles.item}>
                  <a href="/craft">Craft</a>
                  <p className={styles.itemDescription}>
                    Implementing interfaces and interactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects Column */}
            <div className={styles.column}>
              <h2 className={styles.sectionLabel}>Projects</h2>
              <div className={styles.items}>
                <div className={styles.item}>
                  <div className={styles.itemTitle}>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Project One
                    </a>
                    <ExternalIcon />
                  </div>
                  <p className={styles.itemDescription}>
                    Lorem ipsum dolor sit amet component.
                  </p>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemTitle}>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Project Two
                    </a>
                    <ExternalIcon />
                  </div>
                  <p className={styles.itemDescription}>
                    Consectetur adipiscing elit editor.
                  </p>
                </div>
                <div className={styles.item}>
                  <div className={styles.itemTitle}>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Project Three
                    </a>
                    <ExternalIcon />
                  </div>
                  <p className={styles.itemDescription}>
                    Sed do eiusmod tempor mode.
                  </p>
                </div>
              </div>
            </div>

            {/* Writing Column */}
            <div className={styles.column}>
              <h2 className={styles.sectionLabel}>Writing</h2>
              <div className={styles.items}>
                <div className={styles.item}>
                  <a href="/writing/article-one">Article Title One</a>
                  <p className={styles.itemDescription}>
                    Simple, efficient pattern in 50 lines.
                  </p>
                </div>
                <div className={styles.item}>
                  <a href="/writing/article-two">Article Title Two</a>
                  <p className={styles.itemDescription}>
                    Return to simplicity.
                  </p>
                </div>
                <div className={styles.item}>
                  <a href="/writing">All writing</a>
                  <p className={styles.itemDescription}>
                    Infrequent thoughts on design and code.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Now Section */}
          <section className={styles.now}>
            <h2 className={styles.sectionLabel}>Now</h2>
            <p>
              Developing skill through doing, guiltlessly exploring passion and 
              interests, imbuing quality. Mindful that{" "}
              <em>everything around me is someone&apos;s life work.</em>
            </p>
            <p>
              All I want to do is build websites. Typography, motion design, 
              copywriting, performance—the web is an endless medium of 
              opportunity and creativity of which I&apos;ve only scratched the 
              surface.
            </p>
            <p>
              Enjoying deep, dark, boring dance music: songs that set the pace 
              in the first ten seconds and maintain it for the next ten minutes.{" "}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Playlist One
              </a>{" "}
              is a curation of my favorites. Soothed by the inherent energy of 
              drum and bass—
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Playlist Two
              </a>{" "}
              has my favorites.
            </p>
          </section>

          {/* Connect Section */}
          <section className={styles.connect}>
            <h2 className={styles.sectionLabel}>Connect</h2>
            <p>
              Reach me at{" "}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                @username
              </a>{" "}
              or{" "}
              <a href="mailto:hello@example.com">hello@example.com</a>.
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerQuote}>
          Lorem ipsum dolor sit amet.
        </span>
        <span className={styles.footerYear}>2025</span>
      </footer>
    </div>
  );
}

/**
 * External link icon (arrow pointing up-right)
 * Inline SVG component for external links
 */
function ExternalIcon() {
  return (
    <svg
      className={styles.externalIcon}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4H7.29289L3.14645 8.14645C2.95118 8.34171 2.95118 8.65829 3.14645 8.85355C3.34171 9.04882 3.65829 9.04882 3.85355 8.85355L8 4.70711V8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5V3.5C9 3.22386 8.77614 3 8.5 3H3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
