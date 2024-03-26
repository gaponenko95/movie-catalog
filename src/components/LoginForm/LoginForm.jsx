import Form from '../Form/Form.jsx';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function LoginForm({ onSubmit }) {
	const joinAccount = e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps);
	};

	return (
		<Form column onSubmit={joinAccount}>
			<Input placeholder='Ваше имя' type='text' name='name' />
			<Button text='Войти в профиль' />
		</Form>
	);
}

export default LoginForm;
