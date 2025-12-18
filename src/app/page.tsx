import styles from "./page.module.css";

/**
 * Home Page - adampolselli.com style
 * 
 * Structure:
 * - Vertically centered container
 * - h1: Name
 * - Intro paragraph (large): Hook/tagline
 * - Body paragraphs: Current role, experience
 * - Footer paragraph (small, italic): Personal touch
 */
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Luke Selinger</h1>
      
      <p className={styles.intro}>
        I&apos;m a Product Designer with a penchant for product strategy, 
        prototyping, and alliteration.
      </p>
      
      <p>
        Currently designing{" "}
        <a 
          href="https://portal.io" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Portal
        </a>
        , where I work on complex enterprise workflows, design systems, 
        and turning ambiguity into clarity.
      </p>
      
      <p>
        Previously, I&apos;ve worked on accessible form patterns, led design 
        sprints, and crafted onboarding experiences. I believe the best 
        design emerges from understanding constraints deeply and questioning 
        assumptions relentlessly.
      </p>
      
      <p className={styles.footer}>
        I like building things that work, learning CSS fundamentals, 
        reverse-engineering great portfolios, and the occasional Oxford comma.
      </p>
    </div>
  );
}
