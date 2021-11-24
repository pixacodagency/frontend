import Image from 'next/image';

export default function PostCard() {
	return (
		<div className="post">
			<Image  src={`/posts`} alt="media post" height={485} width={190} />
		</div>
	)
}
