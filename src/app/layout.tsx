import type { Metadata } from "next";
import { playfair, dmSans, instrumentSerif } from "@/lib/fonts";
import "@/styles/globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PageLoader from "@/components/layout/PageLoader";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "TINAAmigurumi — Handcrafted Amigurumi Dolls",
  description: "Discover one-of-a-kind Amigurumi dolls from independent makers worldwide. Each piece uniquely crafted, never mass-produced.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <PageLoader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}