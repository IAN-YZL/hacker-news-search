import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { NewsContext } from '../../contexts/NewsContext';
import { SettingContext } from '../../contexts/SettingContext';
import { SECOND_COLOR, SECOND_SHADOW_COLOR, MAIN_COLOR } from '../../constants/styles';

const FilterWrapper = styled(Row)`
	border: 1px solid ${SECOND_COLOR};
	background-color: ${SECOND_SHADOW_COLOR};
	padding: 0 20px;
	font-size: 12px;
	color: ${MAIN_COLOR};
	font-weight: 500;
	margin-top: 20px;
`;

const FilterCol = styled(Col)`
	height: 30px;
	line-height: 30px;
`;

const SearchFilter = (): JSX.Element => {
	const [news] = useContext(NewsContext);
	const { data, isLoaded } = news;
	const { nbHits } = data;

	const [setting] = useContext(SettingContext);
	const { searchType, sortOrder, hitsPerPage } = setting.filter;
	return (
		isLoaded
		&& (
		<FilterWrapper>
			<FilterCol lg={12} xs={24}>{`${nbHits} results found`}</FilterCol>
			<FilterCol lg={4} xs={24}>{`Search Type: ${searchType}`}</FilterCol>
			<FilterCol lg={4} xs={24}>{`Sort Order: ${sortOrder}`}</FilterCol>
			<FilterCol lg={4} xs={24}>{`Hits Per Page: ${hitsPerPage}`}</FilterCol>
		</FilterWrapper>
		)
	);
};

export default SearchFilter;
