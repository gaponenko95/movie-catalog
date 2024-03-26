import { FormEvent } from 'react';

import Button from '../Button/Button';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { SearchFormProps } from './SearchForm.props';

export type SearchForm = {
	search: {
		value: string;
	};
}

function SearchForm({ onSubmit }: SearchFormProps) {
	const searchMovies = (e: FormEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & SearchForm;
		const { search } = target;
		onSubmit(search.value);
	};

	return (
		<Form onSubmit={searchMovies}>
			<Input
				type='search'
				name='search'
				placeholder='Введите название'
				icon='search'
			/>
			<Button>Искать</Button>
		</Form>
	);
}

export default SearchForm;
