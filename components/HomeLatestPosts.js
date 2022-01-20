import React, { useEffect, useState } from "react";
import PostPreview from '../components/PostPreview';

const HomeLatestPosts = ({ posts }) => {
	
	// Učitavanje posljednja 3 posta
	const [latestPosts, setLatestPosts] = useState([]);
	
	useEffect(() => {
		setLatestPosts(posts.slice(0, 3));
	}, [posts]);

  function renderPostPreviews(){
		return latestPosts.map((post) =>{
			return <PostPreview  post={post} key={post.id} />
		});
	}

	return ( 
		<>
			{renderPostPreviews()}
		</>
	 );
}
 
export default HomeLatestPosts;

