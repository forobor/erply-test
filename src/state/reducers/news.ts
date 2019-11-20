import { NEWS_URL } from "./../../config/constants";
import { Action } from "../../models/types.d";
import { News } from "../../models/News";
import { Dispatch } from "react";
import { Auth } from "../../models/Auth";

const NEWS_FETCH = "NEWS_FETCH";
const NEWS_FETCH_SUCCESS = "NEWS_FETCH_SUCCESS";
const NEWS_FETCH_FAILURE = "NEWS_FETCH_FAILURE";

export const newsInitialState: News.State = {
	isFetching: false,
	status: null,
	articles: [],
	error: null
};

export const newsLoading = (isFetching: boolean) => ({
	type: NEWS_FETCH,
	isFetching
});

export const newsLoadingFailure = (error: any) => ({
	type: NEWS_FETCH_FAILURE,
	isFetching: false,
	error
});

export const newsLoadingSucceed = (news: News.State) => ({
	type: NEWS_FETCH_SUCCESS,
	data: {
		status: news.status,
		articles: news.articles
	}
});

export const newsReducer = (
	state: News.State = newsInitialState,
	action: Action = {}
): News.State => {
	switch (action.type) {
		case NEWS_FETCH:
			return {
				...state,
				isFetching: true
			};
		case NEWS_FETCH_SUCCESS:
			return {
				...state,
				isFetching: false,
				status: action.data.status,
				articles: action.data.articles
			};
		case NEWS_FETCH_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
};

export const fetchNews = async (
	dispatch: Dispatch<Action>,
	apiToken: Auth.State["apiToken"],
	query?: string
) => {
	const url = query
		? `${NEWS_URL}?q=${query}&apiKey=${apiToken}`
		: `${NEWS_URL}?apiKey=${apiToken}`;
	dispatch(newsLoading(true));
	fetch(`${url}`)
		.then((response) => {
			// TODO: show error
			if (response.status !== 200) throw Error("error");
			dispatch(newsLoading(false));
			return response;
		})
		.then((response) => response.json())
		.then((news) => dispatch(newsLoadingSucceed(news)))
		.catch((error) => dispatch(newsLoadingFailure(error)));
};
