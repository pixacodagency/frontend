import styles from '../styles/contact.module.css'
import Meta from '../components/Meta'
import Image from 'next/image'
import bannerPic from '../public/banner-curve.svg'

const Contact = () => {
	return ( 
	 <>
			<Meta title='Contact | Pixacod' />
			<section className={styles.HeroContact}>	
					<div className={styles.ContactContainer}></div>
					<div className={styles.bannerBg}></div>	
					<div className={styles.curve}></div>						
			</section>
	 </>
	);
}
 
export default Contact;