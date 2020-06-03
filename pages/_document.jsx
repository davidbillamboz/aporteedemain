import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="bg-white antialiased">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Krub:wght@400;700&family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
