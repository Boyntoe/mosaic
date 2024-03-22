import { GoogleTagManager } from '@next/third-parties/google';
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <GoogleTagManager gtmId="GTM-PWDMVDDR" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
