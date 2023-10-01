import Navbar from '@/components/templates/base/navbar'
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
        <main className="py-10 px-5">
          <Navbar name="<rajni.dev/>" currPath="/" />
          {children}
        </main>
      </body>
    </html>
  )
}
