import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";

const PostPage = ({post}) => {
	// markdown code conver to html
	const md = new MarkdownIt();
	const htmlContent = md.render(post.Content);

	return ( 
		<article>
			<header>
				<h1>{post.Title}</h1>
				<h2>{post.Description}</h2>
			</header>
			<section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
		</article>
	 );
}
 export default PostPage;

export async function getStaticProps({params}){
	const postRes = await axios.get(`http://localhost:1337/posts/${params.id}`);

	return {
		props: {
			post: postRes.data
		}
	}
}
export async function getStaticPaths(){
const postsResponses = await axios.get("http://localhost:1337/posts");
const paths = postsResponses.data.map((post) => {
	return {params: {id: post.id.toString()}}
});
	return {
		paths,
		fallback: false,
	}
}

