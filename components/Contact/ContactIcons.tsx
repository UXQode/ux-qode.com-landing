import { IconAt, IconMapPin, IconClock } from '@tabler/icons-react';
import { Stack, Text, ThemeIcon } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps {
  icon: typeof IconAt;
  title: string;
  description: string;
}

function ContactIcon({ icon: Icon, title, description }: ContactIconProps) {
  return (
    <div className={classes.item}>
      <ThemeIcon size={40} radius="xl" className={classes.iconBg}>
        <Icon size={18} stroke={1.8} />
      </ThemeIcon>
      <div>
        <Text className={classes.itemTitle}>{title}</Text>
        <Text className={classes.itemDescription}>{description}</Text>
      </div>
    </div>
  );
}

const contactData = [
  {
    icon: IconAt,
    title: 'Email us',
    description: 'dev@ux-qode.com',
  },
  {
    icon: IconMapPin,
    title: 'Singapore HQ',
    description: 'Robinson Road #14-04, Singapore Business Federation Center, 068914',
  },
  {
    icon: IconClock,
    title: 'Business Hours',
    description: 'Monday – Friday, 9 a.m. – 6 p.m. SGT',
  },
];

export function ContactIconsList() {
  return (
    <Stack gap="lg">
      {contactData.map((item) => (
        <ContactIcon key={item.title} {...item} />
      ))}
    </Stack>
  );
}
