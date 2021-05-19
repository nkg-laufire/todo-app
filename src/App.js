import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';
import TaskManager from './services/taskManager';

const App = () => {
	useEffect(TaskManager.init, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
