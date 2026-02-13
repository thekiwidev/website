import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adedotun Gabriel | Full-Stack Systems Architect",
  description: "Systems-oriented full-stack engineer specializing in type-safe architecture, real-time systems, and AI-augmented development workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans selection:bg-primary/30`}
      >
        {children}
      </body>
    </html>
  );
}
