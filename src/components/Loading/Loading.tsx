import React, { useContext } from "react";
import "./Loading.scss";
import { NewsContext } from "../../state/contexts/NewsContext";
import { AuthContext } from "../../state/contexts/AuthContext";
interface Props {}

const Loading: React.FC<Props> = () => {
	const { state: { isFetching } } = useContext(NewsContext);
	const { state: { isSimulating } } = useContext(AuthContext);


	if (isFetching || isSimulating) {
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
