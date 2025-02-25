import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
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
        className={`${roboto.className} antialiased bg-primary-7 text-primary-1 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
