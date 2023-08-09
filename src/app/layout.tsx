import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '../lib/AntdRegistry';
import { Layout } from 'antd';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MSD',
  description: 'MSD test assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Layout>
      </body>
    </html>
  )
}
