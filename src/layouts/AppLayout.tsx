import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import BodyLaydout from './BodyLayout';
import { SettingContext } from '../contexts/SettingContext';

type AppWrapperProps = {
	inSetting: boolean;
}

const AppWrapper = styled.div`
	background-color: ${(props: AppWrapperProps) => (props.inSetting ? 'rgba(193, 193, 193, 0.4)' : 'none')};
	opacity: ${(props: AppWrapperProps) => (props.inSetting ? '0.3' : '1')};

	em {
		background-color: #ff0!important;
		font-weight: 600;
		color: #000000;
		padding: 2px;
		font-style: normal;
	}
`;

const AppLayout = (): JSX.Element => {
	const [setting] = useContext(SettingContext);
	const { visible } = setting;

	return (
		<AppWrapper inSetting={visible}>
			<Header />
			<BodyLaydout />
		</AppWrapper>
	);
};

export default AppLayout;
