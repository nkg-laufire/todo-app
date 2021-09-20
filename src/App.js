import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';
import remote from './services/remote';
import Ticker from './services/ticker';

const App = () => {
	useEffect(remote.fetchTodos, []);
	useEffect(Ticker.start, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
