import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todoPane';
import TaskPane from './components/taskPane';
import ticker from './services/ticker';
// import context from './core/context';
import remote from './services/remote';

const App = () => {
	// eslint-disable-next-line no-console
	// console.log(context.state.todos);
	useEffect(ticker.start, []);
	useEffect(remote.fetchTodos, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
