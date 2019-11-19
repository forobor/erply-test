export interface Action {
	type?: string;
	data?: any;
	error?: any | null;
	[key: string]: any;
}