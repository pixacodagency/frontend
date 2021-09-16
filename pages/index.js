import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'

export default function Home({ articles }) {
  return (
    <section className={styles.contentWrapper}>
      <section className={`${styles.blogSection} ${styles.blogFaature}`}>
        <div className={`${styles.container} ${styles.grid} ${styles.News}`}>       
        </div>  
        </section>
    </section>
  )
}


