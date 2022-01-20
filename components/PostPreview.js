import React from "react";
import PostPreviewStyle from "../styles/PostPreview.module.css"
import Image from 'next/image'

const PostPreview = ({post}) => {

  let authors = "";
	let tags = "";

	//Provjera da li postoji više autora 
	post.Authors.forEach(function(author, index, array){
		authors += author.firstname;
		const isLastElement = index == (array.length - 1);
		if(!isLastElement){
			authors += ", "; 
		}		
	})
//Provjera da li postoji više tagova
	post.Tags.forEach(function(tag, index, array){
	  tags += tag.Name;
		const isLastElement = index == (array.length - 1);
		if(!isLastElement){
			tags += ", "; 
		}		
	})

	return (
			<div className={PostPreviewStyle.postPreview}>
				<span className={PostPreviewStyle.postCategory}>{tags}</span>
				<span className={PostPreviewStyle.postDate}>{post.Date}</span>	
				<h3>{post.Title}</h3>
			</div>
	  );
}
 

export default PostPreview;