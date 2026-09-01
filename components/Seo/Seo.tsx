import Head from 'next/head';

export const SITE_URL = 'https://ux-qode.com';
const SITE_NAME = 'UXQode';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

interface SeoProps {
  /** Full <title> tag text, e.g. "AI Back Office — Document Automation | UXQode". */
  title: string;
  /** Meta description, ~150-160 chars. */
  description: string;
  /** Site-relative path, e.g. "/" or "/solutions/ai-back-office". */
  path: string;
  keywords?: string;
  /** Absolute image URL for social cards. Defaults to the UXQode logo. */
  image?: string;
  /** One or more JSON-LD objects — each is emitted as its own <script> tag. */
  structuredData?: object | object[];
  /** Set true only for pages that should be excluded from search (none today). */
  noindex?: boolean;
}

/**
 * Single source of truth for a page's <head> — title, description, canonical,
 * full Open Graph + Twitter Card set, robots directives, and JSON-LD. Every
 * page should render this once so meta coverage never drifts between pages.
 */
export function Seo({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_IMAGE,
  structuredData,
  noindex = false,
}: SeoProps) {
  const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const schemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={
          noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'
        }
      />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@uxqode" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
