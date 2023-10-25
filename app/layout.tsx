import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import SubabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'

const font = Figtree
  ({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Suna',
  description: 'Music Like Never Before!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SubabaseProvider>
          <UserProvider>
            <Sidebar>
              {children}
            </Sidebar>
          </UserProvider>
        </SubabaseProvider>
      </body>
    </html>
  )
}
