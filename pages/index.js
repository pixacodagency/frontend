import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
     
    <div>
      <Head>
      {/*Primary Meta Tags*/}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"></meta>
       <title>Digital creative agency | Pixacod</title>
       <meta name="description" content="Full-service creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
       {/*Google / Search Engine Tags*/}
       <meta itemProp="name" content="Digital creative agency | Pixacod"></meta>
       <meta itemProp="description" content="Full-service creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
       <meta itemProp="image" content="http://gallery.mailchimp.com/c6baa8aa4b5cc2d85bb8672d8/images/660eea0d-bd7a-4923-af74-eb5513569f1e.png"></meta>
      {/*Open Graph / Facebook*/}
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://pixacod.agency/"></meta>
      <meta property="og:title" content="Digital creative agency | Pixacod"></meta>
      <meta property="og:description" content="Full-service creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
      <meta property="og:image" content="http://gallery.mailchimp.com/c6baa8aa4b5cc2d85bb8672d8/images/660eea0d-bd7a-4923-af74-eb5513569f1e.png"></meta>
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
