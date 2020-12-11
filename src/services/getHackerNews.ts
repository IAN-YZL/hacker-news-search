import api from '../utils/api';

export const getMatchNews = async (query: string) => {
	const { data } = await api.get(query);
	return data;
};