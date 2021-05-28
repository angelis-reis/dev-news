import styled from 'styled-components';

import Header from '../components/Header';
import NewsCard from '../components/NewsCard';

const NewsWrapper = styled.div`
	margin-left: 70px;
	margin-right: 70px;

	display: inline-flex;
	flex-wrap: wrap;
	gap: 22px;
	justify-content: space-around;
`;

export default function Home() {
	return (
		<>
			<Header />

			<NewsWrapper>
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
				<NewsCard />
			</NewsWrapper>

			{/* <h1> homepage</h1> */}
		</>
	);
}
