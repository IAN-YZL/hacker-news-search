import React, { useState, createContext } from 'react';

export const NewsContext = createContext(undefined);

export const NewsProvider = (props) => {
	const [news, setNews] = useState({
		data: {},
		isLoaded: false,
	});

	return(
		<NewsContext.Provider value={[news, setNews]}>
			{props.children}
		</NewsContext.Provider>
	);
};