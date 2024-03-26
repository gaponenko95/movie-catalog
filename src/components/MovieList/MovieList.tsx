import { Link } from 'react-router-dom';

import { Movie } from '../../interfaces/movie.interface';
import EmptyState from '../EmptyState/EmptyState';
import MainTitle from '../MainTitle/MainTitle';
import MovieItem from '../MovieItem/MovieItem';
import Text from '../Text/Text';
import styles from './MovieList.module.css';
import { MovieListProps } from './MovieList.props';

function MovieList({ movies, error, isLoading }: MovieListProps) {
	return (
		<div className={styles.movieList}>
			<ul className={styles.movieListList}>
				{error && (
					<EmptyState>
						<MainTitle small>Ошибка соединения</MainTitle>
						<Text>Попробуйте позже или обратитесь в службу поддержки</Text>
					</EmptyState>
				)}
				{!isLoading &&
					!error &&
					movies.length > 0 &&
					movies.map((movie: Movie) => (
						<Link to={'/movie/' + movie['#IMDB_ID']} key={movie['#IMDB_ID']}>
							<MovieItem title={movie['#TITLE']} image={movie['#IMG_POSTER']} rating={movie['#RANK']} />
						</Link>
					))}
				{!isLoading && 
					!error && 
					movies.length === 0 &&
					(
					<EmptyState>
						<MainTitle small>Упс... Ничего не найдено</MainTitle>
						<Text>Попробуйте изменить запрос или ввести более точное название фильма</Text>
					</EmptyState>
				)}
				{isLoading && (
					<EmptyState>
						<Text>Загрузка продуктов...</Text>
					</EmptyState>
				)}
			</ul>
		</div>
	);
}

export default MovieList;
