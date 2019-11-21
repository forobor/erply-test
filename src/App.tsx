import React from "react";
import { Switch } from "react-router-dom";
import "./App.css";
import { LoginPage, MainPage, ArticlePage, ProfilePage } from "./pages";
import { Header, MessagePopup, ProtectedRoute, Loading } from "./components";
import AuthContextProvider from "./state/contexts/AuthContext";
import NewsContextProvider from "./state/contexts/NewsContext";

const App: React.FC = () => {
	return (
		<AuthContextProvider>
			<NewsContextProvider>
				<React.Fragment>
					<MessagePopup />
					<Loading />
					<Header />
					<Switch>
						<ProtectedRoute exact path="/" component={MainPage} />
						<ProtectedRoute login path="/login" component={LoginPage} />
						<ProtectedRoute path="/article" component={ArticlePage} />
						<ProtectedRoute path="/profile" component={ProfilePage} />
					</Switch>
				</React.Fragment>
			</NewsContextProvider>
		</AuthContextProvider>
	);
};

export default App;
