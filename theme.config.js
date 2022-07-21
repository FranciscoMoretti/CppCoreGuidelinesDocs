export default {
  github: 'https://github.com/isocpp/CppCoreGuidelines',
  docsRepositoryBase: 'https://github.com/isocpp/CppCoreGuidelines/tree/master',
  titleSuffix: ' – C++',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">C++</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Core Guidelines
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="C++ Core Guidelines" />
      <meta name="og:description" content="C++ Core Guidelines" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="C++ Core Guidelines" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="C++ Core Guidelines" />
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href="/favicon-196x196.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: '',
  footerText: <>C++ Core Guidelines {new Date().getFullYear()}.</>,
}
