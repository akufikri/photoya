import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photoya – Abadikan Momen Seru Kamu",
  description:
    "Photoya adalah photobooth digital yang memungkinkan kamu mengambil foto keren, menambahkan efek & template, lalu membagikannya dengan mudah.",

  openGraph: {
    title: "Photoya – Abadikan Momen Seru Kamu",
    description:
      "Ambil foto, tambahkan efek dan template, lalu bagikan momen serumu dengan Photoya.",
    url: "https://photoya.example.com",
    siteName: "Photoya",
    images: [
      {
        url: "https://photoya.example.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Photoya - Capture Your Moments",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Photoya – Abadikan Momen Seru Kamu",
    description:
      "Ambil foto, tambahkan efek & template, lalu bagikan momen serumu dengan Photoya.",
    images: ["https://photoya.example.com/og-image.png"],
    site: "@photoya_app",
    creator: "@photoya_app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
