import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html leng="en">
        <Head>
          <body>
            <div id="overlap"></div>
            <Main />

            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
