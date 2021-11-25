import postStyle from '../styles/Postcard.module.css';
import Image from 'next/image';

const PostCard = ({ post }) => {
	return ( 
		 <div className={postStyle.postCard}>
		    <Image src={`/${post.media}.png`} alt="image" width="485" height="190" />
		 		<div>
					<h2>{post.title}</h2>
					<p>{post.author}</p>
					<p>{post.category}</p>
				</div>
		</div>
	);
}
export default PostCard;