import React, { useContext } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { MAIN_COLOR } from '../../constants/styles';
import { SettingContext } from '../../contexts/SettingContext';
import { NewsContext } from '../../contexts/NewsContext';

const { Search } = Input;

const SearchInputLayout = styled(Search)`
	width: 100%;
	margin-top: 20px;

	button {
		background-color: ${MAIN_COLOR};
		border: none;
	}
`;

const SearchCard = (): JSX.Element => {
	const [setting, setSetting] = useContext(SettingContext);
	const [news, setNews] = useContext(NewsContext);

	const handleClick = (event) => {
		setSetting({
			...setting,
			query: event,
		});
		setNews({
			...news,
			isLoaded: false,
		});
	};

	return (
		<SearchInputLayout
			placeholder='Input Search Text'
			allowClear
			enterButton="Get Hacker News Now"
			prefix={<SearchOutlined />}
			onSearch={handleClick}
		/>
	);
};

export default SearchCard;
