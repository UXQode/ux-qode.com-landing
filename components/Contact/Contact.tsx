import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Container,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import { ContactIconsList } from './ContactIcons';
import classes from './Contact.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
        setName('');
        setMessage('');
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <Container size="lg" py="xl">
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Get in Touch with UXQode</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Have questions about features, pricing, or custom solutions? Our team is here to help and will respond within 24 hours.
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
            <TextInput
              label="Email"
              placeholder="dev@ux-qode.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="Your Name"
              mt="md"
              value={name}
              onChange={(event) => setName(event.target.value)}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your Message"
              placeholder="Let us know how we can assist you"
              minRows={4}
              mt="md"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control} onClick={handleSubmit} disabled={submitted}>
                {submitted ? 'Message Sent' : 'Send Message'}
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </div>
    </Container>
  );
}
