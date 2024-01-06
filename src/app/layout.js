import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Invest Rate PL',
  description: 'Polish investor tax tool for foreign profits',
}

export default function RootLayout({ children, params }) {
    return (
        <html lang="en">
        <body className="flex flex-col h-full">
        <Header />
        <main className="flex-auto container">
            { children }
        </main>
        <Footer />
        </body>
        </html>
    )
}
