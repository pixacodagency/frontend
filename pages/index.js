import Link from 'next/link';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import HomeLatestPosts from '../components/HomeLatestPosts';
import WorkCallout from '../components/WorkCallout';

export default function Home({ posts }) {
  return (
    <>
      <Header />
      <section className={styles.featuredBlogPost}>
          <section className={styles.BlogsContent}>
              <section className={styles.ThreePostColumn}>
                <div className={styles.SectionContainer}>
                  <h1>Latest posts</h1>   
                  <div className={styles.grid}>
                    <HomeLatestPosts posts={posts} />                
                  </div>           
                  <Link href="/posts">
                    <a>Read more posts</a>
                  </Link>
                </div>
              </section>
          </section>
      </section>
      <section>
        <WorkCallout />
      </section>
    </>
  );
}

export async function getStaticProps(){
  const postsRes = await axios.get("http://localhost:1337/posts");
  
  return{
    props:{
      posts: postsRes.data
    },
  };
}