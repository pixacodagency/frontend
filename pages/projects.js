import Meta from '../components/Meta'
import styles from '../styles/Projects.module.css'

const  Projects = () => {
	return ( 
      <div>
        <Meta title='Projects | Pixacod' />
        <section className={styles.HeroServices}>
          <div className={`${styles.container} ${styles.large}`}>	
            <article>
              <h1>Selected work</h1>			  
            </article>
          </div>
          <div className={styles.bannerBg}></div>
          <div className={styles.curve}></div>	
      </section>
      </div>

	 );
}

export default Projects;