import React from "react";
import { Switch, Redirect } from "react-router-dom";
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
						<ProtectedRoute login exact path="/" component={LoginPage} />
						<ProtectedRoute path="/main" component={MainPage} />
						<ProtectedRoute path="/article" component={ArticlePage} />
						<ProtectedRoute path="/profile" component={ProfilePage} />
						<Redirect to="/" />
					</Switch>
				</React.Fragment>
			</NewsContextProvider>
		</AuthContextProvider>
	);
};

export default App;
