import { React } from 'react';
import context from '../../core/context';

const AddButton = () =>
	<button
		disabled={ context.state.input === '' }
		onClick={ context.actions.addButton }>+
	</button>;

export default AddButton;
