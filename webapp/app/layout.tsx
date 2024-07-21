"use client"
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
        <SessionProvider >
          {/* Layout UI */}
          <main>{children}</main>
          </SessionProvider>
        </body>
      </html>
    )
  }
