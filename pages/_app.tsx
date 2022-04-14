import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="bg-slate-100">
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
}

export default MyApp
