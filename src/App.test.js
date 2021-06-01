import { React } from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('./core/context', () => ({
	state: {
		input: '',
		todos: [],
		filter: 'all',
		order: 'none',
		editing: null,
		tasks: [],
	},
}));

import App from './App';

test.skip('renders learn react link', () => {
	render(<App />);
	const someText = screen.getByText(/Todo/i);

	expect(someText).toBeInTheDocument();
});
