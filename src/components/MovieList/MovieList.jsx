import styles from './MovieList.module.css';
import MovieItem from '../MovieItem/MovieItem.jsx';

function MovieList({ movies }) {
	const sortItems = (a, b) => (a.rating < b.rating ? 1 : -1);
	const sortedItems = movies.sort(sortItems);

	return (
		<div className={styles.movieList}>
			<ul className={styles.movieListList}>
				{sortedItems.map(movie => (
					<MovieItem
						key={movie.id}
						title={movie.title}
						image={movie.image}
						rating={movie.rating}
						favorite={movie.favorite}
					/>
				))}
			</ul>
		</div>
	);
}

export default MovieList;
