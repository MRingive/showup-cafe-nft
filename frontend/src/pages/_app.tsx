import React from "react"

import { AppProps } from "next/app"

import "../styles/tailwind.scss"
import "../styles/simple.scss"
import "../styles/simple-custom.scss"
import DefaultHead from "@components/DefaultHead"
import DefaultLayout from "@components/layout/DefaultLayout"
import SWRErrorConfig from "@components/SwrErrorConfig"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SWRErrorConfig>
      <DefaultHead />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SWRErrorConfig>
  )
}

export default MyApp
