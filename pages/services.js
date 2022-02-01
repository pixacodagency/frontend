import Meta from '../components/Meta'
import styles from '../styles/Services.module.css'

const Services = () => {
	return ( 
		<div>
			<Meta title='Services | Pixacod' />
			<section className={styles.HeroServices}>
				<div className={`${styles.container} ${styles.large}`}>	
					<article>
						<h1>Building digital products, brands,<br/>and experiences</h1>		  
					</article>
				</div>
				<div className={styles.bannerBg}></div>
				<div className={styles.curve}></div>	
		</section>		
		</div>
	 );
}
export default Services;