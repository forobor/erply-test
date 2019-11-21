import { Action } from "../../models/types.d";
import { Auth } from "../../models/Auth";

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const SUBMIT_CHANGES = "SUBMIT_CHANGES";

export const authInitialState: Auth.State = {
	isLogged: false,
	isLogging: false,
	name: null,
	email: null,
	apiToken: null,
	error: null
};

export const submitChanges = (
	name: Auth.State["name"],
	email: Auth.State["email"],
	apiToken: Auth.State["apiToken"]
) => ({
	type: SUBMIT_CHANGES,
	data: {
		name,
		email,
		apiToken
	}
});

export const loginSucceed = (
	email: Auth.State["email"],
	apiToken: Auth.State["apiToken"]
) => ({
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
		case SUBMIT_CHANGES:
			return {
				...state,
				name: action.data.name,
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
