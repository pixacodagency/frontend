import styles from '../styles/Contact.module.css';
import Meta from '../components/Meta'

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