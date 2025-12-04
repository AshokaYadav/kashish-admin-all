// src/app/layout.tsx
import { Inter } from 'next/font/google'
import './globals.css'
import { metadata } from './metadata'
import ClientLayout from './client-layout'
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
        <Toaster />
      </body>
    </html>
  )
}