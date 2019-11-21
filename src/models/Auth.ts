import { Dispatch } from "react";
import { Action } from "./types";

export namespace Auth {
	export interface State {
		isLogged: boolean;
		isSimulating: boolean;

		name: string | null;
		email: string | null;
		apiToken: string | null;

		error: any | null;
	}

	export interface Context {
		state: Auth.State;
		dispatch: Dispatch<Action>;
	}
}
