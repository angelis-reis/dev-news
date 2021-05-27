import styled from 'styled-components';
import './styles/global.css';

// const Body = styled.div`
// 	background-color: black;
// 	width: 100%;
// 	height: 100vh;
// 	color: white;
// 	text-align: center;
// `;

function MyApp({ Component, pageProps }) {
	return (
		// <Body>
		<Component {...pageProps} />
		// </Body>
	);
}

export default MyApp;
