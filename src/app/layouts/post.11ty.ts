interface BlogPostProps {
  title: string;
  page: any;
  content: string;
}

exports.data = {
  layout: 'base.11ty.js'
}

exports.render = ({ title, page, content }: BlogPostProps) => `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title || 'Hello world'}</title>
    <link rel="stylesheet" type="text/css" href="/css/layout.css">
  </head>
  <body id="container">
    <main id="main">
    <article>
    <h1>${title}</h1>
    <a href="/blog">Back</a>
      <time>${page.date}</time>
      ${content}
    </article>
    </main>
  </body>
</html>
`
