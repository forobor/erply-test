import React, { useContext, useState, useEffect } from "react";
import "./MessagePopup.scss";
import { NewsContext } from "../../state/contexts/NewsContext";
import { resetError } from "../../state/reducers/news";

interface Props {}

const MessagePopup: React.FC<Props> = () => {
	const { state: { error }, dispatch } = useContext(NewsContext);
	const [ showError, setShowError ] = useState<boolean>(false);

	const cleanUpError = () => {
		setShowError(false);
		dispatch(resetError());
	};

	useEffect(
		() => {
			error && setShowError(true);
			const timeout = setTimeout(() => {
				cleanUpError();
			}, 5000);
			return () => {
				clearTimeout(timeout);
			};
		},
		[ error, cleanUpError ]
	);

	if (showError && error) {
		return (
			<div className="message">
				<div className="message_container" onClick={cleanUpError}>
					<div className="message_text">{error.message}</div>
				</div>
			</div>
		);
	}
	return null;
};

export default MessagePopup;
