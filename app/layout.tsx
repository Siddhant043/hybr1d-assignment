"use client";
import "./globals.css";
import { Provider } from "react-redux";
import { reduxStore } from "@/lib/redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={reduxStore}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  );
}
