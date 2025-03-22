import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://www.polkadotbrasil.com'),
  title: 'Polkadot Brasil - Smart City Expo Curitiba 2025',
  description: 'Polkadot Brasil te leva para a Smart City Expo Curitiba 2025',

    openGraph: {
        title: 'Polkadot Brasil - Smart City Expo Curitiba 2025',
        description: 'Polkadot Brasil te leva para a Smart City Expo Curitiba 2025',
        url: 'https://www.polkadotbrasil.com',
        siteName: 'Polkadot Brasil',
      images: [
          {
              url: 'https://www.polkadotbrasil.com/twitter-image.png',
              width: 800,
              height: 600,
          },
          {
                url: 'https://www.polkadotbrasil.com/opengraph-image.png',
              width: 1800,
              height: 1200,
          }

          ],
        locale: 'pt_BR',
        type: 'website',

    },
    twitter: {
        card: 'summary_large_image',
        title: 'Polkadot Brasil - Smart City Expo Curitiba 2025',
        description: 'Polkadot Brasil te leva para a Smart City Expo Curitiba 2025',
        images: ['https://www.polkadotbrasil.com/twitter-image.png'],
    } ,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-BR" className="dark">
      <body className={`${inter.className} bg-gradient-to-r from-black via-zinc-800 to-black`}>
      {children}
      </body>
      </html>
  );

}
