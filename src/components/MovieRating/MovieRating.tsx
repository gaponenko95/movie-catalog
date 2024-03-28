import styles from './MovieRating.module.css';
import { MovieRatingProps } from './MovieRating.props';

function MovieRating({ rating }: MovieRatingProps) {
	return (
		<div className={styles.movieItemRating}>
			<img src="/star.svg" alt="Рейтинг" />
			{rating}
		</div>
	);
}

export default MovieRating;
