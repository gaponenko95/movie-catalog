import { createContext, useState } from 'react';

export const AuthenticatedContext = createContext({
	isAuthenticated: false
});

export const AuthenticatedContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	return (
		<AuthenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
			{children}
		</AuthenticatedContext.Provider>
	);
};
