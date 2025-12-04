import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "elxsdk | %s",
    default: "elxsdk | Junior Web Developer",
  },
  description:
    "IT Support professional transitioning to web development. Building modern, responsive websites with passion and dedication.",
  metadataBase: new URL("https://elxsdk.web.id"),
  openGraph: {
    title: {
      template: "elxsdk | %s",
      default: "elxsdk | Junior Web Developer",
    },
    description:
      "IT Support professional transitioning to web development. Building modern, responsive websites with passion and dedication.",
    url: "https://elxsdk.web.id",
    siteName: "elxsdk Portfolio",
    // images: [
    //   {
    //     url: "/public/images/og-images.jpg",
    //     width: 1000,
    //     height: 1200,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "lanang rizky",
    "elxsdk",
    "junior web developer",
    "web developer",
    "frontend developer",
    "it support",
    "react",
    "nextjs",
    "javascript",
    "typescript",
    "web development",
    "semarang",
    "indonesia",
    "indonesian developer",
    "indonesian web developer",
    "portfolio",
    "portfolio website",
    "tech enthusiast",
    "career transition",
    "aspiring developer",
  ],
  twitter: {
    card: "summary_large_image",
    title: {
      template: "elxsdk | %s",
      default: "elxsdk | Junior Web Developer",
    },
    description:
      "IT Support professional transitioning to web development. Building modern, responsive websites with passion and dedication.",
    creator: "@elxsdk",
    // images: [
    //   {
    //     url: "/public/images/og-images.jpg",
    //     width: 1000,
    //     height: 1200,
    //   },
    // ],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-zinc-50 text-zinc-800 antialiased dark:bg-neutral-900 dark:text-zinc-50",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-mode"
        >
          <SmoothScrollProvider
            options={{
              smooth: true,
              mobile: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
          >
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
