import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Send funds, abeg",
  description: "2k is okay, but you can send more You know the Vibe!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
