const orderSwitch = {
	popularity: 'search',
	date: 'search_by_date',
};

declare type orderType = 'date' | 'popularity';
declare type tagsType = 'story' | 'comment';
declare type hitsPerPageType = 10 | 20 | 30;

export const searchQuery = (order: orderType, query: string, tags: tagsType, page: number, hitsPerPage: hitsPerPageType): string => {
	return `/${orderSwitch[order]}?query=${query || ''}&tags=${tags || 'story'}&page=${page || 0}&hitsPerPage=${hitsPerPage || 20}`;
};
