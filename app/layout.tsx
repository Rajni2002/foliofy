import Navbar from '@/components/templates/base/navbar'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Foliofy',
  description: '| build your devfolio with blazzing ✨',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="py-10 px-5 h-screen dark:bg-gradient-to-t from-black to-main-deriv" >
            <Navbar name="<rajni.dev/>" currPath="/" />
            {children}
          </main>
        </ThemeProvider>
      </body>

    </html>
  )
}
