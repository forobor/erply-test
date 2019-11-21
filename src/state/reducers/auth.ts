import { Action } from "../../models/types.d";
import { Auth } from "../../models/Auth";

const SIMULATE = "SIMULATE"
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

const SUBMIT_DATA = "SUBMIT_DATA";

export const authInitialState: Auth.State = {
	isLogged: false,
	isSimulating: false,
	name: null,
	email: null,
	apiToken: null,
	error: null
};

export const simulateLoad = (value: boolean) => ({
	type: SIMULATE,
	data: {
		value
	}
})

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

export const loginFailed = () => ({
	type: LOGIN_FAILURE,
});

export const authReducer = (
	state: Auth.State = authInitialState,
	action: Action = {}
): Auth.State => {
	switch (action.type) {
		case SIMULATE:
			return {
				...state,
				isSimulating: action.data.value
			}
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
