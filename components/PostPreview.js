import React from "react";

const PostPreview = ({post}) => {

  let authors = "";
	let tags = "";

	post.Authors.forEach(function(author, index, array){
		authors += author.firstname;
		const isLastElement = index == (array.length - 1);
		if(!isLastElement){
			authors += ", "; 
		}		
	})

	post.Tags.forEach(function(tag, index, array){
	  tags += tag.Name;
		const isLastElement = index == (array.length - 1);
		if(!isLastElement){
			tags += " , "; 
		}		
	})

	return (
			<>
			  <span>{tags}</span>	
			  <span>{post.Date}</span>	
				<span>{authors}</span>		
				<h3>{post.Title}</h3>
			</>
	  );
}
 

export default PostPreview;