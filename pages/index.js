import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Header from '../components/Header'

export default function Home({ articles }) {
  return (
    <>
      <Header />
      <section className={styles.contentWrapper}>
       <section></section>
      </section>
    </>
  )
}


