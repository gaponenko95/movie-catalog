import { useState } from 'react';

import MainHeader from '../../components/MainHeader/MainHeader';
import MainTitle from '../../components/MainTitle/MainTitle';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Text from '../../components/Text/Text';
import { MOVIES_DATA } from '../../helpers/moviesData';

export function Main() {
	const [movies, setMovies] = useState(MOVIES_DATA);

	const searchMovies = (e: string) =>
		setMovies(MOVIES_DATA.filter(({ title }) => title.toLowerCase().includes(e.toLowerCase())));

	return (
		<>
			<MainHeader>
				<MainTitle>Поиск</MainTitle>
				<Text small>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Text>
				<SearchForm onSubmit={searchMovies} />
			</MainHeader>
			<MovieList movies={movies} />
		</>
	);
}
