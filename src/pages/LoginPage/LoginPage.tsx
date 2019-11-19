import React from "react";
import "./LoginPage.scss";

interface Props {}

const LoginPage: React.FC<Props> = () => {
	return (
		<div className="login-page">
			<div className="form-container">
				<h1> Log in</h1>
				<form>
					<div className="input-container">
						<input placeholder="Email Address" type="email" />
					</div>
					<div className="input-container">
						<input placeholder="API token" type="email" />
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
			</div>
		</div>
	);
};

export default LoginPage;
