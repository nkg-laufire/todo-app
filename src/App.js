import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import AddTodo from './components/addTodo';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import ToggleAllButton from './components/toggleAllButton';
import ClearButton from './components/clearButton';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<div className="App">
			<div>
				{ ToggleAllButton() }
				{ TodoInput() }
			</div>
			<div>{ AddTodo() }</div>
			<div>{ TodoList() }</div>
			<div>{ ClearButton() }</div>
			<div>Refresh ID: { context.state.refreshID }</div>
		</div>
	);
};

export default App;
