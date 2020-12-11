import { UserOutlined } from '@ant-design/icons';
import { List, Tag } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../constants/styles';
import { INewsDetails } from '../../interfaces/news';

const NewsCard = styled(List.Item)`
	display: block;
	padding: 10px;
`;

const NewsTitle = styled.h3`
	margin-bottom: 10px;
	color: ${MAIN_COLOR};

	:last-child {
		margin-bottom: 10px;
	}
`;

const NewsComment = styled.div`
	margin-top: 10px;
	overflow-wrap: break-word;
`;

const NewsTag = styled(Tag)`
	margin-bottom: 5px;
	overflow: hidden; 
	max-width: 100%;

`;

interface ResultCardProps {
	children: INewsDetails;
}

const ResultCard = (props: ResultCardProps) => {
	const {
		url,
		story_url,
		points,
		author,
		created_at,
		num_comments,
		_highlightResult,
	} = props.children;
	const formateDate = new Date(created_at).toDateString();
	const hasUrl = (_highlightResult.url && _highlightResult.url.value !== '') || (_highlightResult.story_url && _highlightResult.story_url.value !== '');
	return (
		<NewsCard>
			<a href={story_url || url} target="_blank" rel="noreferrer">
				<NewsTitle dangerouslySetInnerHTML={{ __html: _highlightResult.story_title ? _highlightResult.story_title.value : _highlightResult.title.value }} />
			</a>
			<NewsTag color="#f50">{`${points} points`}</NewsTag>
			<NewsTag icon={<UserOutlined />} color="#2db7f5">{author || 'Ano'}</NewsTag>
			<NewsTag color="#87d068">{formateDate}</NewsTag>
			<NewsTag color="#108ee9">{`${num_comments ? num_comments : 0} comments`}</NewsTag>
			{hasUrl &&
				<NewsTag color="#868686">
					<a href={story_url || url} target="_blank" rel="noreferrer">
						<span dangerouslySetInnerHTML={{ __html: _highlightResult.story_url ? _highlightResult.story_url.value : _highlightResult.url.value }} />
					</a>
				</NewsTag>
			}
			<NewsComment dangerouslySetInnerHTML={{ __html: _highlightResult.comment_text ? _highlightResult.comment_text.value : '' }} />
		</NewsCard>
	);
};

export default ResultCard;
