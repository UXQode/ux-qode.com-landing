import { useState } from 'react';
import { IconArrowRight, IconCheck, IconCircleDot } from '@tabler/icons-react';
import { Button, Container, Grid, Text, Textarea, TextInput } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import { SectionHeading } from '@/components/SectionHeading/SectionHeading';
import { ContactIconsList } from './ContactIcons';
import classes from './Contact.module.css';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      setError('Please add your name and a short message.');
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setStatus('loading');
    try {
      // HubSpot tracking cookie (present when the HubSpot tracking script is loaded)
      // — lets HubSpot attribute the lead to its browsing session.
      const hutk =
        typeof document !== 'undefined'
          ? document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1]
          : undefined;
      const pageUri = typeof window !== 'undefined' ? window.location.href : undefined;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, message, hutk, pageUri }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setName('');
        setMessage('');
      } else {
        const data = await response.json().catch(() => null);
        setStatus('error');
        setError(data?.error || 'Something went wrong sending your message. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error — please try again, or email us directly.');
    }
  };

  return (
    <section className={classes.section} id="contact-us" aria-label="Contact">
      <Container size="lg">
        <SectionHeading
          index="05"
          label="Contact"
          title={
            <>
              Let&apos;s build something <span className={classes.accent}>great</span>
            </>
          }
          description="Questions about our services, pricing, or a custom platform like aama.io? Our Singapore-based team operates globally and replies within 24 hours."
        />

        <Reveal direction="up">
          <Grid gutter={0} className={classes.wrapper} mt={48}>
            {/* Left — contact details on a dark panel */}
            <Grid.Col span={{ base: 12, sm: 5 }} className={classes.infoCol}>
              <div className={classes.info}>
                <div className={classes.availability}>
                  <IconCircleDot size={13} className={classes.availDot} />
                  Available now · replies in ~24h
                </div>
                <Text component="h3" className={classes.infoTitle}>
                  Talk to the team that builds it.
                </Text>
                <Text className={classes.infoDescription}>
                  No bots, no runaround — you&apos;ll hear back from the engineers and designers who
                  ship the work.
                </Text>
                <div className={classes.iconsWrapper}>
                  <ContactIconsList />
                </div>
              </div>
            </Grid.Col>

            {/* Right — the form */}
            <Grid.Col span={{ base: 12, sm: 7 }} className={classes.formCol}>
              <div className={classes.form}>
                {status === 'success' ? (
                  <div className={classes.successState}>
                    <div className={classes.successIcon}>
                      <IconCheck size={30} stroke={2.4} />
                    </div>
                    <Text className={classes.successTitle}>Message received</Text>
                    <Text className={classes.successDesc}>
                      Thanks for reaching out — our team will get back to you within 24 hours.
                    </Text>
                    <Button
                      variant="subtle"
                      color="brand"
                      mt="lg"
                      onClick={() => setStatus('idle')}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <>
                    <Grid gutter="md">
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <TextInput
                          label="Your name"
                          placeholder="Jane Smith"
                          required
                          radius={0}
                          value={name}
                          onChange={(e) => setName(e.currentTarget.value)}
                          classNames={{ input: classes.input, label: classes.label }}
                        />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <TextInput
                          label="Email address"
                          placeholder="jane@company.com"
                          type="email"
                          required
                          radius={0}
                          value={email}
                          onChange={(e) => setEmail(e.currentTarget.value)}
                          classNames={{ input: classes.input, label: classes.label }}
                        />
                      </Grid.Col>
                    </Grid>
                    <Textarea
                      label="How can we help?"
                      placeholder="Tell us about your project, goals, or questions…"
                      minRows={5}
                      autosize
                      mt="md"
                      required
                      radius={0}
                      value={message}
                      onChange={(e) => setMessage(e.currentTarget.value)}
                      classNames={{ input: classes.input, label: classes.label }}
                    />

                    {error && (
                      <Text role="alert" className={classes.errorMsg} mt="sm">
                        {error}
                      </Text>
                    )}

                    <Button
                      className={classes.submitBtn}
                      onClick={handleSubmit}
                      loading={status === 'loading'}
                      radius={0}
                      size="md"
                      mt="lg"
                      fullWidth
                      rightSection={<IconArrowRight size={18} stroke={2.2} />}
                    >
                      Send message
                    </Button>
                    <Text className={classes.formNote} mt="sm">
                      Prefer email? Write to{' '}
                      <a href="mailto:dev@ux-qode.com" className={classes.formNoteLink}>
                        dev@ux-qode.com
                      </a>
                    </Text>
                  </>
                )}
              </div>
            </Grid.Col>
          </Grid>
        </Reveal>
      </Container>
    </section>
  );
}
