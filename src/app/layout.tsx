import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Image } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

import './globals.css'
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}
 
const banner = <Banner storageKey="some-key">Boxicons v3.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<div className='flex gap-2 items-center'><Image src={'/logo.png'} alt="brand" width="32" height="32"/> <span className='text-2xl font-bold'>Boxicons</span><div className='uppercase text-[10px] tracking-wider opacity-50'>docs</div></div>}
    // ... Your additional navbar options
  
   projectLink='https://github.com/atiswd/boxicons'

  />

)
const footer = <Footer> {new Date().getFullYear()} © Boxicons. All Rights Reserved</Footer>
 
export default async function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}