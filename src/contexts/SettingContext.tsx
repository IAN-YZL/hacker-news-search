import React, { useState, createContext } from 'react';

export const SettingContext = createContext(undefined);

export const SettingProvider = (props) => {
	const [setting, setSetting] = useState({
		filter: {
			searchType: 'story',
			sortOrder: 'popularity',
			hitsPerPage: 20,
			page: 0,
		},
		visible: false,
		query: '',
	});


	return(
		<SettingContext.Provider value={[setting, setSetting]}>
			{props.children}
		</SettingContext.Provider>
	);
};