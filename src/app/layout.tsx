import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'


const bebas = localFont({
  src: './fonts/bebasRegular.ttf',
  display: 'swap',
  variable: '--font-bebas'
})

const inter = localFont({
  src: [
    {
      path: './fonts/InterRegular.ttf',
      weight: '400',
      style:'regular',
    },
    {
      path: './fonts/InterBold.ttf',
      weight: '700',
      style:'bold',
    },
    {
      path: './fonts/InterBlack.ttf',
      weight: '900',
      style:'black',
    },
  ],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Tarcio Marques | Personal trainer',
  description: 'Desenvolvido por Dilley Andrade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={`${bebas.variable} ${inter.variable} scroll-smooth scroll-py-8`}>
      <body className='bg-bgColor scroll-smooth'>
          {children}
      </body>
    </html>
  )
}
