import { createContext, FC, useEffect, useState } from 'react';

import { useLocalStorage } from '../hooks/use-localstorage.hook';
import { User, UserContextProviderProps, UserContextType } from './user.props';

export const UserContext = createContext<UserContextType>({
	user: { name: '', isLogined: false },
	setUser: () => {},
	accounts: [],
	setStoredAccounts: () => {}
});

export const UserContextProvider: FC<UserContextProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User>({ name: '', isLogined: false });
	const [accounts, setStoredAccounts] = useLocalStorage('accounts');

	useEffect(() => {
		setUser(accounts.find((account) => account.isLogined) || { name: '', isLogined: false });
	}, [accounts]);

	return <UserContext.Provider value={{ user, setUser, accounts, setStoredAccounts }}>{children}</UserContext.Provider>;
};
