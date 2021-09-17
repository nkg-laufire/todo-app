import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';
import remote from './services/remote';

const App = () => {
	useEffect(remote.fetchTodos, []);
	useEffect(remote.fetchTasks, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
