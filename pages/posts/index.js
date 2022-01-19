import Meta from '../../components/Meta'
import styles from '../../styles/Blog.module.css'
import Image from 'next/image';
import bannerPic from '../../public/banner-curve.svg'

const PostList = () => {
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
					<ul className={styles.grid}>
						<h1>All posts</h1>
						<li className={styles.postCard}>
						</li>
					</ul>				
				</section>
			</>
	);
}

 export default PostList;

 

 