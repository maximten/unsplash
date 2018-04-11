import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Unsplash</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=480"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}