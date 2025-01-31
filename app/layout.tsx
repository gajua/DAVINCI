import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: {
    template: '%s | 다빈치',
    default: '다빈치 - 빈티지 다 모였다!',
  },
  description: '세상의 모든 빈티지가 모인 곳',
  keywords: [
    '다빈치',
    '빈티지',
    '빈티지 마켓',
    '빈티지 쇼핑',
    '빈티지 커뮤니티',
  ],
  authors: [{ name: '다빈치 팀' }],
  creator: '다빈치',
  publisher: '다빈치',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: '다빈치 - 빈티지 다 모였다!',
    description: '세상의 모든 빈티지가 모인 곳',
    url: 'https://your-domain.com',
    siteName: '다빈치',
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console 코드
    naver: 'naver-site-verification-code', // 네이버 웹마스터 도구 코드
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
