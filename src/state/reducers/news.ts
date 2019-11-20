import { customFetch } from "./../middleware/api";
import { NEWS_URL_TOP, NEWS_URL_QUERY } from "./../../config/constants";
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

export const newsLoadingSucceed = (news: News.ServerData) => ({
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
	query?: string
) => {
	const url = query ? `${NEWS_URL_QUERY}?q=${query}` : `${NEWS_URL_TOP}`;
	customFetch(url)
		.then((news: News.ServerData) => dispatch(newsLoadingSucceed(news)))
		.catch((error: Error) => dispatch(newsLoadingFailure(error)));
};
