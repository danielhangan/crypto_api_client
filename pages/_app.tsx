import '../styles/globals.css'
import '../styles/nprogress.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Router from 'next/router'
import nProgress from 'nprogress'

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    ) 
}

export default MyApp
