import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head> 
      <body>
        <div className="fixed top-[90px] left-0 right-0 bottom-0 flex justify-center items-center z-[-10]">
          <iframe loading="lazy" className="w-full h-full" src="https://app.vectary.com/p/1jKTeMq6cXDjSz2yG7HRKg" frameBorder="0" width="auto" height="auto"></iframe>
        </div>        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
