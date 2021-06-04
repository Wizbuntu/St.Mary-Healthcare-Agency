
// Navbar 
import Navbar from '../components/Navbar'

// Footer 
import Footer from '../components/Footer'


// Head
import Head from 'next/head'

// loadjs
import loadjs from 'loadjs'

// useEffect 
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

  // init useEffect 
  useEffect(() => {
    
    // require js files
    loadjs('/vendors/@popperjs/popper.min.js', () => {
      loadjs('/vendors/bootstrap/bootstrap.min.js', () => {
        loadjs('/vendors/is/is.min.js', () => {
          loadjs('https://polyfill.io/v3/polyfill.min.js?features=window.scroll', () => {
            loadjs('/assets/js/theme.js')
          })
        })
      })
    });
  }, [])
  return(
    <>
      <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <title>Home | ST MARY INTERNATIONAL</title>


            <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/icons/stmary-logo.png" />
            <meta name="theme-color" content="#ffffff" />

            <link href="/assets/css/theme.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500&amp;display=swap" rel="stylesheet" />
      </Head>

    <main className="main" id="top">

      <Navbar/>
      <Component {...pageProps} />
      <Footer/>

    </main>
    

    </>
  ) 
}
export default MyApp
