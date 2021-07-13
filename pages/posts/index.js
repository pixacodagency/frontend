import Meta from '../../components/Meta'
import ArticleList from '../../components/ArticleList'
import styles from '../../styles/Blog.module.css'

const PostList = ({ articles }) => {
	return ( 
		<div>
			<Meta title='Blog | Pixacod' />
			<h1 className={styles.title}>Blog PAGE</h1>
			<ArticleList articles={articles} />
	 </div>
			);
}
 
export default PostList;

export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=8`)
	const articles = await res.json()
	 
	
		return {
			props: {
				articles,
			},
		}
	}