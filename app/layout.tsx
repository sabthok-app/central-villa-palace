import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centralvilla.com.np"),
  title: "Central Villa - Premium Party Palace in Pokhara, Nepal",
  description:
    "Central Villa is Pokhara's premier event venue for weddings, receptions, and corporate events. Located at Bijaypur Road, featuring neoclassical architecture and world-class amenities.",
  keywords: [
    "party palace pokhara",
    "wedding venue nepal",
    "event hall bijaypur",
    "central villa",
    "reception venue pokhara",
  ],
  authors: [{ name: "Central Villa Party Palace" }],
  alternates: { canonical: "https://centralvilla.com.np" },
  openGraph: {
    type: "website",
    title: "Central Villa - Premium Party Palace in Pokhara",
    description:
      "Celebrate life's grandest moments in Pokhara's most elegant venue. Weddings, receptions, and corporate events.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@centralvillapkr",
    images: ["/og-image.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
