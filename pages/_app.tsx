import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import Logo from 'public/Logo.jpg';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="bg-slate-100 container-fluid">
    <Head>
      <title>MaliCovid19</title>
      <link rel="icon" href="/logo.ico" />
    </Head>
    <NavBar />
    <div className="px:auto sm:px-16 bg-zinc-50 h-screen">
      <Component {...pageProps} />
    </div>
    {/* <Footer /> */}
  </div>
  )
}

export default MyApp
