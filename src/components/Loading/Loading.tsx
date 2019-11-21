import React, { useContext } from "react";
import "./Loading.scss";
import { NewsContext } from "../../state/contexts/NewsContext";
interface Props {}

const Loading: React.FC<Props> = () => {
	const { state: { isFetching } } = useContext(NewsContext);

	if (isFetching) {
		return (
			<div className="loading-container">
				<div className="lds-spinner">
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</div>
		);
  } 
  return null
};

export default Loading;
