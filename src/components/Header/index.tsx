import React, { useContext } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { SettingOutlined } from '@ant-design/icons';
import { MAIN_COLOR, SECOND_COLOR } from '../../constants/styles';
import logo from '../../assets/logo.png';
import { SettingContext } from '../../contexts/SettingContext';

const HeaderLayout = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${SECOND_COLOR};
	height: 60px;
	padding: 15px;
	border-radius: 5px;
	margin: 1px;
`;

const HeaderTitle = styled.div`
	display: flex;
`;

const Logo = styled.img`
	width: 30px;
	height: 30px;
`;

const TitleText = styled.h1`
	font-size: 16px;
	margin: 0;
	line-height: 30px;
	margin-left: 5px;
`;

const SettingButton = styled(Button)`
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	:hover {
		background: ${SECOND_COLOR};
	}
	:active {
		background: ${SECOND_COLOR};
	}

	svg {
		width: 18px;
		height: 18px;
		color: ${MAIN_COLOR};
	}
`;

const Header = (): JSX.Element => {
	const [setting, setSetting] = useContext(SettingContext);
	const handleClickSetting = (): void => {
		setSetting({
			...setting,
			visible: true,
		});
	};

	return (
		<HeaderLayout>
			<HeaderTitle>
				<Logo src={logo} alt="Logo" />
				<TitleText>Header News Search App</TitleText>
			</HeaderTitle>
			<SettingButton
				icon={<SettingOutlined />}
				onClick={handleClickSetting}
			/>
		</HeaderLayout>
	);
};

export default Header;
