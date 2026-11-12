import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Anto Jeries A | Aspiring Software Developer",
  description:
    "The portfolio of Anto Jeries A — first-year B.Tech Computer Science student, aspiring software developer, and lifelong learner.",
  openGraph: {
    title: "Anto Jeries A | Aspiring Software Developer",
    description:
      "Learning today, innovating tomorrow. Explore the projects and journey of Anto Jeries A.",
    type: "website",
    url: siteUrl,
    siteName: "Anto Jeries A Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Anto Jeries A | Aspiring Software Developer",
    description:
      "Learning today, innovating tomorrow. Explore the projects and journey of Anto Jeries A.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
