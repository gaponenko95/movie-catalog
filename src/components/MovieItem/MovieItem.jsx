import styles from './MovieItem.module.css';
import MovieRating from '../MovieRating/MovieRating.jsx';
import FavoritesButton from '../FavoritesButton/FavoritesButton.jsx';

function MovieItem({ image, title, rating, favorite }) {
	return (
		<li className={styles.movieItem}>
			<img className={styles.movieItemImage} src={image} alt={title} />
			<MovieRating rating={rating} />
			<div className={styles.movieItemBody}>
				<p className={styles.movieItemTitle}>{title}</p>
				<FavoritesButton favorite={favorite} />
			</div>
		</li>
	);
}

export default MovieItem;
