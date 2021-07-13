import Meta from '../../components/Meta'
import ArticleList from '../../components/ArticleList'

const Blog = ({articles}) => {
	return (    
		<div>
		  <Meta title='Blog | Pixacod' />
			<h1>All blog post</h1>	
			<ArticleList articles={articles} />		
		</div>
	);
}
 
export default Blog;

export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=4`)
	const articles = await res.json()
	 
	
		return {
			props: {
				articles,
			},
		}
	}

