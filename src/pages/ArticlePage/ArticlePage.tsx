import React from "react";
import './ArticlePage.scss'
import { NewsComponent } from "../../components";
import { Location } from "history";

interface Props {
	location: Location
}

const ArticlePage: React.FC<Props> = ({ location: { state: { article} } }) => {
	return (
		<div className="page">
			<div className="content-article">
				<NewsComponent {...article} />
				<div className="content-text">{article.content}</div>
			</div>
		</div>
	);
};

export default ArticlePage;
