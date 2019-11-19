import React, { createContext, useReducer, useEffect } from "react";
import { newsInitialState, newsReducer } from "../reducers/news";
import { News } from "../../models/News";

interface Props {}

export const NewsContext = createContext({} as News.Context);

const NewsContextProvider: React.FC<Props> = (props) => {
	const [ state, dispatch ] = useReducer(newsReducer, newsInitialState, () => {
		const localData = localStorage.getItem("news");
		return localData ? JSON.parse(localData) : newsInitialState;
	});

	useEffect(
		() => {
			localStorage.setItem("news", JSON.stringify(state));
		},
		[ state ]
	);
	
	return (
		<NewsContext.Provider value={{ state, dispatch }}>
			{props.children}
		</NewsContext.Provider>
	);
};

export default NewsContextProvider;
