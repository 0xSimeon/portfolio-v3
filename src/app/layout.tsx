import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simeon Udoh",
  description:
    "Developer, builder, and writer exploring web development, crypto, and gaming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
