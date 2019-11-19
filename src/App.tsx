import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { LoginPage, MainPage, ArticlePage, ProfilePage } from "./pages";
import { Header } from "./components";


const App: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/article" component={ArticlePage} />
				<Route path="/profile" component={ProfilePage} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
