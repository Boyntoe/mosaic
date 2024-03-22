import { GoogleTagManager } from '@next/third-parties/google';
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <GoogleTagManager gtmId="GTM-PWDMVDDR" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
