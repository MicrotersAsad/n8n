import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'AutoFlow Pro - Professional N8N Automation Services',
  description: 'Transform your business with custom n8n automation workflows. Save time, reduce errors, and scale efficiently with our professional automation services.',
  keywords: 'n8n automation, workflow automation, business automation, process automation, integration services',
  authors: [{ name: 'AutoFlow Pro' }],
  openGraph: {
    title: 'AutoFlow Pro - Professional N8N Automation Services',
    description: 'Transform your business with custom n8n automation workflows.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoFlow Pro - Professional N8N Automation Services',
    description: 'Transform your business with custom n8n automation workflows.',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}