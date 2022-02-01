import React from "react";
import Link from 'next/link';
import axios from 'axios';
import Meta from '../../components/Meta';
import styles from '../../styles/Blog.module.css';
import Image from 'next/image';
import AllPosts from "../../components/AllPosts";

const PostList = ({ posts }) => {
	return ( 
			<>
				<Meta title='Blog | Pixacod' />
			  <section className={styles.HeroBlog}>
					<div className={`${styles.container} ${styles.large}`}>	
						<article>
							<h1>from the pixacod</h1>			  
							<p>Articles,News,Tips,Help and Some Rambling.</p>
						</article>
					</div>
					<div className={styles.bannerBg}></div>
					<div className={styles.curve}></div>	
			  </section>
				<section className={styles.featuredAllPost}>
					<section className={styles.BlogContainer}>
							<h1>Naslov</h1>		
							<div className={styles.grid}>
								<AllPosts posts={posts} />	
						  </div>
							<Link href="/">
								<a>Go Back</a>
						</Link>
					</section>			
				</section>
			</>
	);
}

 export default PostList;


 export async function getStaticProps(){
  const postsRes = await axios.get("http://localhost:1337/posts");

  return{
    props:{
      posts: postsRes.data
    },
  };
}


 

 