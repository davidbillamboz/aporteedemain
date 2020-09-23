import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const isProduction = process.env.NODE_ENV === 'production';
    return { ...initialProps, isProduction };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <Html className="bg-white antialiased">
        <Head>
          <script
            type="text/javascript"
            src="/tarteaucitronjs/tarteaucitron.js"
          />
          {isProduction && (
            <script
              type="text/javascript"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
                tarteaucitron.user.gtagUa = '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}';
                tarteaucitron.user.gtagMore = function () {};
                (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
              `,
              }}
            />
          )}
          <script
            type="text/javascript"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              tarteaucitron.init({
                orientation: 'bottom',
                privacyUrl: '/politique-de-confidentialite',
                highPrivacy: true, /* Disable auto consent */
                removeCredit: true,
                cookieName: 'tarteaucitron', /* Cookie name */
                showAlertSmall: false, /* Show the small banner on bottom right */
                handleBrowserDNTRequest: true,
              });              
              `,
            }}
          />
        </Head>
        <body className="font-body text-deepKoamaru">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
