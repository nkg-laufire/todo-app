import TodoInput from './todoInput';
import TodoList from './todoList';
import ToggleAllButton from './toggleAllButton';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ActionButton from './actionButton';
import FilterSelect from './filterSelect';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '50%',
	background: 'beige',
}

const TodoPane = () =>
	<div style={ style }>
		<h3>Todo</h3>
		<div>
			{ ToggleAllButton() }
			{ TodoInput() }
			{ ActionButton() }
		</div>
		<div>{ TodoList() }</div>
		<div>{ ClearButton() }</div>
		<div>{ FilterBar() }</div>
		<div>{ FilterSelect() }</div>
	</div>

export default TodoPane;
