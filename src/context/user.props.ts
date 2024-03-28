import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface User {
	name: string;
	isLogined: boolean;
}

export interface UserContextType {
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
	accounts: User[];
	setStoredAccounts: (value: User[]) => void;
}

export interface UserContextProviderProps {
	children: ReactNode;
}
