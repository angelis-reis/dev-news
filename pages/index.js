import { useEffect, useState } from 'react';

import styled from 'styled-components';
import Header from '../components/Header';
import NewsCard from '../components/NewsCard';
import axios from 'axios';
import newsApiKey from '../sensitive/newsApiKey';

const NewsWrapper = styled.div`
	margin-left: 70px;
	margin-right: 70px;
	display: inline-flex;
	flex-wrap: wrap;
	gap: 22px;
	justify-content: space-around;
`;

export default function Home() {
	const [newsList, setNewsList] = useState([]);

	async function fetchNews() {
		const requestNews = await axios.get(
			`https://newsapi.org/v2/everything?q=javascript&sortBy=popularity&language=pt&apiKey=${newsApiKey}`
		);
		console.log('Koca: requestNews ', requestNews);

		setNewsList(requestNews.data.articles);
	}

	useEffect(() => {
		fetchNews();
	}, []);

	console.log('Koca: newsList ', newsList);

	return (
		<>
			<Header />
			<NewsWrapper>
				{newsList.map((news) => (
					<NewsCard
						// publisherLogo={news.publisherLogo}
						newsLink={news.url}
						newsTitle={news.title}
						newsMetadata={news.publishedAt}
						urlImg={news.urlToImage}
					/>
				))}
			</NewsWrapper>

			{/* <h1> homepage</h1> */}
		</>
	);
}
