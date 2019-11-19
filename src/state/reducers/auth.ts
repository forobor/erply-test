import { Action } from "../../models/types.d";
import { Auth } from "../../models/Auth";

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

export const authInitialState: Auth.State = {
	isLogged: false,
	isLogging: false,
	email: null,
	apiToken: null,
	error: null
};


export const loginSucceed = (email: string, apiToken: string) => ({
	type: LOGIN_SUCCESS,
	data: {
		email,
		apiToken
	}
});

export const authReducer = (
	state: Auth.State = authInitialState,
	action: Action = {}
): Auth.State => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isLogging: true
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLogging: false,
				isLogged: true,
				email: action.data.email,
				apiToken: action.data.apiToken
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLogging: false,
				error: action.error
			};
		default:
			return state;
	}
};
