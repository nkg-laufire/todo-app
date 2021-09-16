import { React } from 'react';
import context from '../../core/context';
import Remote from '../../services/remote';

const EditButton = () => <button
	disabled={ context.state.input === '' }
	onClick={ () => Remote.editTodo(context) }>Ok</button>;

export default EditButton;
