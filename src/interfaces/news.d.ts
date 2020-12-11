interface highlightDetails {
	value: string;
	matchlevel: string;
	matchWords: Array<string>;
}

interface highlightResult {
	author: highlightDetails;
	title?: highlightDetails;
	url?: highlightDetails;
	comment_text?: highlightDetails;
	story_title?: highlightDetails;
	story_url?: highlightDetails;
}

export interface IHackerNewsBase {
	hits: Array<INewsDetails>;
	nbHits: number;
	page?: number;
	nbPages: number;
	hitsPerPage: number;
}

export interface INewsDetails {
	created_at: Date;
	title: string;
	url: string;
	author: string;
	points?: number;
	story_text?: string;
	comment_text?: string;
	num_comments?: number;
	story_id?: string;
	story_url?: string;
	story_title?: string;
	_highlightResult: highlightResult;
}
