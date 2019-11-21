import { Action } from "../../models/types.d";
import { Auth } from "../../models/Auth";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const SUBMIT_DATA = "SUBMIT_DATA";

export const authInitialState: Auth.State = {
	isLogged: false,
	isLogging: false,
	name: null,
	email: null,
	apiToken: null,
	error: null
};

export const submitData = (
	name: Auth.State["name"],
	email: Auth.State["email"],
	apiToken: Auth.State["apiToken"]
) => ({
	type: SUBMIT_DATA,
	data: {
		name,
		email,
		apiToken
	}
});

export const loginSucceed = () => {
	return {
		type: LOGIN_SUCCESS
	};
};

export const loginFailed = (error: string) => ({
	type: LOGIN_FAILURE,
	data: {
		error
	}
});

export const authReducer = (
	state: Auth.State = authInitialState,
	action: Action = {}
): Auth.State => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLogged: true,
			};
		case SUBMIT_DATA:
			return {
				...state,
				name: action.data.name,
				email: action.data.email,
				apiToken: action.data.apiToken
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLogged: false,
				name: null,
				email: null,
				apiToken: null,
			};
		default:
			return state;
	}
};
