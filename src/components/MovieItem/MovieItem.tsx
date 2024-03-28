import FavoritesButton from '../FavoritesButton/FavoritesButton';
import MovieRating from '../MovieRating/MovieRating';
import styles from './MovieItem.module.css';
import { MovieItemProps } from './MovieItem.props';

function MovieItem({ image, title, rating, favorite }: MovieItemProps) {
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
