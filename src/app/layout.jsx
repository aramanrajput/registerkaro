

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Company Directory</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
