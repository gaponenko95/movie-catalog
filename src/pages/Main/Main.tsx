import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import MainHeader from '../../components/MainHeader/MainHeader';
import MainTitle from '../../components/MainTitle/MainTitle';
import MovieList from '../../components/MovieList/MovieList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Text from '../../components/Text/Text';
import { PREFIX } from '../../helpers/API';
import { Movie } from '../../interfaces/movie.interface';

export function Main() {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMovies = async (searchTerm: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`${PREFIX}?q=${searchTerm.toLowerCase()}`);
			if (data && data.description) {
				setMovies(data.description);
				setIsLoading(false);
			}
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMovies('');
	}, [])

	return (
		<>
			<MainHeader>
				<MainTitle>Поиск</MainTitle>
				<Text small>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Text>
				<SearchForm onSubmit={getMovies} />
			</MainHeader>
			<MovieList movies={movies} error={error} isLoading={isLoading} />
		</>
	);
}
