import './globals.css'
import { Suspense } from 'react'

import { Analytics } from '@vercel/analytics/react'
import Nav from './ui/nav'
// import Toast from './ui/toast'

export const metadata = {
  title: 'PHARMA-SURVEY',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full bg-gray-50'>
      <body className='h-full'>
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
        {/* <Toast /> */}
      </body>
    </html>
  )
}
