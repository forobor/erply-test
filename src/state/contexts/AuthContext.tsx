import React, { createContext, useReducer, useEffect } from "react";
import { authReducer, authInitialState } from "../reducers/auth";
import { Auth } from "../../models/Auth";

interface Props {}

export const AuthContext = createContext({} as Auth.Context);

const AuthContextProvider: React.FC<Props> = (props) => {
	const [ state, dispatch ] = useReducer(authReducer, authInitialState, () => {
		const localData = localStorage.getItem("auth");
		return localData ? JSON.parse(localData) : authInitialState;
	});

	useEffect(
		() => {
			localStorage.setItem("auth", JSON.stringify(state));
		},
		[ state ]
	);
	
	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
