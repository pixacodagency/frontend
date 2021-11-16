import styles from '../styles/404.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bannerPic from '../public/banner-curve.svg'

const NotFoundPage = () => {

	return (  
		<>
			<section className={styles.HeroError}>	
				<div className={styles.curve}>
					<Image  src={bannerPic} alt="Banner" height={141} width={1440} />
				</div>
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