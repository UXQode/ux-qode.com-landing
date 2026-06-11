import { createTheme, MantineColorsTuple } from '@mantine/core';

const brand: MantineColorsTuple = [
  '#e0f9fb',
  '#c2f2f6',
  '#8ae6ed',
  '#4dd9e4',
  '#3ac1ce',
  '#27aab8',
  '#1d8f9b',
  '#16737d',
  '#0f5a62',
  '#07414a',
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: { brand },
  defaultRadius: 'md',
  fontFamily:
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  headings: {
    // Space Grotesk gives the headlines an editorial, technical character.
    fontFamily: '"Space Grotesk", Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '700',
  },
});
