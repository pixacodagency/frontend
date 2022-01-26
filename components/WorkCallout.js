
import styles from "../styles/WorkCallout.module.css"
import Link from 'next/link';

const WorkCallout = () => {
	return ( 
			<section className={styles.Callout}>
				<div className={styles.container}>
					<h2>Got an idea?
						<Link href="/Contact">
							<a className={`${styles.specialLink} ${styles.turquoise}`}> Tell us about it</a>
					  </Link>
					</h2>
				</div>
			</section>	
	 );
}
 
export default WorkCallout;