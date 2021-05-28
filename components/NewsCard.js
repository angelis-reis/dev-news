import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import TvIcon from '@material-ui/icons/Tv';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CommentIcon from '@material-ui/icons/Comment';

const CardStyle = styled.div`
	/* max-width: 340px;
	min-width: 270px; */
	width:280px;
	padding: 8px 0;
	/* -webkit-box-direction: normal; */
	/* -webkit-box-orient: vertical; */
	height: 360px;
	border: 1px solid rgba(233, 234, 236, 0.08);
	border-radius: 16px;
	/* box-shadow: 0 0 80px -15px rgba(0, 0, 0, 0.4); */
	/* margin-right: auto; */
	/* margin-left: auto; */
	background-color: #25282c;
	display: grid;
	grid-template-rows: 45px 1fr 40px;

	&:hover {
		border: 1px solid #474b52;
	}

	.cardHeader {
		margin: 8px 16px 8px 24px;
		width: 30px;
		height: 30px;
		background-color: #fff;
		border-radius: 50%;
	}

	.cardHeader img {
		width: 70%;
		padding-left: 4px;
		height: 100%;
	}

	.postLink {
		text-decoration: none;
		display: grid;
		grid-template-rows: 70px 45px 160px;
		cursor: pointer;
	}

	.postTitle {
		color: #fff;
		font-size: 14px;
		font-weight: 300;
		letter-spacing: 0.56px;
		line-height: 20px;
		margin: 8px 24px;
		padding-top: px;
		/* font-size: 14px; */
	}
	.postMetadata {
		margin: 8px 24px;
		color: #686e78;
		font-size: 10px;
		line-height: 16px;
		letter-spacing: 0.4px;
		font-weight: 700;
		/* margin: 24px 24px 12px; */
	}
	.cardImage img {
		margin-left: 8px;
		border-radius: 16px;
		width: 95%;
		padding-left: auto;
		height: 100%;
	}

	.postButtons {
		padding-top: 20px;
		display: flex;
		place-items: center;
		margin: 4px 0px 8px 20px;
	}

	.postButtons span {
		padding-left: 10px;
	}
	.commentIcon {
		padding-left: 30px;
	}
`;

export default function NewsCard() {
	return (
		<CardStyle>
			<div className='cardHeader'>
				<img
					src='https://cdn.worldvectorlogo.com/logos/medium-1.svg'
					alt='Post Image'
				/>
			</div>
			<Link href='https://increment.com/containers/containers-and-open-source/'>
				<div className='postLink'>
					<div className='postTitle'>
						Este é um valor de título hardcoded no codigo
					</div>
					<div className='postMetadata'>Publicado em 17/05/21</div>
					<div className='cardImage'>
						<img
							src='https://tsh.io/wp-content/uploads/fly-images/19067/documenting-c4-810x531.jpg'
							alt='Post Image'
						/>
					</div>
				</div>
			</Link>

			<div className='postButtons'>
				<ArrowUpwardIcon />
				<span>43</span>
				<CommentIcon className='commentIcon' />
				<span>5</span>
			</div>
		</CardStyle>
	);
}
