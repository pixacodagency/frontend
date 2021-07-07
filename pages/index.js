import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'


export default function Home({ articles }) {
  return (
    <div>
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

