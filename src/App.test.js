import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import Game from "./pages/game";
import store from "./components/store";

test('tic tac toe', () => {
	const { getByText } = render(
		<Provider store={store}>
			<Game/>
		</Provider>
	);
	const linkElement = getByText(/tic tac toe/i);
	expect(linkElement).toBeInTheDocument();
});
