import { Dispatch } from "react";
import { Action } from "./types";

export namespace News {
	export interface State {
		isFetching: boolean;
		status: "ok" | "error" | null;
		error: any | null;
		articles: Article[];
  }
  
  export interface Context {
    state: News.State;
		dispatch: Dispatch<Action>;
  }

	export interface Article {
		source: {
			id: string;
			name: string;
		};
		author: string;
		title: string;
		description: string;
		url: string;
		urlToImage: string;
		publishedAt: string;
		content: string;
	}
}
