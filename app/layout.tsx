import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { I18nProvider } from "@/lib/i18n"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Laplace Log — Digital Twin para Redes Logisticas",
  description:
    "Gemeo digital da sua rede logistica. Simulacao, otimizacao e predicao para operacoes de transporte.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "digital twin",
    "logistica",
    "gemeo digital",
    "supply chain",
    "otimizacao",
    "simulacao",
    "inteligencia artificial",
    "transporte",
  ],
  openGraph: {
    title: "Laplace Log — Digital Twin para Redes Logisticas",
    description:
      "Gemeo digital da sua rede logistica. Simulacao, otimizacao e predicao para operacoes de transporte.",
    type: "website",
    url: "https://laplacelog.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-[family-name:var(--font-inter)] antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="laplace-landing-theme"
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
