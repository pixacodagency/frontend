import React, { useEffect, useState } from "react";
import PostPreview from '../components/PostPreview';

const HomeLatestPosts = ({ posts }) => {
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
			<h2>Latest posts</h2>
			{renderPostPreviews()}
		</>
	 );
}
 
export default HomeLatestPosts;

export async function getServerSideProps(){
  const postsRes = await axios.get("http://localhost:1337/posts");
  
  return{
    props:{
      posts: postsRes.data
    },
  };
}