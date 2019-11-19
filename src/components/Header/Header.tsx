import React from "react";
import "./Header.scss";
import { useHistory } from "react-router";
interface Props {}

const Header: React.FC<Props> = () => {
	const history = useHistory();

	return (
		<div
			className={
				history.location.pathname === "/login" ? (
					"header header-login"
				) : (
					"header"
				)
			}
		>
			<div>News Page</div>
			<div>Profile</div>
		</div>
	);
};

export default Header;
