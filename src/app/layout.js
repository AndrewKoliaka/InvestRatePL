import './globals.css'
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Invest Rate PL',
  description: 'Polish investor tax tool for foreign profits',
}

const styles = {
    minHeight: `calc(100vh - (100px + 100px))` // 100vh - (header + footer)
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
      <main style={ styles }>
          { children }
      </main>
      <Footer />
      </body>
    </html>
  )
}
