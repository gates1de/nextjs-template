import React from 'react'
import App, { AppProps } from 'next/app'

import 'normalize.css/normalize.css'
import 'styles/global.css'

type BoilerplateAppProps = Partial<
  AppProps & {
    myProp: string
  }
>

export default class BoilerplateApp extends App<BoilerplateAppProps> {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}
