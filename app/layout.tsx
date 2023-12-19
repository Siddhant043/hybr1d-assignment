import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryCache, QueryClientProvider } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Hacker Search",
  description: "Search for Hacker News Articles quickly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
