import "@radix-ui/themes/styles.css";
import "styles/tailwind.css";
import { Theme } from "@radix-ui/themes";
import type { Metadata } from 'next'
import './globals.scss'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Graphigem',
  description: 'Delight your customer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        <Theme appearance="dark" accentColor="gray" grayColor="slate" scaling="100%" radius="full">
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  )
}
