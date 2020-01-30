export const COLORS = {
  PRIMARY: '#74B567',
  BACKGROUND: '#FFFFFF',
  GRAY: '#222222',
};

// https://emotion.sh/docs/media-queries#reusable-media-queries
export const breakpoints = [576, 768, 992, 1200];
export const mq = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`,
);
