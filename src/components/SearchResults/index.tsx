import React, { useContext, useEffect } from 'react';
import { List, Spin, Pagination, Empty } from 'antd';
import styled from 'styled-components';
import { getMatchNews } from '../../services/getHackerNews';
import ResultCard from './ResultCard';
import { NewsContext } from '../../contexts/NewsContext';
import { SettingContext } from '../../contexts/SettingContext';
import { searchQuery } from '../../utils/queryGenerator';

const ResultsList = styled(List)`
	margin-top: 20px;
	min-height: 600px;
	border: 1px solid #d9d9d9;
	border-radius: 3px;
`;

const ResultPagination = styled(Pagination)`
	display: flex;
	justify-content: center;
	margin: 20px 0;
`;

const ResultEmpty = styled(Empty)`
	margin-top: 20px;
`;

const SearchResults = (): JSX.Element => {
	const [setting, setSetting] = useContext(SettingContext);
	const { filter, query } = setting;
	const {
		searchType,
		sortOrder,
		page,
		hitsPerPage,
	} = filter;

	const [news, setNews] = useContext(NewsContext);

	useEffect(() => {
		if (!news.isLoaded) {
			const assembleQuery = searchQuery(sortOrder, query, searchType, page, hitsPerPage);
			getMatchNews(assembleQuery).then(res => {
				const { hits, hitsPerPage, nbPages, nbHits, page } = res;
				const data = {
					hits,
					hitsPerPage,
					nbPages,
					nbHits,
					page,
				};
				setNews({
					data,
					isLoaded: true,
				});
			});
		}
	});

	const changePage = (event: number): void => {
		setSetting({
			...setting,
			filter: {
				...filter,
				page: event - 1,
			},
		});

		setNews({
			...news,
			isLoaded: false,
		});
	};

	const { isLoaded, data } = news;

	return (
		<div>
			<ResultsList>
				{isLoaded ?
					(data.nbHits !== 0 ?
						data.hits.map(item => {
							return <ResultCard key={item.objectID}>{item}</ResultCard>
						}) :
						<ResultEmpty />
						):
					<Spin style={{ marginTop: '40px'}} />
				}
			</ResultsList>
			{isLoaded
			&& (
				<ResultPagination
					defaultCurrent={page + 1 || 1}
					total={data.nbPages * 10}
					showSizeChanger={false}
					onChange={changePage}
				/>
			)}
		</div>
	);
};

export default SearchResults;
