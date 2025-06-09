import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayodeji Eluwande - Product Manager",
  description: "Product Manager with 4 years of experience in driving product strategy, user engagement, and operational efficiency across startups and tech companies.",
  keywords: ["Product Manager", "Product Strategy", "User Engagement", "Tech", "Lagos", "Nigeria"],
  authors: [{ name: "Ayodeji Eluwande" }],
  openGraph: {
    title: "Ayodeji Eluwande - Product Manager",
    description: "Product Manager with 4 years of experience in driving product strategy and user engagement.",
    url: "https://ayodejieluwande.com",
    siteName: "Ayodeji Eluwande Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayodeji Eluwande - Product Manager",
    description: "Product Manager with 4 years of experience in driving product strategy and user engagement.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
