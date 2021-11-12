import styles from '../styles/404.module.css'
import Link from 'next/link'

const NotFoundPage = () => {

	return (  
		
		<div className={styles.notFound}>
			<h1>Ooooops...</h1>
			<h2>That page cannot be found.</h2>
			<p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
		</div>
	);
}
 
export default NotFoundPage ;