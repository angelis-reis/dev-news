import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const HeaderStyle = styled.div`
	/* position: fixed; */
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-left: 32px;
	margin-bottom: 150px;
	height: 48px;
	background-color: black;
	border-bottom: 1px solid rgba(168, 179, 207, 0.2);
	color: red;
	/* position: fixed; */

	.logo {
		/* margin-left: 32px; */
		cursor: pointer;
	}

	.login {
		color: #cfd6e6;
		font-weight: bold;
		text-decoration: none;
		padding-left: 0px;
		padding-right: 64px;
		cursor: pointer;
	}
`;

const LoginStyle = styled.div`
	color: rgba(168, 179, 207, 0.2);
	text-decoration: none;
`;

function Header() {
	return (
		<>
			<HeaderStyle>
				<Link href='/'>
					<Image
						className='logo'
						src='/logo.png'
						alt='Logo'
						width='120px'
						height='40px'
					/>
				</Link>
				{/* <LoginStyle> */}
				<Link href='/login'>
					<span className='login' >
						Login
					</span>
				</Link>
				{/* </LoginStyle> */}
			</HeaderStyle>
		</>
	);
}

export default Header;
