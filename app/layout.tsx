import type { Metadata } from 'next';

import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

import '@/app/_styles/globals.css';
import Header from './_components/Header';

export const metadata: Metadata = {
  title: 'Stephan Kugler - portfolio',
  description: 'A portfolio about Stephan Kugler, made by Stephan Kugler.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${roboto.className} antialiased bg-primary-3 text-primary-1 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
