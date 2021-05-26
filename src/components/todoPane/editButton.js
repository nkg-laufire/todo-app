import { React } from 'react';
import context from '../../core/context';

const EditButton = () => <button
	disabled={ context.state.input === '' }
	onClick={ () => context.actions.todo.edit() }>Ok</button>;

export default EditButton;
