import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script';
import Header from '../Components/Header'; 
import Footer from '../Components/Footer';  

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/> 
      <Component {...pageProps} />
      <Footer/>
     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    </>
  )

  
}
