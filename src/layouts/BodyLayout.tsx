import React from 'react';
import styled from 'styled-components';
import { PADDING_SPACE } from '../constants/styles';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import SearchFilter from '../components/SearchFilter';

const Layout = styled.div`
	padding: 0 ${PADDING_SPACE};

	@media only screen and (max-width: 800px) {
		padding: 0 20px;
	}
`;

const BodyLayout = (): JSX.Element => (
	<Layout>
		<SearchBar />
		<SearchFilter />
		<SearchResults />
	</Layout>
);

export default BodyLayout;
