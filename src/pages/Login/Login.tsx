import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import MainHeader from '../../components/MainHeader/MainHeader';
import MainTitle from '../../components/MainTitle/MainTitle';
import { UserContext } from '../../context/user.context';

export function Login() {
	const { accounts, setStoredAccounts } = useContext(UserContext);
	const navigate = useNavigate();
	const login = (name: string) => {
		const updatedAccounts: { name: string; isLogined: boolean }[] = accounts.map((account) =>
			account.name === name ? { ...account, isLogined: true } : account
		);

		if (!updatedAccounts.some((account) => account.name === name)) {
			updatedAccounts.push({ name, isLogined: true });
		}

		setStoredAccounts(updatedAccounts);
		navigate('/');
	};

	return (
		<>
			<MainHeader>
				<MainTitle>Вход</MainTitle>
				<LoginForm onSubmit={login} />
			</MainHeader>
		</>
	);
}
