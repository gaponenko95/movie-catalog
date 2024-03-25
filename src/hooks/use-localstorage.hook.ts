import { useEffect, useState } from 'react';

export function useLocalStorage(
	key: string
): [{ name: string; isLogined: boolean }[], (newData: { name: string; isLogined: boolean }[]) => void] {
	const [data, setData] = useState<{ name: string; isLogined: boolean }[]>([]);

	useEffect(() => {
		const item = localStorage.getItem(key);
		if (item) {
			const res = JSON.parse(item);
			setData(res);
		}
	}, []);

	const saveData = (newData: { name: string; isLogined: boolean }[]) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}
