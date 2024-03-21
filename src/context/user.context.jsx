import { createContext, useState } from 'react';

const initialState = {
	isAuthenticated: false
};

export const AuthenticatedContext = createContext(initialState);

export const AuthenticatedContextProvider = ({ children }) => {
	const [state, setState] = useState(initialState);

	return (
		<AuthenticatedContext.Provider value={state}>
			{children}
		</AuthenticatedContext.Provider>
	);
};
