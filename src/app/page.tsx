import styles from "./page.module.css";

/**
 * Home Page - daneden.me Clone
 * 
 * Structure:
 * 1. Skip to content link (accessibility)
 * 2. Intro paragraph (large type, links with pink underlines)
 * 3. Featured project cards (image + title + description)
 * 4. Timeline table (chronological work history)
 * 
 * Key visual characteristics:
 * - Warm gray palette with pink/red accent
 * - Serif body text (editorial feel)
 * - System font for headings
 * - 3-column grid with centered content
 */
export default function Home() {
  return (
    <>
      {/* Skip to content - accessibility */}
      <nav>
        <a href="#content" className="skip-link">
          Skip to content
        </a>
      </nav>

      <main id="content" className={styles.main}>
        {/* Intro Section */}
        <section className={styles.intro}>
          <div className={styles.introContent}>
            <p className={styles.introText}>
              <strong>Lorem Ipsum</strong> is a Product Designer at{" "}
              <a href="https://meta.com" target="_blank" rel="noopener noreferrer">
                Company
              </a>
              . Previously designed at{" "}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Previous Co
              </a>{" "}
              and{" "}
              <a href="https://dropbox.com" target="_blank" rel="noopener noreferrer">
                Another Co
              </a>
              . Building apps for time, weather, and introspection. Exploring the 
              boundaries between design and engineering.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className={styles.projects}>
          <div className={styles.projectsInner}>
            <h2 className={styles.sectionTitle}>Selected Work</h2>
          </div>
          
          <div className={styles.projectGrid}>
            {/* Project Card 1: Ora */}
            <article className={styles.projectCard}>
              <h3 className={styles.projectName}>Ora</h3>
              <p className={styles.projectDescription}>
                An app about time for iPhone, iPad, and Apple Watch.
              </p>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder} />
              </div>
              <a href="/portfolio/ora" className={styles.projectLink}>
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>

            {/* Project Card 2: Solstice */}
            <article className={styles.projectCard}>
              <h3 className={styles.projectName}>Solstice</h3>
              <p className={styles.projectDescription}>
                An app about daylight for iPhone, iPad, Mac, Apple Watch, and Apple Vision Pro.
              </p>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder} />
              </div>
              <a href="/portfolio/solstice" className={styles.projectLink}>
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>

            {/* Project Card 3: Where We Can Go */}
            <article className={styles.projectCard}>
              <h3 className={styles.projectName}>Where We Can Go</h3>
              <p className={styles.projectDescription}>
                A conference talk and essay about design systems and design tools.
              </p>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder} />
              </div>
              <a href="/portfolio/where-we-can-go" className={styles.projectLink}>
                Read the post <span aria-hidden="true">→</span>
              </a>
            </article>

            {/* Project Card 4: Zeitgeist */}
            <article className={styles.projectCard}>
              <h3 className={styles.projectName}>Zeitgeist</h3>
              <p className={styles.projectDescription}>
                An app for Vercel developers for iPhone, iPad, and Mac.
              </p>
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder} />
              </div>
              <a href="/portfolio/zeitgeist" className={styles.projectLink}>
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timeline}>
          <h2 className={styles.sectionTitle}>Timeline</h2>
          
          <table className={styles.timelineTable}>
            <tbody>
              {/* 2025 */}
              <tr>
                <td className={styles.year}>2025</td>
                <td className={styles.entry}>
                  <a href="/portfolio/ora">Ora</a>
                  <span className={styles.entryType}>iOS App</span>
                </td>
              </tr>
              <tr>
                <td className={styles.year}></td>
                <td className={styles.entry}>
                  <a href="/portfolio/solstice">Solstice 2.0</a>
                  <span className={styles.entryType}>iOS App Update</span>
                </td>
              </tr>
              
              {/* 2024 */}
              <tr>
                <td className={styles.year}>2024</td>
                <td className={styles.entry}>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Design Systems Interview
                  </a>
                  <span className={styles.entryType}>Interview</span>
                </td>
              </tr>
              <tr>
                <td className={styles.year}></td>
                <td className={styles.entry}>
                  <a href="/portfolio/where">Where</a>
                  <span className={styles.entryType}>iOS App</span>
                </td>
              </tr>
              
              {/* 2023 */}
              <tr>
                <td className={styles.year}>2023</td>
                <td className={styles.entry}>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Animate.css v4
                  </a>
                  <span className={styles.entryType}>Open Source</span>
                </td>
              </tr>
              <tr>
                <td className={styles.year}></td>
                <td className={styles.entry}>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Building Design Tokens
                  </a>
                  <span className={styles.entryType}>Talk</span>
                </td>
              </tr>
              
              {/* 2022 */}
              <tr>
                <td className={styles.year}>2022</td>
                <td className={styles.entry}>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Solstice</a>
                  <span className={styles.entryType}>iOS App</span>
                </td>
              </tr>
              <tr>
                <td className={styles.year}></td>
                <td className={styles.entry}>
                  <a href="https://meta.com" target="_blank" rel="noopener noreferrer">
                    Joined Meta Reality Labs
                  </a>
                  <span className={styles.entryType}>Career</span>
                </td>
              </tr>
              
              {/* 2020 */}
              <tr>
                <td className={styles.year}>2020</td>
                <td className={styles.entry}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook Design Systems
                  </a>
                  <span className={styles.entryType}>Project</span>
                </td>
              </tr>
              
              {/* 2018 */}
              <tr>
                <td className={styles.year}>2018</td>
                <td className={styles.entry}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Joined Facebook Design
                  </a>
                  <span className={styles.entryType}>Career</span>
                </td>
              </tr>
              
              {/* Earlier */}
              <tr>
                <td className={styles.year}>2015</td>
                <td className={styles.entry}>
                  <a href="https://dropbox.com" target="_blank" rel="noopener noreferrer">
                    Dropbox Brand Evolution
                  </a>
                  <span className={styles.entryType}>Project</span>
                </td>
              </tr>
              <tr>
                <td className={styles.year}></td>
                <td className={styles.entry}>
                  <a href="https://dropbox.com" target="_blank" rel="noopener noreferrer">
                    Joined Dropbox
                  </a>
                  <span className={styles.entryType}>Career</span>
                </td>
              </tr>
              <tr>
                <td className={styles.year}>2013</td>
                <td className={styles.entry}>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    Animate.css
                  </a>
                  <span className={styles.entryType}>Open Source</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
