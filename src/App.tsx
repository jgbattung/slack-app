import React from 'react';
import './App.css';
import Slack_RGB from './Slack_RGB.svg';
import DefaultPage from './components/DefaultPage';
import Login from "./components/Login";

function App () {
	console.log(typeof Slack_RGB)
	return (
		<div className="grid h-screen place-items-center">
			{/* <DefaultPage /> */}
			
			<Login logo={Slack_RGB}/>
		</div>
	);
}

export default App;
