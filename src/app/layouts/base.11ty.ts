import navigation from '../components/navigation'

interface PageProps {
  title: string;
  content: string;
}

module.exports = ({ title, content }: PageProps) => `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title || 'Hello world'}</title>
      <link rel="stylesheet" type="text/css" href="/css/layout.css">
    </head>
    <body id="container">

      <header>
        ${navigation}
      </header>
      <main id="main">
        ${content}
      </main>
    </body>
  </html>
`
