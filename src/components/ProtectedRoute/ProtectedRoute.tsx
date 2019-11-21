import React, { useContext } from "react";
import { AuthContext } from "../../state/contexts/AuthContext";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
	login?: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ login, ...rest }) => {
	const { state: { isLogged } } = useContext(AuthContext);

	if (login) {
		return isLogged ? (
			<Redirect
				to={{
					pathname: "/main"
				}}
			/>
		) : (
			<Route {...rest} />
		);
	}

	if (isLogged) {
		return <Route {...rest} />;
	}
	return (
		<Redirect
			to={{
				pathname: "/"
			}}
		/>
	);
};

export default ProtectedRoute;
