import React, { useContext } from "react";
import "./MainPage.scss";
import { News } from "../../models/News";
import { NewsComponent } from "../../components";
import { NewsContext } from "../../state/contexts/NewsContext";
import { useHistory } from "react-router";

interface Props {}

const MainPage: React.FC<Props> = () => {
	const { state: { articles } } = useContext(NewsContext);
	const history = useHistory();

	const navigateToArticle = (article: News.Article) => {
		history.push("/article", { article });
	};
	
	return (
		<div className="page">
			<div className="search">
				<input placeholder="Search" />
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
