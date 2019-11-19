import React from "react";
import "./NewsComponent.scss";
import { News } from "../../models/News";

interface Props extends News {}

const NewsComponent: React.FC<Props> = ({
	author,
	title,
	description,
	url,
	urlToImage,
	publishedAt
}) => {
	return (
		<div className="news">
			<div className="text">
				<div className="author-time">
					<div className="author">{author}</div>
					<div className="time">{publishedAt}</div>
				</div>
				<h3 className="title">{title}</h3>
				<div className="description">{description}</div>
			</div>
			<div
				className="image"
				style={{ backgroundImage: `url(${urlToImage})` }}
			/>
		</div>
	);
};

export default NewsComponent;
