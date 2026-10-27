import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Larry & Andrea | May 22, 2027",
  description:
    "Under the moon and stars, we'd love to celebrate with you. Details for Larry and Andrea's wedding on May 22, 2027.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
