import React from "react";
import axios from 'axios';
import Meta from '../../components/Meta'
import styles from '../../styles/Blog.module.css'
import Image from 'next/image';
import bannerPic from '../../public/banner-curve.svg'
import AllPosts from "../../components/AllPosts";

const PostList = ({ posts }) => {
	return ( 
			<>
				<Meta title='Blog | Pixacod' />
			  <section className={styles.HeroBlog}>
					<div className={styles.curve}>
						<Image  src={bannerPic} alt="Banner" height={141} width={1440} />
					</div>
					<div className={`${styles.container} ${styles.large}`}>	
					  <h1>from the pixacod</h1>			  
					  <p>Articles, News, Tips, Help and Some Rambling.</p>
					</div>
			  </section>
				<section className={styles.BlogContainer}>
						<h1>Naslov</h1>		
						<AllPosts posts={posts} />				
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


 

 