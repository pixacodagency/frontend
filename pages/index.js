import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'


export default function Home({ articles }) {
  return (
    <div>
      <Head>
      {/*Primary Meta Tags*/}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"></meta>
       <title>Digital creative agency | Pixacod</title>
       <meta name="description" content="Pixacod is a creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
       {/*Google / Search Engine Tags*/}
       <meta itemProp="name" content="Digital creative agency | Pixacod"></meta>
       <meta itemProp="description" content="Pixacod is a creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
       <meta itemProp="image" content="https://res.cloudinary.com/pixacod-agency/image/upload/v1625495570/website/meta-image_ic13p4.jpg"></meta>
      {/*Open Graph / Facebook*/}
      <meta property="og:url" content="https://pixacod.agency/"></meta>
      <meta property="og:type" content="website"></meta>  
      <meta property="og:title" content="Digital creative agency | Pixacod"></meta>
      <meta property="og:description" content="Pixacod is a creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
      <meta property="og:image" content="https://res.cloudinary.com/pixacod-agency/image/upload/v1625495570/website/meta-image_ic13p4.jpg"></meta>
      {/*Twitter Meta Tags*/}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content="Digital creative agency | Pixacod"></meta>
      <meta name="twitter:description" content="Pixacod is a creative agency specializing in Branding, Digital Marketing, UX/UI Design, Custom Development, & eCommerce."></meta>
      <meta name="twitter:image" content="https://res.cloudinary.com/pixacod-agency/image/upload/v1625495570/website/meta-image_ic13p4.jpg"></meta>
      </Head> 
      <h1>Welcome to PIXACOD</h1>
      <ArticleList articles={articles} />
      <Link href="/blog/">          
        <a className={styles.btn}>See Blog Listing</a>
      </Link>
    </div>
  )
}

export const getStaticProps = async () => {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}