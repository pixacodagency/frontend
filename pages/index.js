import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
     
    <div>
      <Head>
      {/*HTML Meta Tags*/}
       <title>Digital creative agency | Pixacod </title>
       <meta name="description" content="A digital creative agency specializing in branding, UX/UI design, custom development & ecommerce."></meta>
       {/*Google / Search Engine Tags*/}
       <meta itemProp="name" content="Digital creative agency | Pixacod"></meta>
       <meta itemProp="description" content="A digital creative agency specializing in branding, UX/UI design, custom development & ecommerce."></meta>
       <meta itemProp="image" content="http://gallery.mailchimp.com/c6baa8aa4b5cc2d85bb8672d8/images/660eea0d-bd7a-4923-af74-eb5513569f1e.png"></meta>
      {/*Facebbok Meta Tags*/}
      <meta property="og:url" content="http://pixacod.agency/">
      </Head>
      <h1 className={styles.title}>Get a better UX job</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/blog/">
        <a className={styles.btn}>See Blog Listing</a>
      </Link>
    </div>
  )
}
