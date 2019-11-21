import React, { useContext, useState, useEffect } from "react";
import "./MainPage.scss";
import { News } from "../../models/News";
import { NewsComponent } from "../../components";
import { NewsContext } from "../../state/contexts/NewsContext";
import { useHistory } from "react-router";
import searchIcon from "../../assets/search.png";
import { fetchNews } from "../../state/reducers/news";
import { AuthContext } from "../../state/contexts/AuthContext";

interface Props {}

const MainPage: React.FC<Props> = () => {
	const { state: { apiToken } } = useContext(AuthContext);
	const { state: { articles }, dispatch } = useContext(NewsContext);
	const [ search, setSearch ] = useState<string>();
	const history = useHistory();

	useEffect(
		() => {
			fetchNews(dispatch, apiToken);
		},
		[ dispatch, apiToken ]
	);

	const navigateToArticle = (article: News.Article) => {
		history.push("/article", { article });
	};

	const searchWithQuery = () => {
		fetchNews(dispatch, apiToken, search);
	};

	return (
		<div className="page">
			<div className="search">
				<input
					placeholder="Search"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button onClick={searchWithQuery}>
					<img src={searchIcon} alt="search" />
				</button>
			</div>
			{articles.map((article: News.Article, key: number) => (
				<div
					key={key}
					className="news-container"
					onClick={() => navigateToArticle(article)}
				>
					<NewsComponent {...article} />
				</div>
			))}
		</div>
	);
};

export default MainPage;
