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
          <link
            href="https://fonts.googleapis.com/css2?family=Krub:wght@400;600;700&family=Montserrat:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
          {isProduction && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                    var doNotTrack = navigator.doNotTrack ? navigator.doNotTrack === "1" || navigator.doNotTrack === "yes": (window.doNotTrack? window.doNotTrack === "1": false);
                    if (!doNotTrack) {
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'analytics_storage': 'denied'
                      });                    
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {
                        page_path: window.location.pathname,
                      });
                    }
                  `,
                }}
              />
            </>
          )}
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
