import styles from '../styles/404.module.css'
import Link from 'next/link'
import Image from 'next/image'

const NotFoundPage = () => {

	return (  
		<>
			<section className={styles.HeroError}>
			  <div className={styles.BannerContainer}>
					<article className={styles.HeaderContent}>
						<div className={styles.Headline}>
							<h1 className={styles.heading2}>uh oh, page not found</h1>
						</div>
					</article>	
				</div>	
				<div className={styles.curve}></div>
			</section>
			<div className={styles.errorContainer}>
				<div className={styles.notFound}>		 
						<Image  src="/yacht.svg" alt="Yacht" height={152} width={152} /> 
						<h1 className={styles.display}>Ahoy 404!</h1>
						<p>It looks like you were travelling in the wrong direction. Hit back or return to home.</p>
						<Link href="/">
							<a className={styles.blueBtn}>Return to home</a>
						</Link>
				</div>
			</div>
		</>
	);
}
 
export default NotFoundPage ;