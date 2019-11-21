import React, { useContext, useState, SyntheticEvent, useEffect } from "react";
import "./LoginPage.scss";
import { AuthContext } from "../../state/contexts/AuthContext";
import {
	loginSucceed,
	loginFailed,
	submitData
} from "../../state/reducers/auth";
import { fetchNews } from "../../state/reducers/news";
import { NewsContext } from "../../state/contexts/NewsContext";

interface Props {}

const LoginPage: React.FC<Props> = () => {
	const { state: { apiToken }, dispatch: authDispatch } = useContext(
		AuthContext
	);
	const { state: { status }, dispatch: newsDispatch } = useContext(NewsContext);
	const [ email, setEmail ] = useState<string>("");
	const [ token, setToken ] = useState<string>("");

	useEffect(
		() => {
			if (apiToken) {
				fetchNews(newsDispatch, apiToken);
			}
		},
		[ apiToken, newsDispatch ]
	);

	useEffect(
		() => {
			if (status === "ok") {
				authDispatch(loginSucceed());
			}
			if (status === "error") {
				authDispatch(loginFailed());
			}
		},
		[ status, authDispatch ]
	);

	const submitLogin = (event: SyntheticEvent) => {
		authDispatch(submitData("", email, token));
		event.preventDefault();
	};

	return (
		<div className="login-page">
			<div className="form-container">
				<h1> Log in</h1>
				<form className="login-form" onSubmit={submitLogin}>
					<div className="input-container">
						<input
							placeholder="Email Address"
							type="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-container">
						<input
							placeholder="API token"
							type="text"
							onChange={(e) => setToken(e.target.value)}
						/>
					</div>
					<div className="hint">
						You can get an API tocken{" "}
						<a
							href="https://newsapi.org/register"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>
					</div>
					<button>Login</button>
				</form>
				<div className="powered">Powered by News API</div>
			</div>
		</div>
	);
};

export default LoginPage;
