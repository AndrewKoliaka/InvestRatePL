import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Invest Rate PL',
  description: 'Polish investor tax tool for foreign profits',
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ua' }, { lang: 'pl' }]
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className="flex flex-col h-full">
      <Header />
      <main className="flex-auto">
          { children }
      </main>
      <Footer />
      </body>
    </html>
  )
}
