import styles from '../styles/Contact.module.css'
import Meta from '../components/Meta'
import Image from 'next/image'
import bannerPic from '../public/banner-curve.svg'

const Contact = () => {
	return ( 
	 <>
			<Meta title='Contact | Pixacod' />
			<section className={styles.HeroContact}>	
					<div className={styles.curve}>
						<Image  src={bannerPic} alt="Banner" height={141} width={1440} />
					</div>
				  <div className={styles.ContactContainer}>
						 <article>
							<h1 className={styles.heading3}>Let’s start a project together.</h1>
						</article>
					</div>		
			</section>
	 </>
	);
}
 
export default Contact;