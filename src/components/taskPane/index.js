import SortSelect from "./sortSelect";
import SortButton from "./sortButton";
import TaskList from "./taskList";

const style = {
	position: 'absolute',
	top: 0,
	right: 0,
	height: '100%',
	width: '50%',
	background: 'bisque',
}

const TaskPane = () =>
	<div style={ style }>
		<h3>Task</h3>
		<div>{ SortSelect() }</div>
		<div>{ SortButton() }</div>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
