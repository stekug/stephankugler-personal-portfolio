import type { Metadata } from "next";

import { roboto } from "./_components/fonts";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Stephan Kugler - portfolio",
  description: "A portfolio about Stephan Kugler, made by Stephan Kugler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${roboto.className} relative flex min-h-screen flex-col bg-black text-primary-1 antialiased`}
      >
        <Header />
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
