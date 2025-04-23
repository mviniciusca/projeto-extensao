import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Guia de Projeto de Extensão - Análise e Desenvolvimento de Sistemas",
    description: "Guia para desenvolvimento de projetos de extensão alinhados com os ODS da ONU voltado para o curso de Análise e Desenvolvimento de Sistemas.",
    generator: 'Next.js',
    applicationName: "Guia de Projeto de Extensão - ADS",
    keywords: [
        "Guia de Projetos de Extensão",
        "Projetos de Extensão",
        "Extensão",
        "Desenvolvimento Sustentável",
        "ODS",
        "Sustentabilidade",
        "Tecnologia",
        "Inovação",
        "Educação",
        "Comunidade"
    ],
    authors: [{ name: "Marcos Coelho" }],
    metadataBase: new URL('https://extensao-anhanguera.vercel.app'),
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://extensao-anhanguera.vercel.app',
        title: 'Guia de Projeto de Extensão - Análise e Desenvolvimento de Sistemas',
        description: 'Guia para desenvolvimento de projetos de extensão alinhados com os ODS da ONU',
        siteName: 'Guia de Projeto de Extensão',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Guia de Projeto de Extensão - ADS',
        description: 'Guia para desenvolvimento de projetos de extensão alinhados com os ODS da ONU',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
        },
    },
    verification: {
        google: 'google-site-verification=xC9RqrYETndjNYHjLE5_TAiN0UfCmXfCWwLtWCD-O_g', // Você pode adicionar seu código de verificação do Google aqui
    },
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
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    )
}
