import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '@/components/navbar'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Doremi</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
