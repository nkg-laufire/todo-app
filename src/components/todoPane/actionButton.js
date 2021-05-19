import context from '../../core/context';
import AddButton from './addButton';
import EditButton from './editButton';

const ActionButton = () => (context.state.editing
	? EditButton()
	: AddButton()
);

export default ActionButton;
