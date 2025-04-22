import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guia de Projetos de Extensão - ADS",
  description: "Guia para desenvolvimento de projetos de extensão alinhados com os ODS da ONU",
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      }
    ],
    apple: {
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    },
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
