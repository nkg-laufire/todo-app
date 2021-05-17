import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idLength } = config;

const getTodo = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const addTodo = (todos, text) => todos.concat(getTodo(text));

const toggleTodo = (todos, data) => todos.map((todo) => (todo.id !== data.id
	? todo
	: {
		...todo,
		completed: !data.completed,
	}
));

const removeTodo = (todos, todo) =>
	todos.filter((current) => current.id !== todo.id);

const toggleTodos = (todos, isComplete) => todos.map((todo) => ({
	...todo,
	completed: isComplete,
}));

const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;

const getCompletedCount = (todos) =>
	todos.filter((todo) => todo.completed).length;

const getTodoCount = (todos) => todos.length;

const clearCompleted = (todos) =>
	todos.filter((todo) => !todo.completed);

const TodoManager = {
	addTodo,
	toggleTodo,
	removeTodo,
	toggleTodos,
	getActiveCount,
	getCompletedCount,
	getTodoCount,
	clearCompleted,
};

export default TodoManager;
