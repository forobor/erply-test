import React from "react";
import "./Header.scss";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

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
			<div>
				<Link to="/">News Page</Link>
			</div>
			<div>
				<Link to="/profile">Profile</Link>
			</div>
		</div>
	);
};

export default Header;
