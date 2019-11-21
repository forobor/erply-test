import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { LoginPage, MainPage, ArticlePage, ProfilePage } from "./pages";
import { Header, MessagePopup } from "./components";
import AuthContextProvider from "./state/contexts/AuthContext";
import NewsContextProvider from "./state/contexts/NewsContext";

const App: React.FC = () => {
	return (
		<AuthContextProvider>
			<NewsContextProvider>
				<React.Fragment>
					<MessagePopup />
					<Header />
					<Switch>
						<Route exact path="/" component={MainPage} />
						<Route path="/login" component={LoginPage} />
						<Route path="/article" component={ArticlePage} />
						<Route path="/profile" component={ProfilePage} />
					</Switch>
				</React.Fragment>
			</NewsContextProvider>
		</AuthContextProvider>
	);
};

export default App;
