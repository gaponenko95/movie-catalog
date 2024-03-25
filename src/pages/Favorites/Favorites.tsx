import { useEffect, useState } from 'react';

import MainTitle from '../../components/MainTitle/MainTitle';
import { MovieItemProps } from '../../components/MovieItem/MovieItem.props';
import MovieList from '../../components/MovieList/MovieList';
import { MOVIES_DATA } from '../../helpers/moviesData';

export function Favorites() {
	const [movies, setMovies] = useState<MovieItemProps[]>([]);

	useEffect(() => {
		setMovies(MOVIES_DATA.filter(({ favorite }) => favorite));
	}, [movies]);

	return (
		<>
			<MainTitle>Избранное</MainTitle>
			<MovieList movies={movies} />
		</>
	);
}
