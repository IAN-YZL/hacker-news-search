import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://hn.algolia.com/api/v1',
});

export default instance;
