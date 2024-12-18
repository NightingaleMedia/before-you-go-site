import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../src/theme";

// https://material-ui.com/styles/advanced/#next-js
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta content={theme.palette.primary.main} name="theme-color" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://use.typekit.net/wzi6jhs.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
