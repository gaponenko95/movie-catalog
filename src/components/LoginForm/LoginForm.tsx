import { FormEvent } from 'react';

import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { LoginFormProps } from './LoginForm.props';

export type LoginForm = {
	name: {
		value: string;
	};
};

export function LoginForm({ onSubmit }: LoginFormProps) {
	const joinAccount = (e: FormEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & LoginForm;
		const { name } = target;
		onSubmit(name.value);
	};

	return (
		<Form column onSubmit={joinAccount}>
			<Input placeholder="Ваше имя" type="text" name="name" />
			<Button>Войти в профиль</Button>
		</Form>
	);
}

export default LoginForm;
