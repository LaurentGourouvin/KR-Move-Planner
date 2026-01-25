import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KR Move Planner",
  description: "Helps you plan your move to South Korea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
