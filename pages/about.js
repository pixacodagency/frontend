import styles from '../styles/About.module.css';
import Meta from '../components/Meta'

const  about = () => {
	return ( 
      <div>
      <Meta title='About | Pixacod' />
      <section className={styles.HeroAbout}>	
          <div className={styles.AboutContainer}></div>
          <div className={styles.bannerBg}></div>	
          <div className={styles.curve}></div>						
      </section>
      </div>
	 );
}
export default about;