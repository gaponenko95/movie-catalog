import Button from '../Button/Button';
import Form from '../Form/Form.jsx';
import Input from '../Input/Input.jsx';

function SearchForm({ onSubmit }) {
	const searchMovies = e => {
		e.preventDefault();
		onSubmit(new FormData(e.target).get('search'));
	};

	return (
		<Form onSubmit={searchMovies}>
			<Input
				type='search'
				name='search'
				placeholder='Введите название'
				icon='search'
			/>
			<Button text='Искать' />
		</Form>
	);
}

export default SearchForm;
