import { ReactNode } from 'react';
import { Accordion, Container } from '@mantine/core';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import classes from './FAQ.module.css';

export interface FaqItem {
  /** Question — plain text (also used verbatim in FAQPage schema). */
  q: string;
  /** Answer — plain text (also used verbatim in FAQPage schema). */
  a: string;
}

interface FAQProps {
  index: string;
  label?: string;
  title: ReactNode;
  description?: string;
  items: FaqItem[];
}

/**
 * Accessible FAQ accordion that also emits FAQPage JSON-LD — the highest-leverage
 * structured data for AI answer engines (ChatGPT, Claude, Perplexity) and Google
 * AI Overviews, which preferentially cite concise question/answer content.
 */
export function FAQ({ index, label = 'FAQ', title, description, items }: FAQProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  return (
    <section className={classes.section} aria-label="Frequently asked questions">
      <Container size="md">
        <SectionHeading index={index} label={label} title={title} description={description} />
        <Accordion
          className={classes.accordion}
          chevronPosition="right"
          classNames={{
            item: classes.item,
            control: classes.control,
            label: classes.label,
            chevron: classes.chevron,
            panel: classes.panel,
            content: classes.panelContent,
          }}
        >
          {items.map((it, i) => (
            <Accordion.Item key={it.q} value={String(i)}>
              <Accordion.Control>{it.q}</Accordion.Control>
              <Accordion.Panel>{it.a}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
