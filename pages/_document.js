import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Design, functionality, and finishing give every home its unique personality. At Triple C Woodworx, our priority is to find the perfect balance of these key components to fit your needs. Let us help you get the most out of your home renovation. Contact us today to start your unique creation!"
          />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content="Triple C Woodworx" />
          <meta
            property="og:description"
            content="Design, functionality, and finishing give every home its unique personality. At Triple C Woodworx, our priority is to find the perfect balance of these key components to fit your needs. Let us help you get the most out of your home renovation. Contact us today to start your unique creation!"
          />
          <meta property="og:url" content="https://triplec.ca" />
          <meta
            property="og:image"
            content="https://triplec.ca/img/triplec-logo.png"
          />
          <meta property="og:image:width" content="250" />
          <meta property="og:image:height" content="79" />
          <meta
            property="business:contact_data:street_address"
            content="15431 110 Avenue"
          />
          <meta property="business:contact_data:locality" content="Edmonton" />
          <meta property="business:contact_data:region" content="Alberta" />
          <meta property="business:contact_data:postal_code" content="T5P1E5" />
          <meta
            property="business:contact_data:country_name"
            content="Canada"
          />

          <link rel="author" href="humans.txt" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Mansalva|Fjalla+One|Open+Sans&display=optional"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
