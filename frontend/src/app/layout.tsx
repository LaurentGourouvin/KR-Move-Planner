import Link from "next/link";
import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KR Move Planner",
  description: "Helps you plan your move abroad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-background flex min-h-screen flex-col">
        <header className="border-b p-6">
          <div className="between-flex">
            Logo
            <nav className="between-flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/documents">Documents</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-auto border-t p-6 text-center">Footer</footer>
      </body>
    </html>
  );
}
