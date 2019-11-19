import React from "react";
import './ArticlePage.scss'
import { NewsComponent } from "../../components";
import { News } from "../../models/News";

interface Props {
	news: News;
}

const ArticlePage: React.FC<Props> = ({ news }) => {
	return (
		<div className="page">
			<div className="content-article">
				<NewsComponent {...news} />
				<div className="content-text">{news.content}</div>
			</div>
		</div>
	);
};

export default ArticlePage;
