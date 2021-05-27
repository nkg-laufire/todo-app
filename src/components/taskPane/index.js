import SortSelect from "./sortSelect";
import SortButton from "./sortButton";
import TaskList from "./taskList";
import SortControl from "./sortControl";

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
		<div>{ SortControl() }</div>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
