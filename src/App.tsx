import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Registration from './components/Registration';
import Login from './components/Login';
import DefaultPage from './components/DefaultPage';

function App () {
	const defaultPage = <DefaultPage />;
	const registration = <Registration />;
	const logIn = <Login />;

	return (
		<div className="flex justify-center items-center">
			<Router>
				<Switch>
					<Route exact path="/">
						{defaultPage}
					</Route>
					<Route exact path="/registration">
						{registration}
					</Route>
					<Route exact path="/log-in">
						{logIn}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
