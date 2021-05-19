import TodoInput from './todoInput';
import TodoList from './todoList';
import ToggleAllButton from './toggleAllButton';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ActionButton from './actionButton';

const TodoPane = () =>
	<div>
			<div>
				{ ToggleAllButton() }
				{ TodoInput() }
				{ ActionButton() }
			</div>
			<div>{ TodoList() }</div>
			<div>{ ClearButton() }</div>
			<div>{ FilterBar() }</div>
	</div>

export default TodoPane;
