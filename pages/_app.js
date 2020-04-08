import App from 'next/app';
import '../styles/index.css';
import Head from 'next/head';

export default class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props
  
      return (
        <>
          <Head>
            <title>Chetan Raj</title>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </>
      )
    }
  }