import SortSelect from "./sortSelect";
import SortButton from "./sortButton";
import TaskList from "./taskList";
import SortControl from "./sortControl";

const TaskPane = () =>
	<div className="task-pane">
		<h3>Task</h3>
		<div>{ SortControl() }</div>
		<div>{ TaskList() }</div>
	</div>

export default TaskPane;
