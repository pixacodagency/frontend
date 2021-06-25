import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>

    <Head>
        <title>Pixacod</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
       
      <Navbar />
      <h2>Home Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quas voluptates, obcaecati sequi corrupti ab autem odio fugiat ipsa perferendis consectetur, molestias dolor, perspiciatis assumenda dolorem. Asperiores, possimus. Ad, harum.</p>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi perferendis non, quibusdam fugit ea magnam hic dolorum? Sint facilis consequuntur voluptate vitae provident! Unde labore aperiam accusamus expedita dicta quasi!</h1> 
      <Footer />
    </div>
    
  )
}
