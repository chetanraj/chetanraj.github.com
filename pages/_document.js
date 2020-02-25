import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
            <title>Chetan Raj</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;