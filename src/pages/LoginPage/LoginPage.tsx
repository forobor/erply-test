import React, { useContext, useState } from "react";
import "./LoginPage.scss";
import { AuthContext } from "../../state/contexts/AuthContext";
import { loginSucceed } from "../../state/reducers/auth";
import { useHistory } from "react-router";
import { fetchNews } from "../../state/reducers/news";
import { NewsContext } from "../../state/contexts/NewsContext";

interface Props {}

const LoginPage: React.FC<Props> = () => {
	const { dispatch: authDispatch } = useContext(AuthContext);
	const { state: { status }, dispatch: newsDispatch } = useContext(NewsContext);
	const history = useHistory();
	const [ email, setEmail ] = useState<string>("");
	const [ token, setToken ] = useState<string>("");

	const submitLogin = () => {
		authDispatch(loginSucceed(email, token));
		fetchNews(newsDispatch);
		if (status === "ok") {
			history.push("/");
		}
	};

	return (
		<div className="login-page">
			<div className="form-container">
				<h1> Log in</h1>
				<div className="login-form">
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
					<button onClick={submitLogin}>Login</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
