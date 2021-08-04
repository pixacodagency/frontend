import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'
import Button from '../components/Button'

export default function Home({ articles }) {
  return (
    <section className={styles.contentWrapper}>
      <section className={styles.aboutFeature}>
        <div className={`${styles.grid} ${styles.about}`}>
          <div className={styles.richText}>
             <h1>Experiences with impact</h1>
             <p><span className={styles.leadParagraph}>Pixacod is a creative digital agency building brands, campaigns, and ecommerce experiences delivering commercial success for our partners.</span></p>
          </div>
        </div>
      </section>
      <section className={`${styles.blogSection} ${styles.blogFaature}`}>
        <div className={`${styles.container} ${styles.grid} ${styles.News}`}>
          <div className={styles.newsHeader}>
          <div className={styles.pageHeader}>
            <h3 className={styles.bold}>What’s new?<br></br>Our blog and news</h3>
          </div>
          </div> 
          <div className={styles.blog}>
            <ArticleList articles={articles} />
            <Link href='/posts'>
              <a>All posts</a>
            </Link>
            <br></br>
            <Button /> 
          </div>        
        </div>  
        </section>
    </section>
  )
}
export const getStaticProps = async () => {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
const articles = await res.json()
 

  return {
    props: {
      articles,
    },
  }
}

