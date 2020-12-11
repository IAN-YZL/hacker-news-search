import { Select, Button } from 'antd';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR, SECOND_COLOR } from '../../constants/styles';
import { SettingContext } from '../../contexts/SettingContext';
import { NewsContext } from '../../contexts/NewsContext';

const { Option } = Select;

const ModalLayout = styled.div`
	position: absolute;
	left:50%;
	top:50%;
	margin-top:-225px;
	margin-left:-150px;
	width: 300px;
	height: 450px;
	background-color: ${SECOND_COLOR};
	border-radius: 5px;
	text-align: center;
	padding-top: 50px;
`;

const SettingSelector = styled(Select)`
	margin: 5px 0 15px 0;
	width: 150px;
`;

const SettingLabel = styled.label`
	font-size: 16px;
`;

const ButtonWrapper = styled.div`
	margin-top: 20px;
`;

const SettingButton = styled(Button)`
	background-color: ${(props: ButtonProps) => (props.category === 'apply' ? '#1890ff' : MAIN_COLOR)};
	color: #ffffff;
	margin: 3px;
	font-weight: 500;
`;

declare type ButtonProps = {
	category: 'apply' | 'cancel';
}

const SettingModal = (): JSX.Element => {
	const [setting, setSetting] = useContext(SettingContext);
	const [currentFilter, setCurrentFilter] = useState({
		...setting.filter,
	});

	const handleCancel = (): void => {
		setSetting({
			...setting,
			visible: false,
		});
		setCurrentFilter({
			...setting.filter,
		});
	}

	const handleSelect = (type, value): void => {
		setCurrentFilter( {
			...currentFilter,
			[type]: value,
		});
	}

	const [news, setNews] = useContext(NewsContext);
	const handleApply = (): void => {
		setSetting({
			...setting,
			filter: currentFilter,
			visible: false,
		});
		setNews({
			...news,
			isLoaded: false,
		})
	};

	return (
		<ModalLayout hidden={!setting.visible}>
			<div>
				<div>
					<SettingLabel>Search Type</SettingLabel>
				</div>
				<SettingSelector
					onSelect={(event) => handleSelect('searchType', event)}
					defaultValue={currentFilter.searchType}
					value={currentFilter.searchType}
				>
					<Option value='story'>Stories</Option>
					<Option value='comment'>Comments</Option>
				</SettingSelector>
			</div>
			<div>
				<div>
					<SettingLabel>Sort Order</SettingLabel>
				</div>
				<SettingSelector
					onSelect={(event) => handleSelect('sortOrder', event)}
					defaultValue={currentFilter.sortOrder}
					value={currentFilter.sortOrder}
				>
					<Option value='popularity'>Popularity</Option>
					<Option value='date'>Date</Option>
				</SettingSelector>
			</div>
			<div>
				<div>
					<SettingLabel>Hits per Page</SettingLabel>
				</div>
				<SettingSelector
					onSelect={(event) => handleSelect('hitsPerPage', event)}
					defaultValue={currentFilter.hitsPerPage}
					value={currentFilter.hitsPerPage}
				>
					<Option value={10}>10</Option>
					<Option value={20}>20</Option>
					<Option value={30}>30</Option>
				</SettingSelector>
			</div>
			<ButtonWrapper>
				<SettingButton
					category='apply'
					onClick={handleApply}
				>
					Apply
				</SettingButton>
				<SettingButton 
					category='cancel'
					onClick={handleCancel}
				>
					Cancel
				</SettingButton>
			</ButtonWrapper>
		</ModalLayout>
	);
};

export default SettingModal;
