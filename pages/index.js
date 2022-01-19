import Link from 'next/link'
import axios from 'axios';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import HomeLatestPosts from '../components/HomeLatestPosts';

export default function Home({ posts }) {
  return (
    <>
      <Header />
       <section className={styles.contentWrapper}>
          <HomeLatestPosts posts={posts} />
          <Link href="/posts">
            <a>Read more posts</a>
          </Link>
      </section>
    </>
  );
}

export async function getServerSideProps(){
  const postsRes = await axios.get("http://localhost:1337/posts");
  
  return{
    props:{
      posts: postsRes.data
    },
  };
}