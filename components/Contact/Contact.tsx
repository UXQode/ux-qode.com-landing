import { useState } from 'react';
import { Button, Container, Grid, Text, Textarea, TextInput, Title } from '@mantine/core';
import { Reveal } from '@/components/Reveal/Reveal';
import { ContactIconsList } from './ContactIcons';
import classes from './Contact.module.css';

export function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setName('');
        setMessage('');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch {
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={classes.section} id="contact-us" aria-label="Contact">
      <Container size="lg">
        <Reveal direction="up">
          <Grid gutter={0} className={classes.wrapper}>
            <Grid.Col span={{ base: 12, sm: 5 }} className={classes.infoCol}>
              <div className={classes.info}>
                <Title component="h2" className={classes.infoTitle}>
                  Let&apos;s Build Something Great
                </Title>
                <Text className={classes.infoDescription} mt="sm">
                  Have questions about our services, pricing, or custom AI solutions? Our
                  Singapore-based team operates globally and will respond within 24 hours.
                </Text>

                <div className={classes.iconsWrapper}>
                  <ContactIconsList />
                </div>
              </div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 7 }} className={classes.formCol}>
              <div className={classes.form}>
                {submitted ? (
                  <div className={classes.successState}>
                    <Text className={classes.successTitle}>Message Received!</Text>
                    <Text className={classes.successDesc}>
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </Text>
                    <Button
                      variant="subtle"
                      color="brand"
                      mt="md"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <>
                    <Grid gutter="md">
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <TextInput
                          label="Your Name"
                          placeholder="Jane Smith"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          classNames={{ input: classes.input, label: classes.label }}
                        />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <TextInput
                          label="Email Address"
                          placeholder="jane@company.com"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          classNames={{ input: classes.input, label: classes.label }}
                        />
                      </Grid.Col>
                    </Grid>
                    <Textarea
                      label="How can we help?"
                      placeholder="Tell us about your project, goals, or questions..."
                      minRows={5}
                      mt="md"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      classNames={{ input: classes.input, label: classes.label }}
                    />
                    <Button
                      className={classes.submitBtn}
                      onClick={handleSubmit}
                      loading={loading}
                      disabled={!email || !name || !message}
                      radius="xl"
                      size="md"
                      mt="xl"
                      fullWidth
                    >
                      Send Message
                    </Button>
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
