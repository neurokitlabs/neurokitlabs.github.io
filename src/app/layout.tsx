import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neurokit — AI Study Companion",
  description:
    "An AI-powered study companion combining personalized motivation, adaptive light & music therapy, and gamified cognitive warm-ups to help students focus longer and retain more.",
  keywords: ["Neurokit", "study companion", "AI", "light therapy", "music therapy", "focus", "students"],
  icons: {
    icon: "/logo/icon.png",
    shortcut: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
