import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { CursorTrail } from "@/components/ui/CursorTrail";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL("http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Ahmad Manarul Baehaqi | Software Engineer", template: "%s | Ahmad Manarul Baehaqi" },
  description: "Portfolio of Ahmad Manarul Baehaqi — Software Engineer, Full-Stack Developer, and L2 Application Support professional.",
  openGraph: {
    title: "Ahmad Manarul Baehaqi | Software Engineer",
    description: "Building digital experiences, keeping systems reliable.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${spaceGrotesk.variable} ${dmSans.variable}`}><CursorTrail />{children}</body></html>;
}
