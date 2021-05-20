import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';
import TaskManager from './services/taskManager';
import ticker from './services/ticker';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(ticker.start, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
