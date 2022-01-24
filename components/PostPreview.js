import React from "react";
import Link from "next/link";
import PostPreviewStyle from "../styles/PostPreview.module.css"
import Image from 'next/image'

const PostPreview = ({post}) => {

  let authors = "";
	let tags = "";
	let avatarImagesSrc = [];

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

	post.Avatars.forEach(function(avatar, index, array){
		avatarImagesSrc.push(avatar.AuthorProfile.url);
	})

	return (
			<Link href={`/posts/${post.id}`}>
				<div className={PostPreviewStyle.postPreview}>
					<div className={PostPreviewStyle.postImage}>
						<div className={PostPreviewStyle.MediaWrapper}>
							<Image width={480} height={320} src={post.Cover.url} alt={post.Title} />
						</div>
					</div>
					<span className={PostPreviewStyle.postCategory}>{tags}</span>
					<h3>{post.Title}</h3>
					<p>{post.Description}</p>
					<div className={PostPreviewStyle.blogAuthor}>
							<div className={PostPreviewStyle.blogAuthorProfile}>	
									{avatarImagesSrc.map(function(img, index){
										return <Image width={40} height={40} src={img} alt={post.Title} key={index} />;
									})}
							</div>
							<div className={PostPreviewStyle.blogAuthorBox}>
									<span className={PostPreviewStyle.blogAuthorName}>{authors}</span>
							</div>
					</div>
				</div>
			</Link>
	  );
}
 

export default PostPreview;