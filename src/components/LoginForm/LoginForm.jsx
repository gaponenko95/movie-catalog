import Form from '../Form/Form.jsx';
import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';

function LoginForm() {
	return (
		<Form column>
			<Input placeholder='Ваше имя' />
			<Button text='Войти в профиль' />
		</Form>
	);
}

export default LoginForm;
