import type { Metadata } from 'next';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
