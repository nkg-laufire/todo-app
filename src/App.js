import { React, useEffect } from 'react';
import './App.css';
import SampleService from './services/sample';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import ToggleAllButton from './components/toggleAllButton';
import ClearButton from './components/clearButton';
import FilterBar from './components/filterBar';
import ActionButton from './components/actionButton';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div>
				{ ToggleAllButton() }
				{ TodoInput() }
				{ ActionButton() }
			</div>
			<div>{ TodoList() }</div>
			<div>{ ClearButton() }</div>
			<div>{ FilterBar() }</div>
		</div>
	);
};

export default App;
