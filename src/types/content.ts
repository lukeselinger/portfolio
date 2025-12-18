/**
 * Content Type Definitions
 * 
 * These interfaces define the shape of content extracted from the portfolio.
 * Used to type-check content when rendering in React components.
 */

/**
 * External link (e.g., "View Prototype", "Check it out")
 */
export interface ExternalLink {
  label: string;
  url: string | null;
}

/**
 * Social media links
 */
export interface SocialLinks {
  twitter: string | null;
  linkedin: string | null;
  github: string | null;
}

/**
 * Navigation item
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Footer content
 */
export interface FooterContent {
  text: string;
  year: string;
}

/**
 * Metadata about content extraction
 */
export interface ContentMeta {
  source: string;
  extractedAt: string;
  notes?: string;
}

/**
 * Profile/About information
 */
export interface Profile {
  name: string;
  title: string;
  subtitle?: string;
  tagline: string;
  bio?: string;
  location: string | null;
  email: string | null;
  social: SocialLinks;
  navigation: NavItem[];
  footer: FooterContent;
  _meta?: ContentMeta;
}

/**
 * Gallery image (for projects with multiple images)
 */
export interface GalleryImage {
  url: string;
  alt: string;
}

/**
 * Project frontmatter (parsed from markdown YAML)
 */
export interface ProjectFrontmatter {
  title: string;
  slug: string;
  category: string;
  client: string | null;
  team: string | null;
  year: string;
  featured: boolean;
  thumbnail: string;
  gallery?: GalleryImage[];
  externalLinks: ExternalLink[];
}

/**
 * Full project with content
 */
export interface Project extends ProjectFrontmatter {
  /** Markdown content (body of the file) */
  content: string;
  /** Rendered HTML from markdown */
  html?: string;
}

/**
 * Project card (minimal data for list views)
 */
export interface ProjectCard {
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  year: string;
}

/**
 * Writing/blog post frontmatter
 */
export interface WritingFrontmatter {
  title: string;
  slug: string;
  date: string;
  description?: string;
  tags?: string[];
  published: boolean;
}

/**
 * Full writing post with content
 */
export interface WritingPost extends WritingFrontmatter {
  content: string;
  html?: string;
}

/**
 * Site-wide content bundle
 * Aggregates all content for easy access
 */
export interface SiteContent {
  profile: Profile;
  projects: Project[];
  writing: WritingPost[];
}

