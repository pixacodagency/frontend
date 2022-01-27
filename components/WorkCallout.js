
import styles from "../styles/WorkCallout.module.css"
import Link from 'next/link';

const WorkCallout = () => {
	return ( 
			<section className={styles.Callout}>
				<div className={`${styles.container} ${styles.CalloutCointainer}`}>		
					<div className={styles.CalloutContent}>
						<div className={styles.CalloutContentBody}>
							<div className={styles.CalloutMainContent}>	
								<h2>Got an idea?</h2>							
								<Link href="/contact">
									<a className={`${styles.specialLink} ${styles.turquoise} ${styles.linkHasUnderline}`}>Tell us about it</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>	
	 );
}
 
export default WorkCallout;