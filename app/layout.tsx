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
  title: "Abhivardhan Misra - Unity Developer",
  description:
    "Welcome to my portfolio! I am a passionate Unity developer and game designer focused on clean, minimal, and effective solutions. I believe in the power of simplicity and thoughtful design to create impactful digital experiences.",
  keywords: [
    "Unity Developer",
    "Game Design",
    "Minimal Design",
    "Modern Development",
    "Web Development",
    "User Experience",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Performance",
    "Accessibility",
    "Portfolio",
    "Abhivardhan Misra",
  ],
  authors: [{ name: "Abhivardhan Misra" }],
  creator: "Abhivardhan Misra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
