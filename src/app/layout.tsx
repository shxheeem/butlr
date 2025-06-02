import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://butlr.vercel.app'),
  title: "Butlr | Rethinking Higher Education",
  description: "Butlr is revolutionizing higher education through innovative solutions and personalized learning experiences. A complete platform bringing together core digital services of Higher Education Institutes.",
  keywords: ["higher education", "education platform", "student engagement", "course materials", "clubs and societies", "digital education"],
  authors: [{ name: "Shaheem" }, { name: "Sid" }, { name: "Zaide" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Butlr | Rethinking Higher Education",
    description: "A complete platform bringing together core digital services of Higher Education Institutes.",
    url: "https://butlr.vercel.app",
    siteName: "Butlr",
    images: [
      {
        url: "/butlr_logo.png",
        width: 800,
        height: 600,
        alt: "Butlr Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Butlr | Rethinking Higher Education",
    description: "A complete platform bringing together core digital services of Higher Education Institutes.",
    images: ["/butlr_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} font-sans bg-[var(--background)] text-[var(--foreground)] antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
