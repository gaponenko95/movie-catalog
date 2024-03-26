import './MovieItem.css';
import MovieRating from '../MovieRating/MovieRating.jsx';
import FavoritesButton from '../FavoritesButton/FavoritesButton.jsx';

function MovieItem({ image, title, rating, favorite }) {
	return (
		<li className='movie-item'>
			<img className='movie-item__image' src={image} alt={title} />
			<MovieRating rating={rating} />
			<div className='movie-item__body'>
				<p className='movie-item__title'>{title}</p>
				<FavoritesButton favorite={favorite} />
			</div>
		</li>
	);
}

export default MovieItem;
