import React, { useEffect } from 'react'
import NextApp from 'next/app'
import Head from 'next/head'

import Meta from '@hackclub/meta'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta as={Head} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
