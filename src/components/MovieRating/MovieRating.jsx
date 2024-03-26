import styles from './MovieRating.module.css';

function MovieRating({ rating }) {
	return (
		<div className={styles.movieItemRating}>
			<img src='/star.svg' alt='Рейтинг' />
			{rating}
		</div>
	);
}

export default MovieRating;
