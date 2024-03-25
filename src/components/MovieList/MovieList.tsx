import { Link } from 'react-router-dom';

import MainTitle from '../MainTitle/MainTitle';
import MovieItem from '../MovieItem/MovieItem';
import { MovieItemProps } from '../MovieItem/MovieItem.props';
import Text from '../Text/Text';
import styles from './MovieList.module.css';
import { MovieListProps } from './MovieList.props';

function MovieList({ movies }: MovieListProps) {
	const sortItems = (a: MovieItemProps, b: MovieItemProps) => (a.rating < b.rating ? 1 : -1);
	const sortedItems = movies.sort(sortItems);

	return (
		<div className={styles.movieList}>
			<ul className={styles.movieListList}>
				{movies.length > 0 ? (
					sortedItems.map((movie: MovieItemProps) => (
						<Link to={'/movie/' + movie.id} key={movie.id}>
							<MovieItem
								id={movie.id}
								title={movie.title}
								image={movie.image}
								rating={movie.rating}
								favorite={movie.favorite}
							/>
						</Link>
					))
				) : (
					<div className={styles.movieListEmpty}>
						<MainTitle small>Упс... Ничего не найдено</MainTitle>
						<Text>Попробуйте изменить запрос или ввести более точное название фильма</Text>
					</div>
				)}
			</ul>
		</div>
	);
}

export default MovieList;
