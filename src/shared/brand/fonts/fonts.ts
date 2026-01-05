import localFont from 'next/font/local';

export const fixelText = localFont({
  src: [
    { path: './files/FixelText-Thin.woff2', weight: '100', style: 'normal' },
    { path: './files/FixelText-ExtraLight.woff2', weight: '200', style: 'normal' },
    { path: './files/FixelText-Light.woff2', weight: '300', style: 'normal' },
    { path: './files/FixelText-Regular.woff2', weight: '400', style: 'normal' },
    { path: './files/FixelText-Medium.woff2', weight: '500', style: 'normal' },
    { path: './files/FixelText-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './files/FixelText-Bold.woff2', weight: '700', style: 'normal' },
    { path: './files/FixelText-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: './files/FixelText-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-fixel-text',
  display: 'swap',
});

export const fixelDisplay = localFont({
  src: [
    { path: './files/FixelText-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './files/FixelText-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-fixel-display',
  display: 'swap',
});
