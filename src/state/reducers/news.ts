import { customFetch } from "./../middleware/api";
import { NEWS_URL_TOP, NEWS_URL_QUERY } from "./../../config/constants";
import { Action } from "../../models/types.d";
import { News } from "../../models/News";
import { Dispatch } from "react";
import { Auth } from "../../models/Auth";

const NEWS_FETCH = "NEWS_FETCH";
const NEWS_FETCH_SUCCESS = "NEWS_FETCH_SUCCESS";
const NEWS_FETCH_FAILURE = "NEWS_FETCH_FAILURE";

const NEWS_RESET_ERROR = "NEWS_RESET_ERROR";

const NEWS_SAVE_QUERY = "NEWS_SAVE_QUERY";

export const newsInitialState: News.State = {
	isFetching: false,
	status: null,
	articles: [],
	error: null,
	searhQuery: null
};

export const newsLoading = () => ({
	type: NEWS_FETCH
});

export const newsLoadingFailure = (error: any) => ({
	type: NEWS_FETCH_FAILURE,
	error
});

export const newsLoadingSucceed = (news: News.ServerData) => ({
	type: NEWS_FETCH_SUCCESS,
	data: {
		status: news.status,
		articles: news.articles
	}
});

export const resetError = () => ({
	type: NEWS_RESET_ERROR
});

const saveQuery = (searhQuery: string | null) => ({
	type: NEWS_SAVE_QUERY,
	data: {
		searhQuery
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
				articles: [],
				isFetching: false,
				status: action.error.status,
				error: action.error
			};
		case NEWS_SAVE_QUERY:
			return {
				...state,
				searhQuery: action.data.searhQuery
			};
		case NEWS_RESET_ERROR:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};

export const fetchNews = async (
	dispatch: Dispatch<Action>,
	apiKey: Auth.State["apiToken"],
	query?: string
) => {
	const url = query ? `${NEWS_URL_QUERY}?q=${query}` : `${NEWS_URL_TOP}`;
	dispatch(newsLoading());
	query ? dispatch(saveQuery(query)) : dispatch(saveQuery(null));
	customFetch(url, apiKey)
		.then((news: News.ServerData) => dispatch(newsLoadingSucceed(news)))
		.catch((error: News.ServerError) => dispatch(newsLoadingFailure(error)));
};
