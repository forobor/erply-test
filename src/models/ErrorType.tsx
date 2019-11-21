import { Dispatch, SetStateAction } from "react";

export interface ErrorType {
	error?: string;
	setError: Dispatch<SetStateAction<string | undefined>>;
}
