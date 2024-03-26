import { useEffect, useState } from 'react';

import { User } from '../context/user.props';

export function useLocalStorage(key: string): [User[], (newData: User[]) => void] {
	const [data, setData] = useState<User[]>([]);

	useEffect(() => {
		const item = localStorage.getItem(key);
		if (item) {
			const res: User[] = JSON.parse(item);
			setData(res);
		}
	}, [key]);

	const saveData = (newData: User[]) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}
