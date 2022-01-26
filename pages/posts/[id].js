import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
import Meta from '../../components/Meta';
import Image from 'next/image';
import bannerPic from '../../public/banner-curve.svg'
import styles from '../../styles/BlogPost.module.css';


const PostPage = ({post}) => {
	// markdown code conver to html
	const md = new MarkdownIt();
	const htmlContent = md.render(post.Content);

	let authors = "";
	let avatarImagesSrc = [];


		//Provjera da li postoji više autora 
		post.Authors.forEach(function(author, index, array){
			authors += author.firstname;
			const isLastElement = index == (array.length - 1);
			if(!isLastElement){
				authors += ", "; 
			}		
		})

		post.Avatars.forEach(function(avatar, index, array){
			avatarImagesSrc.push(avatar.AuthorProfile.url);
		})
	
	return ( 
		<>
		<Meta title={post.PostSEO.SeoTitle} description={post.PostSEO.SeoDescription} />
		<section className={`${styles.PostHero} ${styles.darkHero}`}>	 
			<div className={styles.container}>
				<div className={styles.article}>
					<div className={styles.authorIntro}>					
						{avatarImagesSrc.map(function(img, index){
							return <Image width={50} height={50} src={img} alt={post.Title} key={index} />;
						})}
					</div>
				</div>
			</div>
		</section>
		<article>		
			<section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
		</article>
		</>
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

